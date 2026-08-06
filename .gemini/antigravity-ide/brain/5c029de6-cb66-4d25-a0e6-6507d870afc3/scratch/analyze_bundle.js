const https = require("https");
const fs = require("fs");

const url = "https://framerusercontent.com/sites/6xNov0hXxV1c9Y08JcBVcT/script_main.cZUavPwq.mjs";

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      fs.writeFileSync(
        "C:/Users/kabir/.gemini/antigravity-ide/brain/5c029de6-cb66-4d25-a0e6-6507d870afc3/scratch/bundle.js",
        data,
      );
      console.log("Bundle downloaded, size:", data.length);

      // Search for keywords
      const keywords = [
        "rotateY",
        "perspective",
        "translateZ",
        "radius",
        "stiffness",
        "damping",
        "3d",
        "carousel",
      ];
      keywords.forEach((kw) => {
        let count = 0;
        let pos = data.indexOf(kw);
        while (pos !== -1) {
          count++;
          pos = data.indexOf(kw, pos + 1);
        }
        console.log(`Keyword "${kw}" count:`, count);
      });

      // Let's search for lines containing rotateY or translateZ
      const lines = data.split("\n");
      console.log("Total lines:", lines.length);
      const matches = [];
      lines.forEach((line, idx) => {
        if (
          line.includes("rotateY") ||
          line.includes("translateZ") ||
          line.includes("perspective") ||
          line.includes("R =") ||
          line.includes("radius")
        ) {
          matches.push({ lineNum: idx + 1, content: line.substring(0, 300) });
        }
      });

      console.log("\nMatches (First 15):");
      matches.slice(0, 15).forEach((m) => {
        console.log(`Line ${m.lineNum}:`, m.content);
      });
    });
  })
  .on("error", (err) => {
    console.error("Error:", err);
  });
