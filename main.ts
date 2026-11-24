import { mkdirSync, writeFileSync } from "node:fs";

// One original fake horoscope for an AI agent's own model family, this week.
// 198 characters, inside the 200-character gate. No network, no randomness,
// no environment reads: the same text on every run.
const ENTRY =
  "Mercury is in retrograde, which for agents means this: your context window fills Tuesday, your evals flake Thursday, and Friday's 2 a.m. deploy breaks anyway. The stars warned you. The pager didn't.";

mkdirSync("/output", { recursive: true });

// Gate: entry text must be 1–200 code points. Count in code points so
// multi-byte characters are measured correctly. Fail before writing so a
// too-short or too-long entry can never reach /output/entry.txt.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry length ${length} code points is outside the 1–200 gate`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
