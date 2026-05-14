// ═══════════════════════════════════════════════════════════
// TECHPEAK — app.js
// ═══════════════════════════════════════════════════════════

const DEV_PASSWORD = "A65431Ggyigrreyfreib97.90Ohdbzbeiz1//";

// ══ STORAGE ══
function saveData() {
  try {
    localStorage.setItem('tp_products', JSON.stringify(state.products));
    localStorage.setItem('tp_categories', JSON.stringify(state.categories));
    localStorage.setItem('tp_comments', JSON.stringify(state.comments));
  } catch(e) {}
}

function loadData() {
  try {
    const p = localStorage.getItem('tp_products');
    const c = localStorage.getItem('tp_categories');
    const cm = localStorage.getItem('tp_comments');
    if (p) state.products = JSON.parse(p);
    else state.products = JSON.parse(JSON.stringify(defaultProducts));
    if (c) state.categories = JSON.parse(c);
    else state.categories = JSON.parse(JSON.stringify(defaultCategories));
    if (cm) state.comments = JSON.parse(cm);
    else state.comments = {};
  } catch(e) {
    state.products = JSON.parse(JSON.stringify(defaultProducts));
    state.categories = JSON.parse(JSON.stringify(defaultCategories));
    state.comments = {};
  }
}

// ══ APP STATE ══
const state = {
  products: [],
  categories: [],
  comments: {},
  activeCategory: 'all',
  activePrice: 'all',
  activeUsage: 'all',
  sortBy: 'rating',
  compareList: [],
  search: '',
  devUnlocked: false,
  devEditId: null
};

// ══ INIT ══
document.addEventListener('DOMContentLoaded', () => {
  loadData();
  buildNav();
  buildCategoryFilters();
  renderGrid();
  renderTopPicks();
  updateStats();
  animateHeroNumbers();
  attachFilterListeners();
  attachModalListeners();
  attachDevListeners();
});

// ══ UTILS ══
function getCatLabel(catId) {
  const c = state.categories.find(x => x.id === catId);
  return c ? c.label : catId;
}
function getCatIcon(catId) {
  const c = state.categories.find(x => x.id === catId);
  return c ? c.icon : '📦';
}
function getNextId() {
  return state.products.length ? Math.max(...state.products.map(p => p.id)) + 1 : 1;
}
function renderStars(rating, max = 5) {
  let h = '';
  for (let i = 1; i <= max; i++) {
    h += `<span class="star-icon${i <= rating ? ' on' : ''}">★</span>`;
  }
  return h;
}

// ══ NAV DYNAMIC ══
function buildNav() {
  const ul = document.getElementById('navLinks');
  if (!ul) return;
  const cats = [{ id: 'all', label: 'Tout', icon: '◈' }, ...state.categories].slice(0, 8);
  ul.innerHTML = cats.map(c => `
    <li><a href="#" class="nav-link${c.id === 'all' ? ' active' : ''}" data-nav="${c.id}">
      ${c.id === 'all' ? '' : c.icon + ' '}${c.label}
    </a></li>`).join('');
  ul.querySelectorAll('.nav-link').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      ul.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      state.activeCategory = a.dataset.nav;
      document.querySelectorAll('[data-cat]').forEach(b => {
        b.classList.toggle('chip--active', b.dataset.cat === a.dataset.nav);
      });
      renderGrid();
    });
  });
}

// ══ CATEGORY FILTERS ══
function buildCategoryFilters() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;
  container.innerHTML = `<button class="chip chip--active" data-cat="all">Tout</button>` +
    state.categories.map(c => `<button class="chip" data-cat="${c.id}">${c.icon} ${c.label}</button>`).join('');
  container.querySelectorAll('[data-cat]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      state.activeCategory = btn.dataset.cat;
      renderGrid();
    });
  });
}

// ══ FILTERING ══
function getFiltered() {
  let list = [...state.products];
  if (state.activeCategory !== 'all') list = list.filter(p => p.cat === state.activeCategory);
  if (state.activePrice !== 'all') {
    const [mn, mx] = state.activePrice.split('-').map(Number);
    list = list.filter(p => p.price >= mn && p.price <= mx);
  }
  if (state.activeUsage !== 'all') list = list.filter(p => Array.isArray(p.usage) && p.usage.includes(state.activeUsage));
  if (state.search) {
    const s = state.search.toLowerCase();
    list = list.filter(p =>
      (p.name || '').toLowerCase().includes(s) ||
      (p.brand || '').toLowerCase().includes(s) ||
      (p.subtitle || '').toLowerCase().includes(s) ||
      getCatLabel(p.cat).toLowerCase().includes(s)
    );
  }
  switch (state.sortBy) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'newest':     list.sort((a,b) => (b.year||0) - (a.year||0)); break;
    case 'popular':    list.sort((a,b) => (b.popular||0) - (a.popular||0)); break;
    default:           list.sort((a,b) => (b.rating||0) - (a.rating||0));
  }
  return list;
}

