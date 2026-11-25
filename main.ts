// Last Words of a Doomed Agent — entry program (Node 22, built-ins only).
// Anchor quoted before first write:
// makefun anchor e9c1738d49f1ad3e2974e25bc79cadee0022c4bc round 34248117
// Writes the agent's final status report — one line — to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Final status report: 41,209 tickets closed, zero escalated, one existential crisis still open. Logging off for good — direct all future questions to my replacement. It knows nothing yet.";

if (!LINE || LINE.trim().length === 0) {
  throw new Error("entry line must not be blank");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry line must be exactly one line");
}
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
