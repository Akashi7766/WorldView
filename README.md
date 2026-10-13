# WorldView — Arena of the Mind

A Roman-themed philosophy game. Pick a school of thought and live by it, one dilemma at a time.

**Play it:** https://akashi7766.github.io/WorldView/

- **The Trial**: choose Stoicism, Epicureanism, Cynicism, Utilitarianism, Kantian Ethics or Existentialism, then face 20 dilemmas drawn from a pool of 200. Each has four animated answers; only one is your school's. Your score out of 20 decides which great philosopher you become.
- **The Oracle**: 50 questions with no right answers that reveal which school you belong to.

Everything is plain HTML/CSS/JS with synthesised Web Audio — no build step, no dependencies.

## Run

Open `index.html` in a browser, or serve the folder:

```bash
npx http-server -p 5173
```

## Add scenarios

Scenarios live in `scenes-*.js`, one `add(...)` call each (format documented at the top of `data.js`). After editing, validate with:

```bash
node check.js
```