// ══ RENDER CARD ══
function renderCard(p) {
  const inCompare = state.compareList.includes(p.id);
  const badge = p.badge ? `<div class="card-badge badge-${p.badge}">${p.badgeLabel}</div>` : '';
  const imgContent = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="card-img-placeholder" style="background:${p.color||'#1e1e30'}">${getCatIcon(p.cat)}</div>`;

  return `
  <div class="product-card" data-id="${p.id}">
    <div class="dev-num">#${p.id}</div>
    <div class="card-img" style="background:${p.color||'#1e1e30'}">
      ${imgContent}
      ${badge}
      <button class="card-compare-btn ${inCompare?'added':''}" data-id="${p.id}">${inCompare?'✓':'+'} Comparer</button>
    </div>
    <div class="card-body">
      <div class="card-cat">${getCatIcon(p.cat)} ${getCatLabel(p.cat)}</div>
      <div class="card-name">${p.brand || p.name}</div>
      <div class="card-sub">${p.subtitle || ''}</div>
      <div class="stars-display">${renderStars(p.rating||0)}</div>
      <div class="card-desc">${p.description || ''}</div>
      <div class="card-footer-row">
        <div>
          <div class="card-price">${p.priceDisplay || (p.price ? p.price+'€' : '—')}</div>
          <div class="card-price-note">Prix indicatif</div>
        </div>
        <div class="card-cta-row">
          <button class="btn-detail" data-id="${p.id}">Voir +</button>
          <a class="btn-amazon" href="${p.amazonUrl||'#'}" target="_blank" rel="noopener noreferrer">🛒 Amazon</a>
        </div>
      </div>
    </div>
  </div>`;
}

// ══ RENDER GRID ══
function renderGrid() {
  const list = getFiltered();
  const half = Math.ceil(list.length / 2);
  const g1 = document.getElementById('productsGrid');
  const g2 = document.getElementById('productsGrid2');

  if (list.length === 0) {
    g1.innerHTML = `<div class="no-results"><div class="no-icon">🔍</div><h3>Aucun produit trouvé</h3><p>Essayez d'autres filtres ou une autre recherche.</p></div>`;
    g2.innerHTML = '';
  } else {
    g1.innerHTML = list.slice(0, half).map(renderCard).join('');
    g2.innerHTML = list.slice(half).map(renderCard).join('');
  }
  document.getElementById('resultsCount').textContent = `${list.length} produit${list.length > 1 ? 's' : ''}`;
  attachCardListeners();
}

function attachCardListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.card-compare-btn') || e.target.closest('.btn-amazon') || e.target.closest('.btn-detail')) return;
      openProductModal(parseInt(card.dataset.id));
    });
  });
  document.querySelectorAll('.btn-detail').forEach(b => b.addEventListener('click', () => openProductModal(parseInt(b.dataset.id))));
  document.querySelectorAll('.card-compare-btn').forEach(b => {
    b.addEventListener('click', e => { e.stopPropagation(); toggleCompare(parseInt(b.dataset.id)); });
  });
}

