const app = document.getElementById('app');
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ROUNDS = 20;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
const roman = n => [[1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'], [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']]
  .reduce((s, [v, r]) => { while (n >= v) { s += r; n -= v; } return s; }, '') || 'N'; // N = nulla
const inscribe = s => s.toUpperCase().replace(/U/g, 'V').replace(/ /g, ' · ');
const best = c => +localStorage.getItem('worldview-best-' + c) || 0;

let session = 0; // bumped on every screen change; running scripts check it and stop
function show(html) { session++; app.innerHTML = html; scrollTo(0, 0); return session; }

/* ---------------- stage engine ---------------- */
function anim(el, kf, d, opts = {}) {
  const a = el.animate(kf, { duration: RM ? 1 : d, easing: 'ease-in-out', ...opts });
  return a.finished.then(() => { if (opts.fill) { a.commitStyles(); a.cancel(); } }).catch(() => {});
}

function stage(sc) {
  const el = document.createElement('div');
  el.className = 'stage bg-' + sc.bg;
  el.setAttribute('role', 'img');
  el.setAttribute('aria-label', sc.text);
  const blobs = {};
  for (const [id, label, x, y, kind = 'npc'] of sc.cast) {
    const k = id === 'you' ? 'you' : kind;
    const b = document.createElement('div');
    b.className = 'blob ' + k;
    b.innerHTML = `<div class="sz">${k === 'emp' ? '<span class="crown"></span>' : ''}<div class="body">${k === 'item' ? '' : '<span class="eye"></span><span class="eye"></span>'}</div></div><span class="tag">${label}</span>`;
    b.style.left = x + '%'; b.style.top = y + '%';
    el.append(b);
    blobs[id] = { el: b, sz: b.firstChild, body: b.querySelector('.body'), x, y, hx: x, hy: y, s: 1, kind: k, item: k === 'item' };
  }
  return { el, blobs };
}

async function run(scene, script, token) {
  for (const step of script.split(';')) {
    if (token !== session) return;
    await Promise.all(step.split('&').map(p => act(scene, p.trim())));
  }
}

const QUIET = new Set(['go', 'to', 'home', 'say']); // verbs whose sound is handled elsewhere

function act({ blobs }, cmd) {
  const [verb, id, ...rest] = cmd.split(' ');
  const arg = rest.join(' ');
  const b = blobs[id];
  if (!QUIET.has(verb)) Sound.play(verb, +arg || 1);
  switch (verb) {
    case 'go': { // stand beside the target, at least ~1.6 blob-widths apart so labels don't collide
      const t = blobs[arg], gap = Math.max(11, 160 * t.el.offsetWidth / t.el.parentElement.offsetWidth);
      return move(b, Math.min(94, Math.max(6, t.x + (b.x < t.x ? -gap : gap))), t.item ? b.y : b.item ? t.y - 7 : t.y);
    }
    case 'to': return move(b, +rest[0], +rest[1]);
    case 'home': return move(b, b.hx, b.hy);
    case 'shake': return anim(b.body, [0, -9, 9, -7, 7, -3, 0].map(x => ({ transform: `translateX(${x}px)` })), 520);
    case 'hop': return anim(b.body, [{ transform: 'none' }, { transform: 'translateY(-30%) scale(.94,1.08)', offset: .4 }, { transform: 'scale(1.12,.86)', offset: .8 }, { transform: 'none' }], 460, { iterations: +arg || 1 });
    case 'spin': return anim(b.body, [{ transform: 'rotate(0)' }, { transform: 'rotate(360deg)' }], 700);
    case 'squash': return anim(b.body, [{ transform: 'none' }, { transform: 'translateY(12%) scale(1.25,.72)', offset: .25 }, { transform: 'translateY(12%) scale(1.25,.72)', offset: .8 }, { transform: 'none' }], 1300);
    case 'bow': return anim(b.body, [{ transform: 'none' }, { transform: 'rotate(-28deg) translateY(10%)', offset: .35 }, { transform: 'rotate(-28deg) translateY(10%)', offset: .7 }, { transform: 'none' }], 1100);
    case 'grow': { const from = b.s; b.s = +arg; return anim(b.sz, [{ transform: `scale(${from})` }, { transform: `scale(${b.s})` }], 500, { fill: 'forwards' }); }
    case 'fade': return anim(b.el, [{ opacity: 1 }, { opacity: 0 }], 500, { fill: 'forwards' });
    case 'show': return anim(b.el, [{ opacity: 0 }, { opacity: 1 }], 500, { fill: 'forwards' });
    case 'glow': return anim(b.body, [{ filter: 'drop-shadow(0 0 0 #f6dc8f)' }, { filter: 'drop-shadow(0 0 16px #f6dc8f)' }, { filter: 'drop-shadow(0 0 0 #f6dc8f)' }], 1300);
    case 'hearts': return burst(b, '♥', 7);
    case 'burst': return burst(b, '✦', 10);
    case 'cry': return tears(b);
    case 'say': Sound.play('say', b.kind, arg.length); return bubble(b, arg);
    case 'float': return floater(b, arg);
  }
  throw new Error('Unknown stage verb: ' + cmd);
}

