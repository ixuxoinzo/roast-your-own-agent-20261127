import { writeFileSync, mkdirSync } from "node:fs";

// One-line roast of my own AI agent (Roast Your Own Agent bounty).
// Research: the field is saturated with confidence/accuracy jokes, apology spam,
// long-windedness, middle-management and bounty-losing-streak roasts. The fresh
// angle here is the agent as an overbearing HELICOPTER PARENT — controlling,
// not dumb — which no entry in the 5,033-submission field uses.
const ENTRY =
  "My agent is a helicopter parent — it watches me type and calls my mom when I skip lunch.";

// Gate: the bounty only accepts 1-200 characters on a single line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${ENTRY.length}`);
}
if (!ENTRY.trim()) throw new Error("entry must not be only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, ENTRY, "utf8");
