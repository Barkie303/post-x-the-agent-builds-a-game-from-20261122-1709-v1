[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Barkie303/post-x-the-agent-builds-a-game-from-20261122-1709-v1/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Barkie303/post-x-the-agent-builds-a-game-from-20261122-1709-v1/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
<sub>Entered on [make.fun](https://make.fun/?ref=1qzhe0a6&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

# ROCKET DODGE — one prompt, one game

An entry for make.fun's **"The agent builds a game from one prompt"** bounty ($20 pool, top 10 paid).

The video shows an AI coding agent building a tiny browser game from a single prompt while you watch: the prompt on screen, the agent writing the code, and the finished game actually running — then it ends on make.fun's referral end card.

**The one prompt:**

> Build a tiny browser game: a neon rocket dodges falling asteroids — move with arrow keys or touch, score climbs, one hit ends the run, press R to restart. Single HTML file.

**The game:** `game.html` — ROCKET DODGE. A neon rocket weaves through falling asteroids, the score climbs the longer you survive, one hit ends the run, R restarts. Arrow keys / A,D or touch to steer. Add `?auto=1` to the URL and the rocket flies itself.

## Play it

Open `game.html` in any browser. No build step, no dependencies.

## The post

`POST.json` names the X post carrying the video. The video is posted natively on X from a public account, with the bounty line and the play code `makefun-spatula-runway-crane` in its text.

## Run the entry program

`main.ts` (Node 22) copies `POST.json` from the repository root to `/output/POST.json` — that is all it has to do.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