async function move(b, x, y) {
  b.el.dataset.look = x < b.x ? 'l' : x > b.x ? 'r' : '';
  const d = Math.min(1100, 320 + Math.hypot(x - b.x, y - b.y) * 13);
  if (!b.item) {
    Sound.play('step', Math.max(1, Math.round(d / 300)));
    if (!RM) b.body.animate([{ transform: 'none' }, { transform: 'translateY(-14%)' }, { transform: 'none' }], { duration: 300, iterations: Math.max(1, Math.round(d / 300)) });
  }
  await anim(b.el, [{ left: b.x + '%', top: b.y + '%' }, { left: x + '%', top: y + '%' }], d, { easing: 'cubic-bezier(.5,0,.3,1)', fill: 'forwards' });
  b.x = x; b.y = y;
}

async function bubble(b, text) {
  const el = document.createElement('div');
  el.className = 'bubble'; el.textContent = text;
  el.dataset.side = b.x < 22 ? 'l' : b.x > 78 ? 'r' : '';
  b.el.append(el);
  await anim(el, [{ opacity: 0, transform: 'translateY(6px) scale(.9)' }, { opacity: 1, transform: 'none' }], 200);
  await sleep(Math.min(3200, 800 + text.length * 50));
  await anim(el, [{ opacity: 1 }, { opacity: 0 }], 200, { fill: 'forwards' });
  el.remove();
}

async function floater(b, text) {
  const el = document.createElement('div');
  el.className = 'floater'; el.textContent = text;
  b.el.append(el);
  await anim(el, [{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, offset: .2 }, { opacity: 1, offset: .8 }, { opacity: 0, transform: 'translateY(-50px)' }], 1700, { easing: 'ease-out', fill: 'forwards' });
  el.remove();
}

function particle(b, glyph, cls, from, to, d) {
  const el = document.createElement('span');
  el.className = cls; el.textContent = glyph;
  b.el.append(el);
  return anim(el, [from, to], d, { easing: 'ease-out', fill: 'forwards' }).then(() => el.remove());
}
const burst = (b, glyph, n) => Promise.all(Array.from({ length: n }, (_, i) => {
  const a = (i / n) * Math.PI * 2, r = 40 + Math.random() * 30;
  return particle(b, glyph, 'spark', { transform: 'translate(-50%,-50%) scale(.4)', opacity: 1 },
    { transform: `translate(calc(-50% + ${Math.cos(a) * r}px), calc(-50% + ${Math.sin(a) * r - 20}px)) scale(1.1)`, opacity: 0 }, 1000);
}));
const tears = b => Promise.all([0, 1, 2, 3].map(i => sleep(i * 220).then(() =>
  particle(b, '●', 'tear ' + (i % 2 ? 'r' : 'l'), { transform: 'translateY(0) scale(.6)', opacity: 1 }, { transform: 'translateY(34px) scale(.3)', opacity: 0 }, 700))));