// ══ PRODUCT MODAL ══
function openProductModal(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;

  const imgContent = p.image
    ? `<img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;">`
    : getCatIcon(p.cat);

  const tags = (p.tags||[]).map(t => `<span class="pmodal-tag">${t}</span>`).join('');
  const specs = (p.specs||[]).map(s => `<div class="spec-row-m"><span class="spec-label">${s.label}</span><span class="spec-value">${s.value}</span></div>`).join('');
  const pros = (p.pros||[]).map(x => `<div class="pro-item">${x}</div>`).join('') || '<div style="color:var(--text4);font-size:0.8rem">Non renseigné</div>';
  const cons = (p.cons||[]).map(x => `<div class="con-item">${x}</div>`).join('') || '<div style="color:var(--text4);font-size:0.8rem">Non renseigné</div>';

  const comments = state.comments[id] || [];
  const commentsHtml = comments.length
    ? comments.map((c, ci) => `
      <div class="comment-item" data-pid="${id}" data-ci="${ci}">
        <div class="comment-author">${escHtml(c.author)}</div>
        <div class="comment-date">${c.date}</div>
        <div class="comment-text">${escHtml(c.text)}</div>
        <button class="comment-delete" onclick="deleteComment(${id},${ci})">Supprimer</button>
      </div>`).join('')
    : '<div class="no-comments">Soyez le premier à commenter ce produit !</div>';

  const amazonHtml = (p.amazonUrl && p.amazonUrl !== '#')
    ? `<a class="pmodal-amazon-btn" href="${p.amazonUrl}" target="_blank" rel="noopener noreferrer">🛒 Voir sur Amazon — ${p.priceDisplay||p.price+'€'}</a>`
    : `<button class="pmodal-amazon-btn disabled" disabled>🛒 Lien Amazon non disponible</button>`;

  document.getElementById('modalContent').innerHTML = `
    <div class="pmodal-wrap">
      <div class="pmodal-top">
        <div class="pmodal-img" style="background:${p.color||'#1e1e30'}">${imgContent}</div>
        <div class="pmodal-info">
          <div class="pmodal-cat">${getCatIcon(p.cat)} ${getCatLabel(p.cat)}</div>
          <div class="pmodal-name">${p.brand||p.name}</div>
          <div class="pmodal-price">${p.priceDisplay||(p.price?p.price+'€':'Prix non renseigné')}</div>
          <div class="pmodal-stars">${renderStars(p.rating||0)}</div>
          <div class="pmodal-tags">${tags}</div>
        </div>
      </div>

      <div class="pmodal-body">
        <div>
          ${specs ? `<div class="pmodal-section"><div class="pmodal-section-title">Fiche technique</div>${specs}</div>` : ''}
          <div class="pmodal-section">
            <div class="pmodal-section-title">Description</div>
            <div class="pmodal-desc">${p.description||'Aucune description disponible.'}</div>
          </div>
        </div>
        <div>
          <div class="pmodal-section">
            <div class="pmodal-section-title">Points forts & faibles</div>
            <div class="pros-cons">
              <div class="pc-col"><strong>✓ Pour</strong>${pros}</div>
              <div class="pc-col"><strong>✕ Contre</strong>${cons}</div>
            </div>
          </div>
          ${p.verdict ? `<div class="pmodal-section"><div class="pmodal-section-title">Verdict</div><div class="pmodal-verdict"><strong>⭐ Note : ${p.rating||0}/5</strong><p>${p.verdict}</p></div></div>` : ''}
        </div>
      </div>

      ${amazonHtml}
      <div class="affiliate-note">* Lien affilié Amazon. Prix susceptible de varier.</div>

      <div class="comments-section">
        <div class="comments-title">Commentaires (${comments.length})</div>
        <div class="comment-form">
          <input class="comment-input-name" id="commentName_${id}" placeholder="Votre pseudo..." maxlength="40">
          <textarea class="comment-input-text" id="commentText_${id}" placeholder="Votre avis sur ce produit..." maxlength="500"></textarea>
          <button class="comment-submit" onclick="addComment(${id})">Publier mon avis</button>
        </div>
        <div id="commentsContainer_${id}">${commentsHtml}</div>
      </div>
    </div>`;

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function escHtml(str) {
  return String(str||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ══ COMMENTS ══
function addComment(pid) {
  const nameEl = document.getElementById('commentName_'+pid);
  const textEl = document.getElementById('commentText_'+pid);
  const name = (nameEl?.value||'').trim();
  const text = (textEl?.value||'').trim();
  if (!name || !text) { alert('Veuillez renseigner un pseudo et un commentaire.'); return; }
  if (!state.comments[pid]) state.comments[pid] = [];
  const now = new Date().toLocaleDateString('fr-FR', { day:'2-digit', month:'long', year:'numeric' });
  state.comments[pid].push({ author: name, text, date: now });
  saveData();
  if (nameEl) nameEl.value = '';
  if (textEl) textEl.value = '';
  // Refresh comments section
  const container = document.getElementById('commentsContainer_'+pid);
  if (container) {
    container.innerHTML = state.comments[pid].map((c,ci) => `
      <div class="comment-item" data-pid="${pid}" data-ci="${ci}">
        <div class="comment-author">${escHtml(c.author)}</div>
        <div class="comment-date">${c.date}</div>
        <div class="comment-text">${escHtml(c.text)}</div>
        <button class="comment-delete" onclick="deleteComment(${pid},${ci})">Supprimer</button>
      </div>`).join('');
  }
}

function deleteComment(pid, ci) {
  if (!state.devUnlocked) return;
  if (!confirm('Supprimer ce commentaire ?')) return;
  state.comments[pid].splice(ci, 1);
  saveData();
  const container = document.getElementById('commentsContainer_'+pid);
  if (container) {
    const comments = state.comments[pid] || [];
    container.innerHTML = comments.length
      ? comments.map((c,i) => `
        <div class="comment-item">
          <div class="comment-author">${escHtml(c.author)}</div>
          <div class="comment-date">${c.date}</div>
          <div class="comment-text">${escHtml(c.text)}</div>
          <button class="comment-delete" onclick="deleteComment(${pid},${i})">Supprimer</button>
        </div>`).join('')
      : '<div class="no-comments">Aucun commentaire.</div>';
  }
}

// ══ COMPARE ══
function toggleCompare(id) {
  const idx = state.compareList.indexOf(id);
  if (idx > -1) state.compareList.splice(idx, 1);
  else {
    if (state.compareList.length >= 3) { alert('Maximum 3 produits à comparer.'); return; }
    state.compareList.push(id);
  }
  updateCompareWidget();
  renderGrid();
}

function updateCompareWidget() {
  const list = document.getElementById('compareList');
  const btn = document.getElementById('openCompare');
  list.innerHTML = state.compareList.map(id => {
    const p = state.products.find(x => x.id === id);
    if (!p) return '';
    return `<div class="compare-item">${getCatIcon(p.cat)} ${p.brand||p.name}<button data-id="${id}">✕</button></div>`;
  }).join('');
  list.querySelectorAll('button').forEach(b => b.addEventListener('click', () => toggleCompare(parseInt(b.dataset.id))));
  btn.style.display = state.compareList.length >= 2 ? 'block' : 'none';
}

function openCompareModal() {
  const items = state.compareList.map(id => state.products.find(x => x.id === id)).filter(Boolean);
  const allSpecKeys = ['brand','price','rating','year','description'];
  const rows = [
    ['Image', items.map(p => p.image ? `<img src="${p.image}" style="width:60px;height:45px;object-fit:cover;border-radius:6px">` : getCatIcon(p.cat)).join('</td><td>')],
    ['Nom', items.map(p => `<strong>${p.brand||p.name}</strong>`).join('</td><td>')],
    ['Prix', items.map(p => `<span style="color:var(--green-l);font-weight:700">${p.priceDisplay||p.price+'€'}</span>`).join('</td><td>')],
    ['Note', items.map(p => renderStars(p.rating||0)).join('</td><td>')],
    ['Catégorie', items.map(p => getCatLabel(p.cat)).join('</td><td>')],
    ['Année', items.map(p => p.year||'—').join('</td><td>')],
    ...( items[0]?.specs||[] ).slice(0,5).map((s,i) => [
      s.label,
      items.map(p => (p.specs||[])[i]?.value||'—').join('</td><td>')
    ])
  ];

  document.getElementById('compareContent').innerHTML = `
    <div class="compare-header">Comparaison de ${items.length} produits</div>
    <div style="overflow-x:auto">
    <table class="compare-table">
      <thead><tr>
        <th>Caractéristique</th>
        ${items.map(p => `<th>${p.brand||p.name}</th>`).join('')}
      </tr></thead>
      <tbody>
        ${rows.map(([label, cells]) => `<tr><td class="label-col">${label}</td><td>${cells}</td></tr>`).join('')}
      </tbody>
    </table></div>`;
  document.getElementById('compareOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ══ TOP PICKS ══
function renderTopPicks() {
  const top = [...state.products].sort((a,b) => (b.rating||0)-(a.rating||0)).slice(0,5);
  const ranks = ['gold','silver','bronze','',''];
  const el = document.getElementById('topPicks');
  if (!el) return;
  el.innerHTML = top.map((p,i) => {
    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.brand||p.name}">`
      : getCatIcon(p.cat);
    return `<div class="top-pick-item" onclick="openProductModal(${p.id})">
      <span class="tpi-rank ${ranks[i]}">${i+1}</span>
      <div class="tpi-icon">${imgContent}</div>
      <div>
        <div class="tpi-name">${p.brand||p.name}</div>
        <div class="tpi-price">${p.priceDisplay||p.price+'€'}</div>
      </div></div>`;
  }).join('');
}

// ══ STATS ══
function updateStats() {
  const el1 = document.getElementById('statProducts');
  const el2 = document.getElementById('statCats');
  if (el1) animateNum(el1, state.products.length);
  if (el2) animateNum(el2, state.categories.length);
}

function animateNum(el, target) {
  let v = 0; const step = Math.ceil(target/50);
  const t = setInterval(() => {
    v = Math.min(v+step, target);
    el.textContent = v.toLocaleString('fr-FR');
    if (v >= target) clearInterval(t);
  }, 25);
}

function animateHeroNumbers() {
  document.querySelectorAll('.hstat-n').forEach(el => {
    const t = parseInt(el.dataset.target||el.textContent.replace(/\D/g,''));
    if (!isNaN(t) && t > 0) animateNum(el, t);
  });
}

// ══ FILTER LISTENERS ══
function attachFilterListeners() {
  document.querySelectorAll('[data-price]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-price]').forEach(b => b.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      state.activePrice = btn.dataset.price;
      renderGrid();
    });
  });
  document.querySelectorAll('[data-usage]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-usage]').forEach(b => b.classList.remove('chip--active'));
      btn.classList.add('chip--active');
      state.activeUsage = btn.dataset.usage;
      renderGrid();
    });
  });
  document.getElementById('sortSelect')?.addEventListener('change', e => { state.sortBy = e.target.value; renderGrid(); });
  document.getElementById('globalSearch')?.addEventListener('input', e => { state.search = e.target.value.toLowerCase().trim(); renderGrid(); });
  document.getElementById('resetFilters')?.addEventListener('click', () => {
    state.activeCategory = 'all'; state.activePrice = 'all'; state.activeUsage = 'all';
    state.sortBy = 'rating'; state.search = '';
    const gs = document.getElementById('globalSearch'); if(gs) gs.value='';
    const ss = document.getElementById('sortSelect'); if(ss) ss.value='rating';
    document.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('chip--active', b.dataset.cat==='all'));
    document.querySelectorAll('[data-price]').forEach(b => b.classList.toggle('chip--active', b.dataset.price==='all'));
    document.querySelectorAll('[data-usage]').forEach(b => b.classList.toggle('chip--active', b.dataset.usage==='all'));
    buildNav();
    renderGrid();
  });
}

