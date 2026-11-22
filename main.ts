// "The agent builds a game from one prompt" — make.fun program/v1 entry.
// The post on X is the entry. This program does one thing: it copies the
// POST.json at the repository root into the output directory, where the
// gate reads the post's address from it. Nothing else is scored here.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');

mkdirSync(outputDir, { recursive: true });

try {
  const post = readFileSync(source, 'utf8');
  JSON.parse(post); // fail loudly on a malformed POST.json instead of copying garbage
  writeFileSync(target, post);
} catch (err) {
  console.error(`could not copy POST.json from ${source}: ${(err as Error).message}`);
  process.exit(1);
}
