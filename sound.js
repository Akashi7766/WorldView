// All audio is synthesised with Web Audio: lyre plucks, horns, crowd noise and an ambient lyre loop. No files.
const Sound = (() => {
  let ctx, sfx, music, noiseBuf;
  const pref = k => localStorage.getItem('worldview-' + k) === 'off';
  let musicOff = pref('music'), sfxOff = pref('sfx');
  const MUSIC_VOL = .22, SFX_VOL = .55;
  const SCALE = [146.83, 164.81, 174.61, 196, 220, 246.94, 261.63, 293.66, 329.63, 349.23, 392, 440]; // D dorian

  const gainTo = (dest, v) => { const g = ctx.createGain(); g.gain.value = v; g.connect(dest); return g; };

  function init() {
    if (ctx) { if (ctx.state === 'suspended') ctx.resume(); return; }
    ctx = new AudioContext();
    const out = gainTo(ctx.destination, 1);
    // stone-hall echo shared by everything
    const echo = ctx.createDelay(); echo.delayTime.value = .27;
    echo.connect(gainTo(echo, .3)); echo.connect(gainTo(out, .35));
    sfx = gainTo(out, sfxOff ? 0 : SFX_VOL); sfx.connect(echo);
    music = gainTo(out, musicOff ? 0 : MUSIC_VOL); music.connect(echo);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    noiseBuf.getChannelData(0).forEach((_, i, d) => (d[i] = Math.random() * 2 - 1));
    startMusic();
  }

  function tone(f, { type = 'sine', at = 0, dur = .3, vol = .3, to, attack = .01, dest = sfx, filter } = {}) {
    const t = ctx.currentTime + at, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.setValueAtTime(f, t);
    if (to) o.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + attack); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    let node = o;
    if (filter) { node = ctx.createBiquadFilter(); node.frequency.value = filter; o.connect(node); }
    node.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + .05);
  }
  function pluck(f, at = 0, vol = .25, dest = sfx) { // lyre string: sharp attack, fast decay, octave shimmer
    tone(f, { type: 'triangle', at, dur: 1.1, vol, attack: .004, dest, filter: 2800 });
    tone(f * 2, { at, dur: .5, vol: vol * .25, attack: .004, dest });
  }
  function noise({ at = 0, dur = .3, vol = .2, freq = 1000, q = 1, to, type = 'bandpass' } = {}) {
    const t = ctx.currentTime + at, s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = noiseBuf; s.loop = true;
    f.type = type; f.Q.value = q; f.frequency.setValueAtTime(freq, t);
    if (to) f.frequency.exponentialRampToValueAtTime(to, t + dur);
    g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + Math.min(.05, dur / 3)); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(sfx); s.start(t); s.stop(t + dur + .05);
  }

  const VOICE = { you: 520, npc: 380, dark: 210, emp: 300, item: 700 };
  const FX = {
    click: () => pluck(587, 0, .18),
    hop: (n = 1) => { for (let i = 0; i < n; i++) tone(260, { at: i * .46, to: 640, dur: .16, vol: .2 }); },
    shake: () => { for (let i = 0; i < 4; i++) noise({ at: i * .11, dur: .08, freq: 2500, q: 4, vol: .12 }); },
    spin: () => noise({ dur: .6, freq: 400, to: 3000, q: 2, vol: .15 }),
    squash: () => tone(220, { to: 80, dur: .3, vol: .25 }),
    grow: () => tone(180, { type: 'triangle', to: 520, dur: .5, vol: .15 }),
    fade: () => tone(520, { type: 'triangle', to: 140, dur: .5, vol: .12 }),
    show: () => tone(200, { type: 'triangle', to: 600, dur: .4, vol: .12 }),
    glow: () => [1568, 2093, 2637].forEach((f, i) => tone(f, { at: i * .09, dur: .9, vol: .05 })),
    hearts: () => [1047, 1319, 1568].forEach((f, i) => pluck(f, i * .1, .1)),
    burst: () => { for (let i = 0; i < 6; i++) tone(1500 + Math.random() * 2000, { at: i * .05, dur: .15, vol: .05 }); },
    float: () => { pluck(1319, 0, .1); pluck(1760, .12, .08); },
    bow: () => pluck(294, 0, .15),
    cry: () => { for (let i = 0; i < 3; i++) tone(1100, { to: 400, at: i * .25, dur: .18, vol: .08 }); },
    step: n => { for (let i = 0; i < n; i++) noise({ at: i * .3, dur: .07, freq: 500, type: 'lowpass', vol: .12 }); },
    say: (kind, len) => { // gibberish murmur, pitched by character type
      const base = VOICE[kind] || 380, n = Math.min(10, 2 + (len / 6 | 0));
      for (let i = 0; i < n; i++) tone(base * (.8 + Math.random() * .5), { type: 'square', at: i * .075, dur: .06, vol: .035, filter: 1400 });
    },
    correct: () => { [523, 659, 784, 1047].forEach((f, i) => pluck(f, i * .09, .22)); noise({ at: .2, dur: 1.4, freq: 1100, q: .6, vol: .12 }); },
    wrong: () => {
      tone(196, { type: 'sawtooth', to: 130, dur: .9, vol: .16, filter: 900 });
      tone(147, { type: 'sawtooth', at: .05, to: 98, dur: 1, vol: .12, filter: 700 });
      noise({ at: .15, dur: 1.2, freq: 350, q: .8, vol: .14 });
    },
    fanfare: () => [392, 523, 659, 784, 1047].forEach((f, i) => tone(f, { type: 'sawtooth', at: i * .16, dur: i === 4 ? 1.2 : .3, vol: .1, filter: 1600, attack: .03 })),
  };

  function startMusic() {
    [73.42, 110].forEach(f => { // low D + A drone
      const o = ctx.createOscillator(); o.frequency.value = f; o.connect(gainTo(music, .05)); o.start();
    });
    let i = 4;
    (function next() { // wandering lyre melody
      i = Math.max(0, Math.min(SCALE.length - 1, i + [-2, -1, -1, 1, 1, 2][Math.random() * 6 | 0]));
      pluck(SCALE[i], .02, .18, music);
      if (Math.random() < .25) pluck(SCALE[i] / 2, .02, .1, music);
      setTimeout(next, [450, 450, 900, 1350][Math.random() * 4 | 0]);
    })();
  }

  function set(which, off) {
    localStorage.setItem('worldview-' + which, off ? 'off' : 'on');
    const g = which === 'music' ? music : sfx;
    if (g) g.gain.setTargetAtTime(off ? 0 : which === 'music' ? MUSIC_VOL : SFX_VOL, ctx.currentTime, .1);
  }

  return {
    init,
    play: (name, ...a) => { if (ctx && !sfxOff) FX[name](...a); },
    toggleMusic: () => { init(); set('music', musicOff = !musicOff); return musicOff; },
    toggleSfx: () => { init(); set('sfx', sfxOff = !sfxOff); return sfxOff; },
    get musicOff() { return musicOff; },
    get sfxOff() { return sfxOff; },
  };
})();