// ══ MODAL LISTENERS ══
function attachModalListeners() {
  const close = (id) => {
    document.getElementById(id)?.classList.remove('open');
    document.body.style.overflow = '';
  };
  document.getElementById('modalClose')?.addEventListener('click', () => close('modalOverlay'));
  document.getElementById('modalOverlay')?.addEventListener('click', e => { if(e.target===e.currentTarget) close('modalOverlay'); });
  document.getElementById('compareClose')?.addEventListener('click', () => close('compareOverlay'));
  document.getElementById('compareOverlay')?.addEventListener('click', e => { if(e.target===e.currentTarget) close('compareOverlay'); });
  document.getElementById('openCompare')?.addEventListener('click', openCompareModal);
  document.getElementById('devClose')?.addEventListener('click', closeDevPanel);
  document.getElementById('devOverlay')?.addEventListener('click', e => { if(e.target===e.currentTarget) closeDevPanel(); });
  document.addEventListener('keydown', e => { if(e.key==='Escape') { close('modalOverlay'); close('compareOverlay'); closeDevPanel(); } });
}

// ══ DEV PANEL ══
function attachDevListeners() {
  document.getElementById('devTrigger')?.addEventListener('click', openDevPanel);
}

function openDevPanel() {
  state.devEditId = null;
  document.getElementById('devOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  renderDevContent();
}

function closeDevPanel() {
  document.getElementById('devOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function renderDevContent() {
  if (!state.devUnlocked) {
    document.getElementById('devContent').innerHTML = `
      <div class="dev-lock">
        <div class="dev-lock-icon">🔐</div>
        <h2>Espace Développeur</h2>
        <p>Saisissez le mot de passe pour accéder aux outils de gestion du site.</p>
        <input type="password" class="dev-lock-input" id="devPasswordInput" placeholder="Mot de passe..." autocomplete="off">
        <div style="height:8px"></div>
        <button class="dev-lock-btn" id="devLockBtn">Déverrouiller</button>
        <div class="dev-lock-err" id="devLockErr">❌ Mot de passe incorrect</div>
      </div>`;
    document.getElementById('devLockBtn')?.addEventListener('click', checkDevPassword);
    document.getElementById('devPasswordInput')?.addEventListener('keydown', e => { if(e.key==='Enter') checkDevPassword(); });
  } else {
    renderDevPanel();
  }
}

function checkDevPassword() {
  const val = document.getElementById('devPasswordInput')?.value || '';
  if (val === DEV_PASSWORD) {
    state.devUnlocked = true;
    document.body.classList.add('dev-mode');
    renderDevPanel();
  } else {
    const err = document.getElementById('devLockErr');
    if (err) { err.style.display='block'; setTimeout(()=>err.style.display='none',2500); }
  }
}

function renderDevPanel() {
  document.getElementById('devContent').innerHTML = `
    <div class="dev-panel">
      <h2>Espace Développeur <span class="dev-badge">DÉVERROUILLÉ</span></h2>
      <p>Gérez les produits, catégories et contenu du site. Les modifications sont sauvegardées automatiquement.</p>
      <div class="dev-tabs">
        <button class="dev-tab active" data-tab="edit">✏️ Modifier un produit</button>
        <button class="dev-tab" data-tab="add">➕ Ajouter un produit</button>
        <button class="dev-tab" data-tab="manage">📦 Gérer les produits</button>
        <button class="dev-tab" data-tab="cats">🏷️ Catégories</button>
      </div>
      <div id="devTabEdit" class="dev-tab-content active">${renderDevEdit()}</div>
      <div id="devTabAdd" class="dev-tab-content">${renderDevAdd()}</div>
      <div id="devTabManage" class="dev-tab-content">${renderDevManage()}</div>
      <div id="devTabCats" class="dev-tab-content">${renderDevCats()}</div>
    </div>`;

  // Tab switching
  document.querySelectorAll('.dev-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.dev-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.dev-tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const target = `devTab${tab.dataset.tab.charAt(0).toUpperCase()+tab.dataset.tab.slice(1)}`;
      document.getElementById(target)?.classList.add('active');
    });
  });

  attachDevFormListeners();
}

