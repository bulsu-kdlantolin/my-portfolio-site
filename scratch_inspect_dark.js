const fs = require('fs');
const css = fs.readFileSync('ref_styles.css', 'utf8');

const regex = /\[data-theme=["']?dark["']?\]\s*\{([^}]+)\}/g;
let match;
while ((match = regex.exec(css)) !== null) {
  console.log('--- DARK THEME BLOCK ---');
  console.log(match[1]);
}
