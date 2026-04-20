/* ===========================================================
   MINIMA — Trust Layer dossier
   Client-side routing + markdown rendering
   =========================================================== */

(function () {
  'use strict';

  // ------- Registry of every document -----------------------
  // order used to power the in-reader "Series" navigation
  const DOCS = [
    { id: 'a1',  file: 'article_1_eu_ai_act.md',         title: 'The EU AI Act: What It Actually Says', kind: 'Article 01 · Regulatory analysis',  stats: '6,115 words' },
    { id: 'a2',  file: 'article_2_compliance_gap.md',    title: 'The $7B Compliance Industry Has a Blind Spot', kind: 'Article 02 · Market landscape',   stats: '3,988 words' },
    { id: 'a3',  file: 'article_3_edge_native_solution.md', title: 'The Edge-Native Answer',             kind: 'Article 03 · Technical solution', stats: '5,773 words' },
    { id: 'a4',  file: 'article_4_strengths_applications.md', title: 'Beyond Compliance — ARM, Siemens, Fetch.ai', kind: 'Article 04 · Partnerships',   stats: '3,958 words' },
    { id: 'a5',  file: 'article_5_investment_thesis.md', title: 'The Asymmetric Bet',                   kind: 'Article 05 · Investment thesis',  stats: '3,455 words · 54 citations' },

    { id: 'r1',  file: 'minima_deep_research.md',        title: 'Minima Technical Deep Dive',           kind: 'Research · Primary',              stats: '61 KB' },
    { id: 'r2',  file: 'eu_ai_act_research.md',          title: 'EU AI Act Legal Analysis',             kind: 'Research · Legal',                stats: '75 KB' },
    { id: 'r3',  file: 'ai_compliance_market.md',        title: 'AI Compliance Market Landscape',       kind: 'Research · Market',               stats: '45 KB' },
    { id: 'r4',  file: 'minima_agent_thesis.md',         title: 'Agent Thesis: Why Agents Need Minima', kind: 'Research · Thesis',               stats: '34 KB' },

    { id: 's1',  file: 'minima_machines_identity.md',    title: '@MinimaMachines — Character Identity & Voice', kind: 'Strategy · Brand / voice',  stats: '27 KB' },
    { id: 's2',  file: 'minima_amplification_plan.md',   title: '4-Tier Amplification Plan',            kind: 'Strategy · Campaign',             stats: '15 KB' },
    { id: 's3',  file: 'minima_coindesk_strategy.md',    title: 'CoinDesk Coverage Playbook',           kind: 'Strategy · Media',                stats: '7 KB' },

    { id: 'acc', file: 'minima_profile_setup.md',        title: '@MinimaMachines & @MinimaDePIN — Profile, Banner, Bio', kind: 'Account Setup', stats: '3 KB' },
  ];

  const byFile = Object.fromEntries(DOCS.map(d => [d.file, d]));
  const byId   = Object.fromEntries(DOCS.map(d => [d.id, d]));

  const homeView   = document.getElementById('home-view');
  const readerView = document.getElementById('reader-view');
  const readerBody = document.getElementById('readerBody');
  const readerTitle = document.getElementById('readerTitle');
  const readerEyebrow = document.getElementById('readerEyebrow');
  const readerKind = document.getElementById('readerKind');
  const readerDocTitle = document.getElementById('readerDocTitle');
  const readerStats = document.getElementById('readerStats');
  const tocList = document.getElementById('tocList');
  const seriesList = document.getElementById('seriesList');

  // Cache for fetched markdown
  const mdCache = new Map();

  // Configure marked
  if (window.marked) {
    marked.setOptions({
      gfm: true,
      breaks: false,
      mangle: false,
      headerIds: true,
      smartypants: false,
    });
  }

  // ------- Wire up card clicks -> reader --------------------
  document.querySelectorAll('[data-doc]').forEach(el => {
    el.addEventListener('click', (ev) => {
      const file = el.getAttribute('data-doc');
      if (!file) return;
      ev.preventDefault();
      openReader(file);
    });
  });

  // Back link
  const backHome = document.getElementById('backHome');
  if (backHome) {
    backHome.addEventListener('click', (ev) => {
      ev.preventDefault();
      closeReader();
    });
  }

  // Hash-based routing — open reader if hash matches an id
  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();

  function routeFromHash() {
    const h = (location.hash || '').replace('#', '');
    // Don't treat section anchors on home page (thesis, numbers, articles, hub, tech, partners, top) as reader routes
    const sectionAnchors = new Set(['', 'top', 'thesis', 'numbers', 'articles', 'hub', 'tech', 'partners', 'doc']);
    if (byId[h]) {
      openReader(byId[h].file);
    } else if (sectionAnchors.has(h) && readerView && !readerView.hasAttribute('hidden')) {
      closeReader();
    }
  }

  function openReader(file) {
    const doc = byFile[file];
    if (!doc) return;

    // Swap views
    homeView.hidden = true;
    readerView.hidden = false;
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Populate meta
    readerEyebrow.textContent = doc.kind;
    readerTitle.textContent = doc.title;
    readerKind.textContent = doc.kind;
    readerDocTitle.textContent = doc.title;
    readerStats.textContent = doc.stats;
    document.title = doc.title + ' — Minima dossier';

    // Populate series list
    renderSeriesList(doc.id);

    // Load body
    readerBody.innerHTML = '<div class="loading">Loading document…</div>';
    tocList.innerHTML = '';

    loadDoc(file).then(md => {
      const cleaned = stripFrontMatter(md);
      const html = window.marked ? marked.parse(cleaned) : escapeHtml(cleaned);
      readerBody.innerHTML = html;
      // After render: drop the leading H1 if it duplicates the title we already show
      stripDuplicateLeadingH1(readerBody, doc.title);
      // Open external links in new tab
      readerBody.querySelectorAll('a[href^="http"]').forEach(a => {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      });
      // Build table of contents
      buildToc(readerBody, tocList);
      // Scroll spy
      setupScrollSpy(readerBody, tocList);
    }).catch(err => {
      readerBody.innerHTML = '<div class="loading">Could not load document: ' + escapeHtml(String(err && err.message || err)) + '</div>';
    });
  }

  function closeReader() {
    readerView.hidden = true;
    homeView.hidden = false;
    document.title = 'Minima — The Trust Layer for Autonomous Machines';
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }

  async function loadDoc(file) {
    if (mdCache.has(file)) return mdCache.get(file);
    const url = 'content/' + file;
    const res = await fetch(url, { cache: 'force-cache' });
    if (!res.ok) throw new Error('HTTP ' + res.status + ' fetching ' + file);
    const text = await res.text();
    mdCache.set(file, text);
    return text;
  }

  // Strip YAML front matter if any
  function stripFrontMatter(md) {
    if (md.startsWith('---')) {
      const end = md.indexOf('\n---', 3);
      if (end !== -1) return md.slice(end + 4).replace(/^\s*\n/, '');
    }
    return md;
  }

  // If the first rendered heading is an H1 matching the doc title, remove it
  function stripDuplicateLeadingH1(container, title) {
    const firstHeading = container.querySelector('h1, h2');
    if (!firstHeading) return;
    const t = firstHeading.textContent.trim().toLowerCase();
    const needle = title.trim().toLowerCase().split('—')[0].split(':')[0].trim();
    if (t.includes(needle.slice(0, Math.min(20, needle.length)))) {
      firstHeading.remove();
    }
  }

  function renderSeriesList(activeId) {
    const active = byId[activeId];
    if (!active) return;
    // Decide grouping: if this is an article (a1..a5), show the 5 article series; otherwise show the same category.
    const isArticle = /^a\d$/.test(activeId);
    let group;
    if (isArticle) {
      group = DOCS.filter(d => /^a\d$/.test(d.id));
    } else {
      const tag = active.kind.split('·')[0].trim();
      group = DOCS.filter(d => d.kind.split('·')[0].trim() === tag);
    }
    seriesList.innerHTML = group.map(d => {
      const cls = d.id === activeId ? 'current' : '';
      return `<li><a href="#${d.id}" class="${cls}" data-doc-link="${d.file}">${escapeHtml(d.title)}</a></li>`;
    }).join('');

    seriesList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (ev) => {
        const file = a.getAttribute('data-doc-link');
        if (file) {
          ev.preventDefault();
          openReader(file);
        }
      });
    });
  }

  function slugify(str) {
    return String(str)
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .slice(0, 80);
  }

  function buildToc(container, list) {
    const headings = container.querySelectorAll('h2, h3');
    if (!headings.length) {
      list.innerHTML = '<li><a href="#" style="color:var(--ink-4)">No sections</a></li>';
      return;
    }
    const used = new Set();
    const items = [];
    headings.forEach(h => {
      let id = h.id || slugify(h.textContent);
      if (!id) return;
      let base = id, n = 2;
      while (used.has(id)) { id = base + '-' + n; n++; }
      used.add(id);
      h.id = id;
      const level = h.tagName.toLowerCase(); // h2 | h3
      items.push({ id, text: h.textContent, level });
    });
    // Limit to a reasonable number to keep the sidebar readable
    const MAX_ITEMS = 60;
    const truncated = items.slice(0, MAX_ITEMS);
    list.innerHTML = truncated.map(it => `
      <li class="${it.level}"><a href="#${it.id}">${escapeHtml(it.text)}</a></li>
    `).join('');

    list.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (ev) => {
        const id = a.getAttribute('href').replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          ev.preventDefault();
          const y = el.getBoundingClientRect().top + window.scrollY - 90;
          window.scrollTo({ top: y, behavior: 'smooth' });
          // Do not set hash — would trigger our router
        }
      });
    });
  }

  function setupScrollSpy(container, list) {
    const links = Array.from(list.querySelectorAll('a'));
    if (!links.length) return;
    const targets = links.map(a => document.getElementById(a.getAttribute('href').replace('#','')))
                         .filter(Boolean);
    if (!targets.length) return;

    const map = new Map();
    targets.forEach((t, i) => map.set(t, links[i]));

    const obs = new IntersectionObserver((entries) => {
      // Pick the topmost visible heading
      const visible = entries.filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) {
        const link = map.get(visible[0].target);
        if (link) {
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    }, { rootMargin: '-100px 0px -70% 0px', threshold: [0, 1] });

    targets.forEach(t => obs.observe(t));
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // ---- Intersection-based subtle reveal for cards on home ----
  const revealables = document.querySelectorAll('.article-card, .doc-card, .partner-card, .stat, .pillar');
  if (revealables.length && 'IntersectionObserver' in window) {
    revealables.forEach(el => { el.style.opacity = '0'; el.style.transform = 'translateY(8px)'; el.style.transition = 'opacity .5s ease, transform .5s ease'; });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    revealables.forEach(el => io.observe(el));
  }
})();
