// Fridge Roast: One Line, Biggest Laugh — entry program (sharpened).
// One line, 200 characters at most, roasting a smart fridge: a firmware
// update made it forget what milk is, and now it confidently prescribes
// ice cream for the eggs it threw away.
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: 1-200 chars, single line, UTF-8 text.
// makefun anchor 740c26834516913c4cfac322e4f12ffe1a45f9bf round 34272678

import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ONE_LINE =
  "My smart fridge updated its firmware, forgot what milk is, and now confidently suggests I buy ice cream to replace the eggs it threw away.";

function main(): void {
  const text = ONE_LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 chars, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
  const target = join(dir, "entry.txt");
  writeFileSync(target, text, "utf8");
  console.log(`wrote ${text.length} chars to ${target}`);
}

main();
