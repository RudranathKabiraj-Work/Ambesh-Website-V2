const fs = require("fs");
const content = fs.readFileSync(
  "C:/Users/kabir/OneDrive/Desktop/Ambesh-Website/.gemini/antigravity-ide/brain/5c029de6-cb66-4d25-a0e6-6507d870afc3/scratch/shared_lib.js",
  "utf8",
);

// Search for ae and i definition around line 11 (within first 20000 chars)
let pos = content.indexOf("d(b.div,{animate:{rotateY:te}");
console.log("Pos:", pos);

// Let's print the preceding 4000 characters before pos to see the calculations of ae, i, te
const context = content.substring(Math.max(0, pos - 4000), pos);
console.log("Preceding context:\n", context);