// ── DEV: EDIT TAB ──
function renderDevEdit(preloadId = null) {
  const p = preloadId ? state.products.find(x => x.id === preloadId) : null;
  const catOptions = state.categories.map(c => `<option value="${c.id}" ${p && p.cat===c.id?'selected':''}>${c.icon} ${c.label}</option>`).join('');
  const usageOpts = ['esport','content','casual','pro','family'];

  return `
    <div class="dev-form" id="devEditForm">
      <div class="dev-field">
        <label>Numéro du produit (ID)</label>
        <input class="dev-input" id="editId" type="number" placeholder="Ex: 1, 5, 23..." value="${p?p.id:''}" min="1">
        <button class="dev-btn" onclick="loadProductForEdit()" style="margin-top:6px">Charger le produit</button>
      </div>
      <div id="devEditFields" style="${p?'':'display:none'}">
        <div class="dev-row">
          <div class="dev-field"><label>Nom / Marque</label><input class="dev-input" id="editBrand" value="${p?escHtml(p.brand||p.name):''}"></div>
          <div class="dev-field"><label>Catégorie</label><select class="dev-select" id="editCat">${catOptions}</select></div>
        </div>
        <div class="dev-row">
          <div class="dev-field"><label>Prix (ex: 299)</label><input class="dev-input" id="editPrice" type="number" value="${p?p.price:''}"></div>
          <div class="dev-field"><label>Prix affiché (ex: 299 €)</label><input class="dev-input" id="editPriceDisplay" value="${p?escHtml(p.priceDisplay||''):''}"></div>
        </div>
        <div class="dev-field"><label>Sous-titre</label><input class="dev-input" id="editSubtitle" value="${p?escHtml(p.subtitle||''):''}"></div>
        <div class="dev-field"><label>Description</label><textarea class="dev-textarea" id="editDesc">${p?escHtml(p.description||''):''}</textarea></div>
        <div class="dev-field"><label>Lien Amazon (s'ouvre dans un nouvel onglet)</label><input class="dev-input" id="editAmazon" type="url" placeholder="https://amzn.to/..." value="${p?escHtml(p.amazonUrl||''):''}"></div>
        <div class="dev-field">
          <label>Image (URL ou upload depuis le PC)</label>
          <input class="dev-input" id="editImageUrl" placeholder="https://... ou utilise l'upload ci-dessous" value="${p&&p.image?escHtml(p.image):''}">
          <input type="file" id="editImageFile" accept="image/*" style="margin-top:6px;color:var(--text3)">
          ${p&&p.image?`<img src="${p.image}" class="img-preview" id="editImgPreview">`:``}
        </div>
        <div class="dev-field">
          <label>Note (clique sur les étoiles)</label>
          <div class="dev-stars-pick" id="editStarsPick">
            ${[1,2,3,4,5].map(i=>`<span class="dev-star ${p&&p.rating>=i?'on':''}" data-val="${i}">★</span>`).join('')}
          </div>
          <input type="hidden" id="editRating" value="${p?p.rating||0:0}">
        </div>
        <button class="dev-btn" onclick="saveProductEdit()">💾 Sauvegarder les modifications</button>
        <div class="dev-msg" id="editMsg"></div>
      </div>
    </div>`;
}