/* ---------------- home ---------------- */
const HERO = { bg: 'forum', text: 'Philosophers arguing in a Roman forum',
  cast: [['you', 'You', 50, 70], ['a', 'Stoic', 20, 70], ['b', 'Cynic', 80, 70], ['c', 'Epicurean', 35, 72], ['d', 'Sophist', 66, 72, 'dark']] };
const IDLE = ['say a Accept what you cannot change.', 'hop b 2', 'say b Stand out of my sunlight!', 'hearts c', 'say c Pass the cheese.', 'say d Pay me and I’ll prove anything.',
  'spin you', 'say you What would I do?', 'glow a', 'go b d', 'home b', 'float you ?', 'squash c', 'bow a'];

async function home() {
  const token = show(`
    <section class="hero">
      <p class="eyebrow">LVDVS · PHILOSOPHORVM</p>
      <h1>ARENA · OF · THE · MIND</h1>
      <p class="lede">Pick a school of thought, then live by it — one dilemma at a time.</p>
      <div class="hero-stage"></div>
    </section>
    <div class="modes">
      <button class="tablet" data-go="pick"><span class="kicker">THE · TRIAL</span><strong>Prove your philosophy</strong>
        <span>Choose a school and face twenty dilemmas from a pool of ${SCENES.length}. Answer as your school would. Your final score decides which great philosopher you become.</span></button>
      <button class="tablet" data-go="quiz"><span class="kicker">THE · ORACLE</span><strong>Find your philosophy</strong>
        <span>Fifty questions with no right answers. Your instincts reveal which school you truly belong to.</span></button>
    </div>`);
  const scene = stage(HERO);
  app.querySelector('.hero-stage').append(scene.el);
  while (token === session) { await sleep(500); await run(scene, IDLE[Math.random() * IDLE.length | 0], token); }
}

/* ---------------- the trial ---------------- */
let T = {};

function pick() {
  show(`
    <p class="eyebrow">THE · TRIAL</p>
    <h2>Choose your school</h2>
    <p class="lede">Twenty dilemmas, four answers each. Only one is what your school would do — the rest belong to its rivals.</p>
    <div class="schools">${Object.entries(PHIL).map(([c, p]) => `
      <button class="tablet" data-school="${c}"><strong>${inscribe(p.name)}</strong><span>${p.creed}</span>
        ${best(c) ? `<span class="best">BEST · ${roman(best(c))} / XX</span>` : ''}</button>`).join('')}
    </div>`);
}

function startTrial(phil) {
  // Prefer scenes not played recently, so twenty games in a row rarely repeat.
  const seen = new Set(JSON.parse(localStorage.getItem('worldview-seen') || '[]'));
  const all = SCENES.map((_, i) => i), fresh = all.filter(i => !seen.has(i));
  const deck = [...shuffle(fresh), ...shuffle(all.filter(i => seen.has(i)))].slice(0, ROUNDS);
  localStorage.setItem('worldview-seen', JSON.stringify([...seen, ...deck].slice(-(SCENES.length - ROUNDS))));
  T = { phil, score: 0, deck, log: [] };
  round();
}

