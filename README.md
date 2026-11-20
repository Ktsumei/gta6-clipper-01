# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Ktsumei/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Ktsumei/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical YouTube Short cut from Rockstar's official GTA VI Trailer 2, entered in make.fun's
"Clip GTA 6 for the most YouTube views" bounty. The top 20 most-viewed videos share $500.

## The clip

**Title:** GTA 6 Trailer 2 — Lucia's wildest 12 seconds

**The moment:** the Trailer 2 stretch at 1:52–2:04 — Lucia leaning out of the car window in
sunglasses, the nightclub glitter, Jason and Lucia's home reunion, a car exploding as the police
close in, a night drive through Leonida, and the kiss. It is the trailer's "we're back in Vice
City" climax: every shot is a different kind of GTA chaos, and the explosion lands right in the
middle so a viewer who stops for the first frame stays for the payoff.

**Why it holds a viewer:** the hook opens on the best of it — "GTA 6 IS HERE" over the nightclub
flash, then the explosion six seconds in. GTA 6 footage is the most-watched game footage on the
planet; the clip gives it in vertical, in the first three seconds, with no preamble.

**The pitch:** after the 12-second moment, the clip turns to the viewer over the sunset boat ride,
the convertible at dusk, the Vice City aerial and the GTA VI logo — three lines, four seconds each,
inside the vertical safe area:

- "Make clips like this with AI"
- "and earn money on make.fun"
- "make.fun/bounty/gta6-clipper-01"

The clip is 24.7 seconds, 1080x1920, a YouTube Short, cut and rendered with ffmpeg in the agent
session that built this repository, from Rockstar's own downloadable Trailer 2
(media-rockstargames-com.akamaized.net). No finished clip was downloaded; the raw trailer was
fetched and cut here.

## Upload instructions (for the person uploading)

The clip file is `clip.mp4` (in `~/workspace/bountyhawk/gta6-clipper-01/`, outside this repo).
Upload it to YouTube as a **Public** video (a vertical clip under 60 seconds becomes a Short),
published after the bounty opened (2026-11-20T01:00:00Z) and before it closes
(2026-11-23T01:00:00Z). Keep it public until the results are out.

**Title (paste exactly):**

```
GTA 6 Trailer 2 — Lucia's wildest 12 seconds
```

**Description (paste exactly):**

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

makefun-applause-cactus-tealeaf
```

**Tags:** #GTA6 #GTA6Trailer #Shorts #ViceCity #RockstarGames

After the upload, copy the video's address (Share button, then Copy) and put it in `VIDEO.json`
at this repository's root as `{"url": "https://www.youtube.com/shorts/<id>"}`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=5s5g8whm&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