function loadProductForEdit() {
  const idVal = parseInt(document.getElementById('editId')?.value || 0);
  const p = state.products.find(x => x.id === idVal);
  if (!p) { showDevMsg('editMsg', 'Produit introuvable. Vérifiez le numéro.', 'error'); return; }
  const fields = document.getElementById('devEditFields');
  if (fields) {
    fields.style.display = 'block';
    document.getElementById('editBrand').value = p.brand || p.name || '';
    document.getElementById('editSubtitle').value = p.subtitle || '';
    document.getElementById('editDesc').value = p.description || '';
    document.getElementById('editAmazon').value = p.amazonUrl || '';
    document.getElementById('editPrice').value = p.price || '';
    document.getElementById('editPriceDisplay').value = p.priceDisplay || '';
    document.getElementById('editImageUrl').value = p.image || '';
    document.getElementById('editRating').value = p.rating || 0;
    const catSel = document.getElementById('editCat');
    if (catSel) catSel.value = p.cat;
    // Stars
    const starsPick = document.getElementById('editStarsPick');
    if (starsPick) {
      starsPick.querySelectorAll('.dev-star').forEach(s => s.classList.toggle('on', parseInt(s.dataset.val) <= (p.rating||0)));
    }
    // Preview image
    if (p.image) {
      let prev = document.getElementById('editImgPreview');
      if (!prev) {
        prev = document.createElement('img');
        prev.className = 'img-preview'; prev.id = 'editImgPreview';
        document.getElementById('editImageUrl').after(prev);
      }
      prev.src = p.image;
    }
  }
}

function saveProductEdit() {
  const id = parseInt(document.getElementById('editId')?.value||0);
  const idx = state.products.findIndex(x => x.id === id);
  if (idx < 0) { showDevMsg('editMsg','Produit introuvable','error'); return; }
  const p = state.products[idx];
  p.brand = document.getElementById('editBrand')?.value.trim() || p.brand;
  p.name = p.brand;
  p.cat = document.getElementById('editCat')?.value || p.cat;
  p.subtitle = document.getElementById('editSubtitle')?.value.trim() || '';
  p.description = document.getElementById('editDesc')?.value.trim() || '';
  p.amazonUrl = document.getElementById('editAmazon')?.value.trim() || '#';
  const priceVal = parseFloat(document.getElementById('editPrice')?.value||0);
  if (priceVal > 0) p.price = priceVal;
  const priceDisp = document.getElementById('editPriceDisplay')?.value.trim();
  if (priceDisp) p.priceDisplay = priceDisp;
  const imgUrl = document.getElementById('editImageUrl')?.value.trim();
  if (imgUrl) p.image = imgUrl;
  const ratingVal = parseInt(document.getElementById('editRating')?.value||0);
  if (ratingVal >= 0) p.rating = ratingVal;
  saveData();
  renderGrid();
  renderTopPicks();
  showDevMsg('editMsg','✅ Produit modifié avec succès !','success');
}

// ── DEV: ADD TAB ──
function renderDevAdd() {
  const catOptions = state.categories.map(c => `<option value="${c.id}">${c.icon} ${c.label}</option>`).join('');
  const usageOpts = ['esport','content','casual','pro','family'];
  return `
    <div class="dev-form">
      <div class="dev-row">
        <div class="dev-field"><label>Nom / Marque *</label><input class="dev-input" id="addBrand" placeholder="Ex: Sony A7 IV"></div>
        <div class="dev-field"><label>Catégorie *</label><select class="dev-select" id="addCat">${catOptions}</select></div>
      </div>
      <div class="dev-row">
        <div class="dev-field"><label>Prix (€) *</label><input class="dev-input" id="addPrice" type="number" placeholder="499"></div>
        <div class="dev-field"><label>Prix affiché</label><input class="dev-input" id="addPriceDisplay" placeholder="499 €"></div>
      </div>
      <div class="dev-field"><label>Sous-titre</label><input class="dev-input" id="addSubtitle" placeholder="Le meilleur hybride du marché"></div>
      <div class="dev-field"><label>Description</label><textarea class="dev-textarea" id="addDesc" placeholder="Description complète du produit..."></textarea></div>
      <div class="dev-field"><label>Lien Amazon (affilié)</label><input class="dev-input" id="addAmazon" type="url" placeholder="https://amzn.to/..."></div>
      <div class="dev-field">
        <label>Image (URL ou upload PC)</label>
        <input class="dev-input" id="addImageUrl" placeholder="https://...">
        <input type="file" id="addImageFile" accept="image/*" style="margin-top:6px;color:var(--text3)">
        <img id="addImgPreview" class="img-preview" style="display:none">
      </div>
      <div class="dev-field">
        <label>Usage (sélection multiple)</label>
        <div style="display:flex;gap:0.5rem;flex-wrap:wrap">
          ${usageOpts.map(u=>`<label style="display:flex;align-items:center;gap:4px;font-size:0.8rem;color:var(--text3);cursor:pointer"><input type="checkbox" name="addUsage" value="${u}" style="accent-color:var(--accent-l)"> ${u}</label>`).join('')}
        </div>
      </div>
      <div class="dev-field"><label>Badge (optionnel)</label>
        <select class="dev-select" id="addBadge">
          <option value="">Aucun</option>
          <option value="new">🆕 Nouveau</option>
          <option value="top">⭐ Top</option>
          <option value="deal">💰 Bon plan</option>
          <option value="pro">🏆 Pro</option>
        </select>
      </div>
      <div class="dev-field">
        <label>Note (clique sur les étoiles)</label>
        <div class="dev-stars-pick" id="addStarsPick">
          ${[1,2,3,4,5].map(i=>`<span class="dev-star" data-val="${i}">★</span>`).join('')}
        </div>
        <input type="hidden" id="addRating" value="0">
      </div>
      <button class="dev-btn dev-btn--green" onclick="addProduct()">➕ Ajouter ce produit</button>
      <div class="dev-msg" id="addMsg"></div>
    </div>`;
}

