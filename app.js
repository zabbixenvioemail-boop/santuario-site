/* ============================================================
   SANTUÁRIO SOLO — site oficial
   ============================================================ */
'use strict';

/* ---------------- dados do servidor ---------------- */
const SERVER = {
  name: 'Santuário SOLO',
  ip: '200.161.144.150',
  domain: 'santuario.rust.br',
  connectLink: 'steam://connect/200.161.144.150:28015',
  connectCommand: 'connect 200.161.144.150:28015',
  maxplayers: 200,
  mode: 'SOLO ONLY',
  vpn: 'Permitido',
  maxping: 220,
  discord: '' // preencher quando o convite existir
};

/* wipe: sexta-feira 18:30 (America/Sao_Paulo, UTC-3) */
const WIPE = { weekday: 5, utcHour: 21, utcMinute: 30 };

function nextWipe() {
  const now = new Date();
  const d = new Date(Date.UTC(
    now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
    WIPE.utcHour, WIPE.utcMinute, 0
  ));
  while (d.getUTCDay() !== WIPE.weekday || d.getTime() <= now.getTime()) {
    d.setUTCDate(d.getUTCDate() + 1);
  }
  return d;
}
const wipeDate = nextWipe();
const wipeShort = wipeDate.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit' });
const wipeLong = wipeDate.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo', weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' });

/* ---------------- ícones ---------------- */
const I = {
  cross: '<svg viewBox="0 0 24 24"><path d="M12 2v20M7 7h10"/></svg>',
  scroll: '<svg viewBox="0 0 24 24"><path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/></svg>',
  crown: '<svg viewBox="0 0 24 24"><path d="M3 8l4 3 5-6 5 6 4-3-2 11H5L3 8Z"/></svg>',
  discord: '<svg viewBox="0 0 24 24"><path d="M8 6.5c2.5-1 5.5-1 8 0 1.8 2.4 2.8 5.2 3 8.2-1.4 1-3 1.7-4.6 2l-.8-1.5c-.9.2-1.9.2-2.8 0L10 16.7c-1.6-.3-3.2-1-4.6-2 .2-3 1.2-5.8 3-8.2Z"/><circle cx="9.6" cy="12" r=".9"/><circle cx="14.4" cy="12" r=".9"/></svg>',
  cart: '<svg viewBox="0 0 24 24"><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6"/><circle cx="10" cy="20" r="1.2"/><circle cx="18" cy="20" r="1.2"/></svg>',
  copy: '<svg viewBox="0 0 24 24"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6l7-3Z"/><path d="M9.5 12l1.8 1.8L15 10"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.6"/><path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6"/></svg>',
  axe: '<svg viewBox="0 0 24 24"><path d="M4 20l9-9"/><path d="M12 4c3 0 6 2 7 5-2 1-4 1.5-6 1.5L10 8c.5-2 1-3 2-4Z"/><path d="M11 9l3 3"/></svg>',
  gear: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 2.5v2.2M12 19.3v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"/></svg>',
  plug: '<svg viewBox="0 0 24 24"><path d="M9 3v5M15 3v5"/><path d="M6 8h12v3a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z"/><path d="M12 17v4"/></svg>',
  terminal: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>',
  sprout: '<svg viewBox="0 0 24 24"><path d="M12 21v-7"/><path d="M12 14c0-4 3-7 8-7 0 4-3 7-8 7Z"/><path d="M12 14C12 10 9 7 4 7c0 4 3 7 8 7Z"/></svg>',
  left: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  right: '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  warn: '<svg viewBox="0 0 24 24"><path d="M12 3l9 16H3l9-16Z"/><path d="M12 9v4M12 16.5v.01"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  server: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="6" rx="2"/><rect x="3" y="14" width="18" height="6" rx="2"/><path d="M7 7h.01M7 17h.01"/></svg>',
  link: '<svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
  skull: '<svg viewBox="0 0 24 24"><path d="M12 3a8 8 0 0 0-5 14v4h10v-4a8 8 0 0 0-5-14Z"/><circle cx="9" cy="11" r="1.4"/><circle cx="15" cy="11" r="1.4"/><path d="M10 18v3M14 18v3"/></svg>',
  eye: '<svg viewBox="0 0 24 24"><path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6-10-6-10-6Z"/><circle cx="12" cy="12" r="2.6"/></svg>'
};

