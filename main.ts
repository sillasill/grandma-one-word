// make.fun — "One Word From Grandma"
// Writes exactly one word to /output/entry.txt:
// the single word a grandma would text about AI.
// Deterministic: the word is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { readFileSync } from "node:fs";
import { dirname } from "node:path";

// AIEEE — a grandma's startled yelp at the robot, with "AI" right in it:
// warm, baffled, funny in one word, and unmistakably about AI.
const WORD = "AIEEE";

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, WORD, "utf8");

// Gate: the entry must be exactly one word, 1 to 30 characters, no whitespace.
const written = readFileSync(out, "utf8");
if (!/^\S{1,30}$/.test(written)) {
  throw new Error(`entry must be one word of 1-30 chars, got ${written.length}`);
}