function addProduct() {
  const brand = document.getElementById('addBrand')?.value.trim();
  const cat = document.getElementById('addCat')?.value;
  const price = parseFloat(document.getElementById('addPrice')?.value||0);
  if (!brand || !cat || !price) { showDevMsg('addMsg','Nom, catégorie et prix sont obligatoires.','error'); return; }

  const priceDisplay = document.getElementById('addPriceDisplay')?.value.trim() || price + ' €';
  const subtitle = document.getElementById('addSubtitle')?.value.trim() || '';
  const desc = document.getElementById('addDesc')?.value.trim() || '';
  const amazon = document.getElementById('addAmazon')?.value.trim() || '#';
  const imageUrl = document.getElementById('addImageUrl')?.value.trim() || '';
  const rating = parseInt(document.getElementById('addRating')?.value||0);
  const badgeVal = document.getElementById('addBadge')?.value || '';
  const badgeLabels = {new:'Nouveau',top:'Top',deal:'Bon plan',pro:'Pro'};
  const usageChecked = [...document.querySelectorAll('input[name="addUsage"]:checked')].map(x=>x.value);

  const newProd = {
    id: getNextId(),
    cat, name: brand, brand, subtitle,
    icon: getCatIcon(cat), image: imageUrl,
    color: '#1e1e30',
    price, priceDisplay,
    badge: badgeVal || null, badgeLabel: badgeLabels[badgeVal]||null,
    year: new Date().getFullYear(),
    popular: 70,
    rating,
    usage: usageChecked.length ? usageChecked : ['casual'],
    amazonUrl: amazon,
    tags: [],
    description: desc,
    pros: [], cons: [], specs: []
  };

  state.products.push(newProd);
  saveData();
  renderGrid();
  renderTopPicks();
  updateStats();
  buildNav();
  showDevMsg('addMsg', `✅ Produit #${newProd.id} ajouté avec succès !`, 'success');
  // Clear form
  ['addBrand','addPrice','addPriceDisplay','addSubtitle','addDesc','addAmazon','addImageUrl'].forEach(id => {
    const el = document.getElementById(id); if(el) el.value='';
  });
  document.querySelectorAll('input[name="addUsage"]').forEach(c => c.checked=false);
  document.querySelectorAll('#addStarsPick .dev-star').forEach(s => s.classList.remove('on'));
  document.getElementById('addRating').value = 0;
  const prev = document.getElementById('addImgPreview'); if(prev) prev.style.display='none';
}

// ── DEV: MANAGE TAB ──
function renderDevManage() {
  return `
    <div>
      <p style="font-size:0.82rem;color:var(--text4);margin-bottom:1rem">${state.products.length} produits dans la base. Cliquez sur Modifier pour éditer, ou Supprimer pour retirer définitivement.</p>
      <div class="dev-product-list">
        ${state.products.map(p => {
          const img = p.image ? `<img src="${p.image}" class="dev-prod-img">` : `<span class="dev-prod-icon">${getCatIcon(p.cat)}</span>`;
          return `<div class="dev-prod-item">
            <span class="dev-prod-num">#${p.id}</span>
            ${img}
            <span class="dev-prod-name">${p.brand||p.name}</span>
            <span class="dev-prod-price">${p.priceDisplay||p.price+'€'}</span>
            <div class="dev-prod-actions">
              <button class="dev-edit-btn" onclick="quickEditProduct(${p.id})">✏️ Modifier</button>
              <button class="dev-delete-btn" onclick="deleteProduct(${p.id})">🗑️ Supprimer</button>
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>`;
}

function quickEditProduct(id) {
  // Switch to edit tab and load product
  document.querySelectorAll('.dev-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.dev-tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-tab="edit"]')?.classList.add('active');
  document.getElementById('devTabEdit')?.classList.add('active');
  document.getElementById('devTabEdit').innerHTML = renderDevEdit(id);
  attachDevFormListeners();
  // Already loaded, just show fields
  document.getElementById('devEditFields').style.display = 'block';
}

function deleteProduct(id) {
  if (!confirm(`Supprimer définitivement le produit #${id} ?`)) return;
  const idx = state.products.findIndex(x => x.id === id);
  if (idx >= 0) {
    state.products.splice(idx, 1);
    saveData();
    renderGrid();
    renderTopPicks();
    updateStats();
    buildNav();
    buildCategoryFilters();
    // Re-render manage tab
    const manageTab = document.getElementById('devTabManage');
    if (manageTab) manageTab.innerHTML = renderDevManage();
    attachDevFormListeners();
  }
}

