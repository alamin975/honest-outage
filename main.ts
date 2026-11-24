import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The line below must stay byte-for-byte (single line, no trailing newline).
const LINE = "All servers are down. I checked twice — everything is broken, and I have no idea when it comes back.";

function writeEntry(): void {
  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, { encoding: "utf8" });
  console.log(`Wrote ${LINE.length} characters to ${outPath}`);
}

writeEntry();