/* ---------------- navegação ---------------- */
const VIEWS = [
  { id: 'inicio', label: 'Início', icon: 'cross' },
  { id: 'regras', label: 'Regras', icon: 'scroll' },
  { id: 'info', label: 'Info', icon: 'info' },
  { id: 'ranks', label: 'Ranks', icon: 'crown' },
  { id: 'discord', label: 'Discord', icon: 'discord' },
  { id: 'loja', label: 'Loja', icon: 'cart' }
];

const CARDS = [
  { id: 'regras', title: 'Regras', sub: 'Leia antes de jogar', icon: 'scroll', img: 'card-regras.jpg' },
  { id: 'info', title: 'Informações', sub: 'Sobre o servidor', icon: 'info', img: 'card-info.jpg' },
  { id: 'ranks', title: 'Ranks', sub: 'E benefícios', icon: 'crown', img: 'card-ranks.jpg' },
  { id: 'discord', title: 'Discord', sub: 'Fale com a equipe', icon: 'discord', img: 'card-discord.jpg' },
  { id: 'loja', title: 'Loja', sub: 'Itens e vantagens', icon: 'cart', img: 'card-loja.jpg' }
];

/* ---------------- helpers ---------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function toast(msg) {
  let el = $('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), 1900);
}

async function copy(text, label) {
  try {
    await navigator.clipboard.writeText(text);
    toast(label + ' copiado');
  } catch {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); toast(label + ' copiado'); }
    catch { toast('Não foi possível copiar'); }
    ta.remove();
  }
}

/* ---------------- header ---------------- */
function renderHeader() {
  return `
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#/inicio" aria-label="Santuário SOLO — início">
        <img src="assets/logo.png" alt="Santuário — Rust Server">
      </a>
      <nav class="nav" aria-label="Navegação principal">
        ${VIEWS.map((v) => `
          <a class="nav-item" href="#/${v.id}" data-view="${v.id}">
            ${I[v.icon]}<span>${v.label}</span>
          </a>`).join('')}
      </nav>
      <a class="connect-btn" href="${SERVER.connectLink}">
        ${I.cross}<span><b>CONECTAR</b><span>AO SERVIDOR</span></span>
      </a>
      <button class="burger" type="button" aria-label="Abrir menu">${I.menu}</button>
    </div>
  </header>`;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="foot-brand">
      <img src="assets/logo.png" alt="Santuário">
      <p>Solo é liberdade. Aqui é <b>Santuário</b>.</p>
    </div>
    <div class="foot-right">
      <div class="foot-links">
        <a href="#/regras">Regras</a>
        <a href="#/info">Info</a>
        <a href="#/discord">Discord</a>
      </div>
      <img src="assets/rust.png" alt="Rust">
    </div>
  </footer>`;
}

/* ---------------- home ---------------- */
function renderHome() {
  return `
  <section class="hero wrap">
    <div class="hero-grid">
      <div class="hero-left">
        <p class="kicker">Bem-vindo ao</p>
        <h1 class="hero-title"><img src="assets/title.png" alt="Santuário" width="500" height="108" fetchpriority="high"></h1>
        <p class="hero-sub">Rust Server <em>·</em> Solo Only <em>·</em> Vanilla</p>
        <p class="hero-lead">Um lugar seguro para quem busca evoluir sem o caos.</p>
        <div class="badges">
          <span class="badge">${I.shield}<span>Anti-Cheater</span></span>
          <span class="badge">${I.user}<span>Solo Only</span></span>
          <span class="badge">${I.axe}<span>Fullwipe<em>${wipeShort}</em></span></span>
        </div>
        <a class="cta" href="${SERVER.connectLink}">
          <span>Conectar agora</span>${I.right}
        </a>
      </div>

      <aside class="server-panel" aria-label="Informações do servidor">
        <h2 class="panel-title">${I.server} Informações do servidor</h2>
        <div class="panel-row">
          <span class="ico">${I.globe}</span>
          <span><span class="k">IP do servidor</span><span class="v">${SERVER.ip}</span></span>
          <button class="copy-btn" type="button" data-copy="${SERVER.ip}" data-label="IP" aria-label="Copiar IP do servidor">${I.copy}</button>
        </div>
        <div class="panel-row">
          <span class="ico">${I.user}</span>
          <span><span class="k">Modo</span><span class="v">Solo Only</span></span>
          <span></span>
        </div>
        <div class="panel-row">
          <span class="ico">${I.axe}</span>
          <span><span class="k">Wipe</span><span class="v">Sexta · 18h30</span></span>
          <span></span>
        </div>

        <div class="spark">
          <h4>${I.eye} IA Spark</h4>
          <p>A Spark vigia o servidor 24 horas por dia e age rápido contra trapaça e comportamento suspeito.</p>
          <ul>
            <li>Anti-cheat em tempo real</li>
            <li>Análise de comportamento</li>
            <li>Punições registradas</li>
          </ul>
        </div>

        <a class="panel-cta" href="#/info">Conecte-se e faça parte</a>
      </aside>

      <div class="carousel-bar" aria-label="Navegação dos cards">
        <button class="arrow prev" type="button" aria-label="Anterior">${I.left}</button>
        <div class="dots">
          ${CARDS.map((c, i) => `<span class="dot${i === 0 ? ' on' : ''}" data-dot="${i}"></span>`).join('')}
        </div>
        <button class="arrow next" type="button" aria-label="Próximo">${I.right}</button>
      </div>
    </div>

    <div class="carousel">
      <button class="carousel-nav prev" type="button" aria-label="Anterior">${I.left}</button>
      <div class="carousel-track">
        ${CARDS.map((c) => `
          <a class="card" href="#/${c.id}">
            <div class="card-media"><img src="assets/${c.img}" alt=""></div>
            <div class="card-body">
              <span class="ico">${I[c.icon]}</span>
              <span><span class="card-title">${c.title}</span><span class="card-sub">${c.sub}</span></span>
            </div>
          </a>`).join('')}
      </div>
      <button class="carousel-nav next" type="button" aria-label="Próximo">${I.right}</button>
    </div>
  </section>`;
}

/* ---------------- páginas ---------------- */
const RULES = [
  'Servidor <b>estritamente SOLO</b>: apenas 1 jogador por base/time.',
  'Proibido qualquer tipo de time, ajuda, troca de itens ou aliança.',
  'Anti-cheat ativo: <b>macros, aimbot e wallhack</b> são detectados e banidos.',
  'Experiência 100% justa: <b>sem vantagens e SEM VIP</b>.',
  'Racismo, ofensas ou desrespeito geram <b>ban imediato</b>. Os logs são enviados à Facepunch.',
  '<b>VPN permitida</b>. Ping máximo: 220 ms.',
  'Contas com <b>ban VAC ou ban recente</b> não entram.',
  'Wipe toda <b>sexta-feira às 18h30</b> (horário de Brasília).'
];

function pageHead(view, sub) {
  const v = VIEWS.find((x) => x.id === view);
  return `
    <a class="back" href="#/inicio">${I.left} Voltar</a>
    <div class="page-head">
      <span class="ico">${I[v.icon]}</span>
      <div>
        <h1>${v.label === 'Info' ? 'Informações do servidor' : v.label}</h1>
        <p class="sub">${sub}</p>
      </div>
    </div>`;
}

function renderRegras() {
  return `<section class="page wrap">
    ${pageHead('regras', 'Todas as regras estão em vigor. Leia antes de jogar.')}
    <div class="page-body">
      ${RULES.map((r, i) => `<div class="rule"><span class="n">${i + 1}</span><p>${r}</p></div>`).join('')}
      <div class="callout">${I.warn}<p><b>Banimento é definitivo.</b> Não há recurso para quem quebra as regras de solo, usa cheat ou desrespeita outros jogadores.</p></div>
    </div>
  </section>`;
}

function renderInfo() {
  return `<section class="page wrap">
    ${pageHead('info', 'O essencial para entrar e jogar.')}
    <div class="page-body">
      <div class="info-grid">
        <div class="info-card"><h3>Nome</h3><p>Santuário SOLO</p><small>Procedural Map · Vanilla</small></div>
        <div class="info-card"><h3>Modo de jogo</h3><p>${SERVER.mode}</p><small>1 jogador por base/time</small></div>
        <div class="info-card"><h3>IP do servidor</h3><p>${SERVER.ip}</p><small>Domínio em registro</small></div>
        <div class="info-card"><h3>Comando de conectar</h3><p style="font-size:12px">${SERVER.connectCommand}</p><small>Ou use o botão CONECTAR</small></div>
        <div class="info-card"><h3>Wipe</h3><p>Toda sexta às 18h30</p><small>Próximo: ${wipeLong}</small></div>
        <div class="info-card"><h3>VPN</h3><p>${SERVER.vpn}</p><small>Ping máximo ${SERVER.maxping} ms</small></div>
      </div>

      <div class="callout" style="margin-top:22px">${I.clock}
        <div><b>Próximo wipe em</b><div class="countdown" id="cd"></div></div>
      </div>

      <div class="spark-block">
        <h3>${I.eye} IA Spark</h3>
        <p>A Spark é a inteligência artificial que vigia o Santuário. Ela acompanha o servidor 24 horas por dia, lê o comportamento das partidas e avisa a administração quando algo suspeito acontece — de trapaça a abuso de mecânicas. Quem quebra as regras não fica sem resposta.</p>
      </div>
    </div>
  </section>`;
}

function renderRanks() {
  return `<section class="page wrap">
    ${pageHead('ranks', 'Como funciona a progressão no Santuário SOLO.')}
    <div class="page-body">
      <div class="callout">${I.shield}<p><b>Não há VIP nem ranks pagos.</b> O Santuário SOLO não vende vantagens: todos os jogadores têm as mesmas oportunidades. Não existem kits, comandos especiais ou privilégios para doadores.</p></div>
      <div class="rule"><span class="n">1</span><p><b>Solo only.</b> Tamanho máximo de grupo: 1. Jogar em dupla, duo ou trio não é permitido neste servidor.</p></div>
      <div class="rule"><span class="n">2</span><p><b>Progressão vanilla.</b> Nada de multiplicadores, kits iniciais ou itens entregues. Você começa do zero como todo mundo.</p></div>
      <div class="rule"><span class="n">3</span><p><b>Ranking.</b> Um placar público de sobreviventes está em desenvolvimento — sem dados inventados, só estatísticas reais do servidor.</p></div>
      <div class="empty" style="margin-top:18px">Leaderboard em breve.</div>
    </div>
  </section>`;
}

function renderDiscord() {
  return `<section class="page wrap">
    ${pageHead('discord', 'Entre para o servidor oficial do Santuário SOLO.')}
    <div class="page-body">
      <div class="info-card" style="display:flex;gap:16px;align-items:center;padding:22px">
        <span class="ico" style="color:#d1502f">${I.discord}</span>
        <div style="flex:1">
          <p style="margin:0">Discord — Santuário SOLO</p>
          <small>Fale com a equipe e com a comunidade</small>
        </div>
        <span class="badge" style="gap:6px">${I.clock}<span>Em breve</span></span>
      </div>
      <div class="callout">${I.warn}<p><b>O Discord do Santuário SOLO ainda não existe.</b> Este é um espaço reservado até o convite oficial ser criado. Nenhum link falso é divulgado aqui.</p></div>
      <div class="empty">Enquanto isso, fale com a administração pelo chat do servidor.</div>
    </div>
  </section>`;
}

function renderLoja() {
  return `<section class="page wrap">
    ${pageHead('loja', 'O Santuário não vende vantagem.')}
    <div class="page-body">
      <div class="callout">${I.shield}<p><b>Sem pay-to-win.</b> A loja do Santuário SOLO não comercializa kits, itens, VIP, slots ou qualquer vantagem dentro do jogo. O servidor se sustenta sem vender poder.</p></div>
      <div class="rule"><span class="n">1</span><p><b>Nada de VIP.</b> Não existe assinatura, cargo pago ou benefício dentro do servidor.</p></div>
      <div class="rule"><span class="n">2</span><p><b>Apoio opcional.</b> Se um dia existir uma loja, será apenas de itens cosméticos ou de apoio ao projeto — nunca de vantagem competitiva.</p></div>
      <div class="empty" style="margin-top:18px">Loja em breve.</div>
    </div>
  </section>`;
}

/* ---------------- router ---------------- */
const ROUTES = {
  inicio: { render: renderHome, title: 'Santuário SOLO — Rust Server' },
  regras: { render: renderRegras, title: 'Regras — Santuário SOLO' },
  info: { render: renderInfo, title: 'Informações — Santuário SOLO' },
  ranks: { render: renderRanks, title: 'Ranks — Santuário SOLO' },
  discord: { render: renderDiscord, title: 'Discord — Santuário SOLO' },
  loja: { render: renderLoja, title: 'Loja — Santuário SOLO' }
};

function currentView() {
  const raw = (location.hash || '#/inicio').replace(/^#\/?/, '').split('?')[0] || 'inicio';
  return ROUTES[raw] ? raw : 'inicio';
}

function render() {
  const view = currentView();
  const route = ROUTES[view];

  $('#app').innerHTML = renderHeader() + `<main>${route.render()}</main>` + renderFooter();
  document.title = route.title;
  document.body.classList.toggle('inner', view !== 'inicio');

  $$('.nav-item').forEach((a) => {
    const on = a.dataset.view === view;
    a.classList.toggle('active', on);
    if (on) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  bind();
  if (view === 'info') startCountdown();

  window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
}

function bind() {
  $$('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', () => copy(btn.dataset.copy, btn.dataset.label || 'Valor'));
  });

  const track = $('.carousel-track');
  if (track) {
    const step = () => {
      const card = track.querySelector('.card');
      return card ? card.getBoundingClientRect().width + 10 : 260;
    };
    const go = (dir) => track.scrollBy({ left: dir * step(), behavior: 'smooth' });
    $$('.carousel-nav.prev, .carousel-bar .arrow.prev').forEach((b) => b.addEventListener('click', () => go(-1)));
    $$('.carousel-nav.next, .carousel-bar .arrow.next').forEach((b) => b.addEventListener('click', () => go(1)));

    const dots = $$('.carousel-bar .dot');
    const syncDots = () => {
      if (!dots.length) return;
      const w = step();
      if (!w) return;
      const i = Math.round(track.scrollLeft / w);
      dots.forEach((d, k) => d.classList.toggle('on', k === i));
    };
    track.addEventListener('scroll', syncDots, { passive: true });
    syncDots();
  }

  $('.burger')?.addEventListener('click', openMenu);
}

/* ---------------- menu mobile ---------------- */
function openMenu() {
  const menu = document.createElement('div');
  menu.className = 'mobile-menu open';
  menu.innerHTML = `
    <div class="mm-head">
      <img src="assets/logo.png" alt="Santuário">
      <button class="mm-close" type="button" aria-label="Fechar menu">${I.close}</button>
    </div>
    ${VIEWS.map((v) => `<a href="#/${v.id}">${I[v.icon]}${v.label}</a>`).join('')}
    <a href="${SERVER.connectLink}" style="color:#ff7a58">${I.cross}Conectar ao servidor</a>`;
  document.body.appendChild(menu);
  document.body.style.overflow = 'hidden';
  const close = () => { menu.remove(); document.body.style.overflow = ''; };
  menu.querySelector('.mm-close').addEventListener('click', close);
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
}

/* ---------------- countdown ---------------- */
let cdTimer = null;
function startCountdown() {
  clearInterval(cdTimer);
  const el = $('#cd');
  if (!el) return;
  const tick = () => {
    const diff = Math.max(0, wipeDate.getTime() - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el.innerHTML = [
      [d, 'dias'], [h, 'horas'], [m, 'min'], [s, 'seg']
    ].map(([v, l]) => `<span class="cd-box"><b>${String(v).padStart(2, '0')}</b><span>${l}</span></span>`).join('');
  };
  tick();
  cdTimer = setInterval(tick, 1000);
}

/* ---------------- boot ---------------- */
window.addEventListener('hashchange', render);
document.addEventListener('DOMContentLoaded', render);

window.addEventListener('scroll', () => {
  const h = $('.site-header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