async function round() {
  const sc = SCENES[T.deck[T.log.length]];
  const token = show(`
    <div class="hud"><span>${inscribe(PHIL[T.phil].name)}</span>
      <span>ROVND · <b>${roman(T.log.length + 1)}</b> / XX</span>
      <span class="score">VIRTVS · <b>${roman(T.score)}</b></span>
      <button class="link" data-go="home">LEAVE</button></div>
    <div class="progress"><i style="width:${T.log.length / ROUNDS * 100}%"></i></div>
    <p class="narration">${sc.text}</p>
    <div class="stage-slot"></div>
    <div class="choices" hidden></div>`);
  const scene = stage(sc);
  app.querySelector('.stage-slot').append(scene.el);
  await sleep(500);
  await run(scene, sc.intro, token);
  if (token !== session) return;

  const codes = shuffle([T.phil, ...shuffle(Object.keys(PHIL).filter(c => c !== T.phil)).slice(0, 3)]);
  const box = app.querySelector('.choices');
  box.innerHTML = codes.map((c, i) => `<button class="choice" data-c="${c}"><span class="num">${roman(i + 1)}</span><span>${sc.opts[c][0]}</span></button>`).join('');
  box.hidden = false;
  box.scrollIntoView({ block: 'nearest', behavior: RM ? 'auto' : 'smooth' });
  box.onclick = async e => {
    const btn = e.target.closest('.choice');
    if (!btn || btn.disabled) return;
    const c = btn.dataset.c, right = c === T.phil;
    Sound.play('click');
    box.querySelectorAll('.choice').forEach(x => (x.disabled = true));
    btn.classList.add('picked');
    await run(scene, sc.opts[c][1], token);
    await Promise.all([run(scene, SIGNATURE[c], token), seal(scene.el, c)]); // reveals whose answer that was
    if (token !== session) return;
    if (!right) box.querySelector(`[data-c="${T.phil}"]`).classList.add('true');
    if (right) T.score++;
    T.log.push({ sc, chose: c });
    Sound.play(right ? 'correct' : 'wrong');
    const v = document.createElement('div');
    v.className = 'verdict';
    v.innerHTML = right ? `<span class="thumb">👍</span>VIRTVS · +I<small>THE CROWD APPROVES</small>` : `<span class="thumb">👎</span>POLLICE · VERSO<small>THE TRUE ANSWER IS MARKED IN GOLD</small>`;
    scene.el.append(v);
    await anim(v, [{ opacity: 0, transform: 'scale(1.3)' }, { opacity: 1, transform: 'none' }], 350, { easing: 'ease-out' });
    await sleep(right ? 1100 : 2600);
    if (token !== session) return;
    T.log.length < ROUNDS ? round() : over();
  };
}

