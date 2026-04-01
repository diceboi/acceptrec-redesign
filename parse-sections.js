const fs = require('fs');
const html = fs.readFileSync('raw-onsite-check.html', 'utf8');

// Match sections to understand structure
const sectionRegex = /<section[^>]*>([\s\S]*?)<\/section>/g;
let match;
let count = 1;
while ((match = sectionRegex.exec(html)) !== null) {
  let innerHtml = match[1];
  let headings = [...innerHtml.matchAll(/<(h1|h2|h3)[^>]*>(.*?)<\/\1>/g)].map(m => m[2].replace(/<[^>]+>/g, '').trim());
  let texts = [...innerHtml.matchAll(/<p[^>]*>(.*?)<\/p>/g)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  
  console.log(`\n=== Section ${count} ===`);
  console.log('Headings:', headings);
  console.log('Paragraphs:', texts.slice(0, 3), texts.length > 3 ? '...' : '');
  count++;
}
