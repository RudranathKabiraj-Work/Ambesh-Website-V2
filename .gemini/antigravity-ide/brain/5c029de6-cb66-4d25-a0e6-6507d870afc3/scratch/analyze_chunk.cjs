const https = require("https");
const fs = require("fs");

const url =
  "https://framerusercontent.com/sites/6xNov0hXxV1c9Y08JcBVcT/R2ifGy0AYaaNkf-u4gPZWG8Ycn7s_9KANb3Q8v5XN1U.BPhVP8Re.mjs";

https
  .get(url, (res) => {
    let data = "";
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      fs.writeFileSync(
        "C:/Users/kabir/OneDrive/Desktop/Ambesh-Website/.gemini/antigravity-ide/brain/5c029de6-cb66-4d25-a0e6-6507d870afc3/scratch/page_chunk.js",
        data,
      );
      console.log("Page chunk downloaded, size:", data.length);

      // Find script components
      const lines = data.split("\n");
      console.log("Total lines:", lines.length);
      const matches = [];
      lines.forEach((line, idx) => {
        if (
          line.includes("rotateY") ||
          line.includes("translateZ") ||
          line.includes("perspective") ||
          line.includes("3d") ||
          line.includes("radius")
        ) {
          matches.push({ lineNum: idx + 1, content: line });
        }
      });

      console.log("\nMatches count:", matches.length);
      matches.slice(0, 50).forEach((m) => {
        // Print context of match
        console.log(`\nLine ${m.lineNum}:`);
        let pos = m.content.indexOf("rotateY");
        if (pos === -1) pos = m.content.indexOf("translateZ");
        if (pos === -1) pos = m.content.indexOf("perspective");
        if (pos === -1) pos = 0;

        const start = Math.max(0, pos - 150);
        const end = Math.min(m.content.length, pos + 250);
        console.log(m.content.substring(start, end));
      });
    });
  })
  .on("error", (err) => {
    console.error("Error:", err);
  });