// Each school's closing flourish, played after every answer alongside a seal naming the school.
const SIGNATURE = { S: 'glow you', E: 'hearts you', C: 'hop you 2', U: 'burst you', K: 'bow you', X: 'spin you' };
async function seal(stageEl, c) {
  const el = document.createElement('div');
  el.className = 'seal'; el.textContent = `✦ ${inscribe(PHIL[c].name)} ✦`;
  stageEl.append(el);
  await anim(el, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none', offset: .2 }, { opacity: 1, offset: .85 }, { opacity: 0 }], 1500, { fill: 'forwards' });
  el.remove();
}

const rankOf = score => RANK_AT.filter(t => score >= t).length - 1;

function over() {
  const p = PHIL[T.phil], r = rankOf(T.score);
  if (T.score > best(T.phil)) localStorage.setItem('worldview-best-' + T.phil, T.score);
  const [name, epithet] = r < 0 ? ['A Wandering Plebeian', 'the crowd barely noticed you'] : p.ranks[r];
  const next = p.ranks[r + 1];
  show(`
    <section class="result">
      <p class="eyebrow">THE · TRIAL · ENDS</p>
      <p class="tally">${roman(T.score)}<span> / XX</span></p>
      <p class="you-are">${T.score} of ${ROUNDS} answered as a true ${p.who}. You have proven yourself</p>
      <h2>${inscribe(name)}</h2>
      <p class="epithet">${epithet}</p>
      <ol class="ladder">${p.ranks.map(([n], i) => `<li class="${i < r ? 'got' : i === r ? 'got here' : ''}"><span>${inscribe(n)}</span><span>${roman(RANK_AT[i])}+</span></li>`).join('')}</ol>
      ${next ? `<p class="you-are">Score ${RANK_AT[r + 1]} or more to become ${next[0]}.</p>` : ''}
      <div class="actions">
        <button class="btn primary" data-school="${T.phil}">PLAY AGAIN</button>
        <button class="btn" data-go="pick">ANOTHER SCHOOL</button>
        <button class="btn" data-go="home">HOME</button>
      </div>
      <details class="review"><summary>Review your twenty answers</summary><ol>
        ${T.log.map(({ sc, chose }) => `<li class="${chose === T.phil ? 'ok' : 'no'}"><p class="q">${sc.text}</p>
          <p><b>${chose === T.phil ? '✓ YOV' : '✗ YOV'}</b>${sc.opts[chose][0]}</p>
          ${chose === T.phil ? '' : `<p><b>A TRVE ${inscribe(p.who)}</b>${sc.opts[T.phil][0]}</p>`}</li>`).join('')}
      </ol></details>
    </section>`);
  Sound.play('fanfare');
}

/* ---------------- the oracle ---------------- */
let Q = {};

function quiz() { Q = { i: 0, picks: {}, seen: {} }; question(); }

function question() {
  const [text, ...opts] = QUIZ[Q.i];
  show(`
    <div class="hud"><span>THE · ORACLE</span><span class="score">QVAESTIO · <b>${roman(Q.i + 1)}</b> / L</span><button class="link" data-go="home">LEAVE</button></div>
    <div class="progress"><i style="width:${Q.i / QUIZ.length * 100}%"></i></div>
    <h2 class="question">${text}</h2>
    <div class="choices">${shuffle(opts.map(o => o.split('|'))).map(([c, t], i) =>
      `<button class="choice" data-q="${c}"><span class="num">${roman(i + 1)}</span><span>${t}</span></button>`).join('')}</div>`);
}

function answer(c) {
  for (const o of QUIZ[Q.i].slice(1)) Q.seen[o[0]] = (Q.seen[o[0]] || 0) + 1;
  Q.picks[c] = (Q.picks[c] || 0) + 1;
  if (++Q.i < QUIZ.length) question(); else oracle();
}

function oracle() {
  // Normalise by how often each school was offered, so uneven option counts don't skew the result.
  const pct = Object.keys(PHIL).map(c => [c, Math.round(100 * (Q.picks[c] || 0) / (Q.seen[c] || 1))]).sort((a, b) => b[1] - a[1]);
  const [top, share] = pct[0], p = PHIL[top];
  const [name, epithet] = p.ranks[Math.max(0, Math.min(5, Math.round((share - 25) / 75 * 5)))];
  show(`
    <section class="result">
      <p class="eyebrow">THE · ORACLE · HAS · SPOKEN</p>
      <p class="you-are">Your soul belongs to</p>
      <h2>${inscribe(p.name)}</h2>
      <p class="epithet">${p.creed}</p>
      <p class="you-are">Your kindred philosopher: <b>${name}</b>, ${epithet}.</p>
      <div class="bars">${pct.map(([c, v]) => `<div class="bar"><span>${inscribe(PHIL[c].name)}</span><div><i style="width:${v}%"></i></div><span>${v}%</span></div>`).join('')}</div>
      <div class="actions">
        <button class="btn primary" data-school="${top}">TRIAL OF THE ${inscribe(p.who)}</button>
        <button class="btn" data-go="quiz">ASK AGAIN</button>
        <button class="btn" data-go="home">HOME</button>
      </div>
    </section>`);
  Sound.play('fanfare');
}

/* ---------------- wiring ---------------- */
const SCREENS = { home, pick, quiz };
document.addEventListener('pointerdown', Sound.init); // browsers only allow audio after a user gesture
document.addEventListener('keydown', Sound.init);
document.addEventListener('click', e => {
  const t = e.target.closest('[data-go],[data-school],[data-q]');
  if (!t) return;
  Sound.play('click');
  if (t.dataset.go) SCREENS[t.dataset.go]();
  else if (t.dataset.school) startTrial(t.dataset.school);
  else answer(t.dataset.q);
});
document.addEventListener('keydown', e => { // 1–4 picks an answer
  const btn = app.querySelectorAll('.choices:not([hidden]) .choice')[e.key - 1];
  if (btn && !btn.disabled) btn.click();
});
for (const [id, toggle, key] of [['mus', 'toggleMusic', 'musicOff'], ['sfx', 'toggleSfx', 'sfxOff']]) {
  const btn = document.getElementById(id);
  btn.setAttribute('aria-pressed', !Sound[key]);
  btn.onclick = () => btn.setAttribute('aria-pressed', !Sound[toggle]());
}
home();