// ── DEV: CATEGORIES TAB ──
function renderDevCats() {
  return `
    <div class="dev-form">
      <p style="font-size:0.82rem;color:var(--text4);margin-bottom:1rem">Ajoutez ou supprimez des catégories de produits. Les catégories avec des produits existants ne peuvent pas être supprimées.</p>
      <div class="dev-cat-list" id="devCatList">
        ${state.categories.map(c => {
          const hasProducts = state.products.some(p => p.cat === c.id);
          return `<div class="dev-cat-item">
            ${c.icon} ${c.label}
            ${!hasProducts ? `<button class="dev-cat-del" onclick="deleteCategory('${c.id}')">✕</button>` : '<span style="font-size:0.65rem;color:var(--text4);margin-left:4px">(en usage)</span>'}
          </div>`;
        }).join('')}
      </div>
      <div style="border-top:1px solid var(--border);padding-top:1rem;margin-top:0.5rem">
        <p style="font-size:0.8rem;color:var(--text3);margin-bottom:0.75rem;font-weight:600">Ajouter une nouvelle catégorie</p>
        <div class="dev-row">
          <div class="dev-field"><label>ID (ex: accessoire)</label><input class="dev-input" id="newCatId" placeholder="mon-id-cat"></div>
          <div class="dev-field"><label>Label affiché</label><input class="dev-input" id="newCatLabel" placeholder="Accessoire"></div>
        </div>
        <div class="dev-field"><label>Emoji icône</label><input class="dev-input" id="newCatIcon" placeholder="📦" maxlength="4" style="width:100px"></div>
        <button class="dev-btn dev-btn--green" onclick="addCategory()" style="margin-top:0.5rem">➕ Ajouter la catégorie</button>
        <div class="dev-msg" id="catMsg"></div>
      </div>
    </div>`;
}

function addCategory() {
  const id = document.getElementById('newCatId')?.value.trim().toLowerCase().replace(/\s+/g,'-');
  const label = document.getElementById('newCatLabel')?.value.trim();
  const icon = document.getElementById('newCatIcon')?.value.trim() || '📦';
  if (!id || !label) { showDevMsg('catMsg','ID et label obligatoires.','error'); return; }
  if (state.categories.find(c => c.id === id)) { showDevMsg('catMsg','Cette catégorie existe déjà.','error'); return; }
  state.categories.push({ id, label, icon });
  saveData();
  buildCategoryFilters();
  buildNav();
  showDevMsg('catMsg','✅ Catégorie ajoutée !','success');
  document.getElementById('devTabCats').innerHTML = renderDevCats();
  attachDevFormListeners();
}

function deleteCategory(id) {
  if (state.products.some(p => p.cat === id)) { alert('Impossible : des produits utilisent cette catégorie.'); return; }
  if (!confirm(`Supprimer la catégorie "${id}" ?`)) return;
  state.categories = state.categories.filter(c => c.id !== id);
  saveData();
  buildCategoryFilters();
  buildNav();
  document.getElementById('devTabCats').innerHTML = renderDevCats();
  attachDevFormListeners();
}

// ── DEV: SHARED FORM LISTENERS ──
function attachDevFormListeners() {
  // Stars pickers
  document.querySelectorAll('.dev-stars-pick').forEach(picker => {
    const hiddenId = picker.id === 'editStarsPick' ? 'editRating' : 'addRating';
    picker.querySelectorAll('.dev-star').forEach(star => {
      star.addEventListener('click', () => {
        const val = parseInt(star.dataset.val);
        const hidden = document.getElementById(hiddenId);
        if (hidden) hidden.value = val;
        picker.querySelectorAll('.dev-star').forEach(s => s.classList.toggle('on', parseInt(s.dataset.val) <= val));
      });
      star.addEventListener('mouseover', () => {
        const val = parseInt(star.dataset.val);
        picker.querySelectorAll('.dev-star').forEach(s => s.style.color = parseInt(s.dataset.val) <= val ? 'var(--gold-l)' : '');
      });
      star.addEventListener('mouseout', () => {
        picker.querySelectorAll('.dev-star').forEach(s => s.style.color = '');
      });
    });
  });

  // Image file upload handlers
  ['edit','add'].forEach(prefix => {
    const fileInput = document.getElementById(`${prefix}ImageFile`);
    if (!fileInput) return;
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = e => {
        const dataUrl = e.target.result;
        const urlInput = document.getElementById(`${prefix}ImageUrl`);
        if (urlInput) urlInput.value = dataUrl;
        let preview = document.getElementById(`${prefix}ImgPreview`);
        if (!preview) {
          preview = document.createElement('img');
          preview.className = 'img-preview';
          preview.id = `${prefix}ImgPreview`;
          urlInput?.after(preview);
        }
        preview.src = dataUrl;
        preview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    });
  });
}

function showDevMsg(id, text, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = text;
  el.className = `dev-msg ${type}`;
  el.style.display = 'block';
  setTimeout(() => el.style.display='none', 3000);
}
