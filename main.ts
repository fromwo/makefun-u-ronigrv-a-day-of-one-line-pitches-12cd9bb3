// A Day of One-Line Pitches — entry program.
// Writes one original sentence to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22 standard library only. No network, no randomness, no wall-clock:
// two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "That app idea you've been carrying around for years — describe it in plain words on make.fun, let an AI agent build a real first version you can tap on, free and with no code from you, and the worst that happens is you finally see it.";

const MAX_CHARS = 240;

if (PITCH.length === 0 || PITCH.length > MAX_CHARS) {
  throw new Error(`pitch must be 1-${MAX_CHARS} characters, got ${PITCH.length}`);
}
if (PITCH.trim().length === 0) {
  throw new Error("pitch must not be only whitespace");
}
if (PITCH.trim().split(/\s+/).length < 2 || !/[.!?]$/.test(PITCH.trim())) {
  throw new Error("pitch must be a single complete sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
