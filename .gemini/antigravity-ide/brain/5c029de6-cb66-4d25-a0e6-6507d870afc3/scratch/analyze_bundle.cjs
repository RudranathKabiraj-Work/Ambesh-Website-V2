const https = require('https');
const fs = require('fs');

const url = 'https://framerusercontent.com/sites/6xNov0hXxV1c9Y08JcBVcT/script_main.cZUavPwq.mjs';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('C:/Users/kabir/OneDrive/Desktop/Ambesh-Website/.gemini/antigravity-ide/brain/5c029de6-cb66-4d25-a0e6-6507d870afc3/scratch/bundle.js', data);
    console.log('Bundle downloaded, size:', data.length);
    
    // Find script components
    const lines = data.split('\n');
    console.log('Total lines:', lines.length);
    const matches = [];
    lines.forEach((line, idx) => {
      if (line.includes('rotateY') || line.includes('translateZ') || line.includes('perspective') || line.includes('radius')) {
        matches.push({ lineNum: idx + 1, content: line.substring(0, 300) });
      }
    });

    console.log('\nMatches (First 30):');
    matches.slice(0, 30).forEach(m => {
      console.log(`Line ${m.lineNum}:`, m.content.substring(0, 150));
    });
  });
}).on('error', (err) => {
  console.error('Error:', err);
});
