const fs = require("fs");
const content = fs.readFileSync(
  "C:/Users/kabir/OneDrive/Desktop/Ambesh-Website/.gemini/antigravity-ide/brain/5c029de6-cb66-4d25-a0e6-6507d870afc3/scratch/shared_lib.js",
  "utf8",
);
const lines = content.split("\n");

// Line 11 context (which is line 10 in 0-indexed array)
console.log("Line 11 length:", lines[10].length);

// Let's print segments of line 11 containing rotateY or mapping
const line = lines[10];
let lastPos = 0;
let pos = line.indexOf("t.slice(0,v).map((e,t)");
if (pos === -1) pos = line.indexOf("rotateY");

console.log(
  "Context:\n",
  line.substring(Math.max(0, pos - 200), Math.min(line.length, pos + 2000)),
);
