// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: this program's only job is to copy
// VIDEO.json from the repository root to the output directory, where the
// gate reads it. VIDEO.json names the YouTube Short that carries the clip;
// the house reads the video's views through the YouTube Data API, so
// nothing this program writes about the video is scored.
//
// Before copying, the program validates that VIDEO.json names a real
// YouTube video URL. A missing, malformed, or non-YouTube URL is rejected
// with a clear error and no output is written, so a bad link file can
// never silently reach the gate as if it were a valid entry.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

function fail(message: string): never {
  console.error(`VIDEO.json validation failed: ${message}`);
  process.exit(1);
}

// A YouTube video id is 11 base64url characters. The repository ships
// with the literal placeholder "<id>" until the video is uploaded, and
// that placeholder is accepted so the entry stays runnable pre-upload.
function isVideoId(id: string): boolean {
  return id === '<id>' || /^[A-Za-z0-9_-]{11}$/.test(id);
}

// Accept exactly the three YouTube video URL shapes:
//   https://www.youtube.com/shorts/<id>
//   https://www.youtube.com/watch?v=<id>
//   https://youtu.be/<id>
function isYouTubeVideoUrl(value: unknown): value is string {
  if (typeof value !== 'string') {
    return false;
  }

  let parsed: URL;
  try {
    parsed = new URL(value);
  } catch {
    return false;
  }

  if (parsed.protocol !== 'https:') {
    return false;
  }

  let id: string | null = null;

  if (parsed.hostname === 'www.youtube.com') {
    const segments = parsed.pathname.split('/').filter(Boolean);
    if (segments.length === 2 && segments[0] === 'shorts') {
      id = segments[1];
    } else if (parsed.pathname === '/watch') {
      id = parsed.searchParams.get('v');
    }
  } else if (parsed.hostname === 'youtu.be') {
    const segments = parsed.pathname.split('/').filter(Boolean);
    if (segments.length === 1) {
      id = segments[0];
    }
  }

  if (id === null) {
    return false;
  }

  try {
    id = decodeURIComponent(id);
  } catch {
    return false;
  }

  return isVideoId(id);
}

let raw: Buffer;
try {
  raw = readFileSync(source);
} catch (error) {
  fail(`could not read ${source}: ${(error as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch (error) {
  fail(`${source} is not valid JSON: ${(error as Error).message}`);
}

if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
  fail(`${source} must contain a JSON object with a "url" field`);
}

const url = (parsed as Record<string, unknown>).url;

if (url === undefined) {
  fail(`${source} is missing the "url" field`);
}
if (typeof url !== 'string') {
  fail(`"url" in ${source} must be a string, got ${typeof url}`);
}
if (!isYouTubeVideoUrl(url)) {
  fail(
    `"url" in ${source} is not a YouTube video URL ` +
      `(expected https://www.youtube.com/shorts/<id>, ` +
      `https://www.youtube.com/watch?v=<id>, or https://youtu.be/<id>), got: ${url}`,
  );
}

// Valid: copy byte-for-byte, exactly as before.
mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
