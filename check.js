// node check.js — validates data.js + scenes-*.js: known verbs and cast ids, all 6 schools, no duplicate scenarios.
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const files = ['data.js', ...fs.readdirSync(__dirname).filter(f => /^scenes-\d+\.js$/.test(f)).sort()];
const code = files.map(f => fs.readFileSync(__dirname + '/' + f, 'utf8')).join('\n;\n');
const { PHIL, SCENES, QUIZ, RANK_AT } = vm.runInNewContext(code + ';({PHIL,SCENES,QUIZ,RANK_AT})');
const VERBS = { go: 2, to: 3, home: 1, shake: 1, hop: 1, spin: 1, squash: 1, bow: 1, grow: 2, fade: 1, show: 1, glow: 1, hearts: 1, burst: 1, cry: 1, say: 2, float: 2 };
const BGS = ['forum', 'palace', 'temple', 'sea', 'arena', 'road', 'street', 'hill', 'garden', 'villa'];
const codes = Object.keys(PHIL);

assert.equal(codes.length, 6);
for (const p of Object.values(PHIL)) assert.equal(p.ranks.length, RANK_AT.length);

const texts = new Set();
SCENES.forEach((sc, n) => {
  const where = `scene ${n} ("${sc.text.slice(0, 40)}…")`;
  assert(!texts.has(sc.text), `${where} is a duplicate`); texts.add(sc.text);
  assert(BGS.includes(sc.bg), `${where}: unknown bg ${sc.bg}`);
  const ids = new Set(sc.cast.map(c => c[0]));
  sc.cast.forEach(c => assert(!isNaN(c[2]) && !isNaN(c[3]), `${where}: bad cast coords ${c}`));
  assert(ids.has('you'), `${where} has no "you"`);
  assert.deepEqual(Object.keys(sc.opts).sort(), [...codes].sort(), `${where} missing a school`);
  for (const [c, o] of Object.entries(sc.opts)) assert(o.length === 2 && o[0] && o[1], `${where}: school ${c} needs "text | script"`);
  for (const script of [sc.intro, ...Object.values(sc.opts).map(o => o[1])])
    for (const part of script.split(/[;&]/).map(s => s.trim())) {
      const [verb, id, ...rest] = part.split(' ');
      assert(verb in VERBS, `${where}: unknown verb in "${part}"`);
      assert(ids.has(id), `${where}: unknown blob in "${part}"`);
      if (verb === 'go') assert(ids.has(rest[0]) && rest[0] !== id, `${where}: bad target in "${part}"`);
      if (verb === 'to') assert(rest.length === 2 && rest.every(v => !isNaN(v)), `${where}: bad coords in "${part}"`);
      if (VERBS[verb] === 2) assert(rest.length, `${where}: "${part}" needs an argument`);
    }
});

assert.equal(QUIZ.length, 50);
QUIZ.forEach(([q, ...opts], n) => {
  assert.equal(opts.length, 4, `quiz ${n}: needs 4 options`);
  const cs = opts.map(o => o.split('|')[0]);
  assert(cs.every(c => codes.includes(c)) && new Set(cs).size === 4, `quiz ${n}: bad or duplicate codes`);
});
console.log(`OK — ${SCENES.length} scenes (${SCENES.length * 6} animated answers), ${QUIZ.length} oracle questions.`);
