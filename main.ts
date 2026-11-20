// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: this program's only job is to copy
// VIDEO.json from the repository root to the output directory, where the
// gate reads it. VIDEO.json names the YouTube Short that carries the clip;
// the house reads the video's views through the YouTube Data API, so
// nothing this program writes about the video is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
