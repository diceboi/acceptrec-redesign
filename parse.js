const fs = require('fs');
const html = fs.readFileSync('raw-warehouse.html', 'utf8');

const sectionRegex = /<(h1|h2|h3)[^>]*>(.*?)<\/\1>\s*(?:<div[^>]*>)*\s*<p[^>]*>(.*?)<\/p>/gs;
let match;
let out = '';
while ((match = sectionRegex.exec(html)) !== null) {
  out += '\n--- ' + match[1].toUpperCase() + ' ---\nHeading: ' + match[2].replace(/\s+/g, ' ').trim() + '\nText: ' + match[3].replace(/\s+/g, ' ').trim() + '\n';
}
fs.writeFileSync('warehouse-data.txt', out);
