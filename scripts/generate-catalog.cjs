const fs = require('fs');
const path = require('path');

const index = JSON.parse(fs.readFileSync('public/qr-codes/index.json', 'utf8'));

let html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>WI² Print Campaign — Vector QR Codes Catalog</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #060810; color: #fff; margin: 0; padding: 36px; }
    .header { max-width: 1200px; margin: 0 auto 30px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 24px; }
    h1 { font-size: 24px; margin: 0; color: #fff; }
    p { color: #94a3b8; font-size: 13px; margin: 6px 0 0; }
    .download-btn { background: #00a5a5; color: #fff; text-decoration: none; padding: 12px 24px; border-radius: 8px; font-weight: 700; font-size: 14px; display: inline-block; transition: background 0.2s; }
    .download-btn:hover { background: #33c1bf; }
    .grid { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px; }
    .card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 20px; text-align: center; }
    .qr-box { background: #fff; padding: 12px; border-radius: 8px; width: 140px; height: 140px; margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; }
    .qr-box img { width: 100%; height: 100%; display: block; }
    .id-tag { display: inline-block; background: rgba(0,165,165,0.2); color: #33c1bf; font-weight: 800; font-size: 11px; padding: 3px 10px; border-radius: 20px; margin-bottom: 8px; }
    .name { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 3px; }
    .company { font-size: 13px; color: #94a3b8; margin-bottom: 3px; }
    .role { font-size: 11px; color: #64748b; margin-bottom: 10px; }
    .url { font-size: 11px; font-family: monospace; color: #33c1bf; word-break: break-all; }
    @media print {
      body { background: #fff; color: #000; padding: 0; }
      .header, .download-btn { display: none; }
      .grid { grid-template-columns: repeat(3, 1fr); gap: 15px; }
      .card { border: 1px solid #ccc; break-inside: avoid; background: #fff; color: #000; box-shadow: none; }
      .name, .company, .role, .url { color: #000 !important; }
      .id-tag { border: 1px solid #00a5a5; color: #00a5a5; background: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1>WI² Print Campaign — Vector QR Codes</h1>
      <p>77 Recipient-Specific Vector SVG QR Codes for Direct Mail Letters</p>
    </div>
    <div>
      <a href="/wi2-vector-qr-codes.zip" class="download-btn" download>Download All SVGs (.zip)</a>
    </div>
  </div>
  <div class="grid">
`;

for (const item of index) {
  html += `    <div class="card">
      <div class="id-tag">ID: ${item.id}</div>
      <div class="qr-box">
        <img src="/qr-codes/${item.fileName}" alt="QR ${item.id}">
      </div>
      <div class="name">${item.name || 'Recipient'}</div>
      <div class="company">${item.company || ''}</div>
      <div class="role">${item.role || ''}</div>
      <div class="url">${item.url}</div>
    </div>
`;
}

html += `  </div>
</body>
</html>`;

fs.writeFileSync('public/qr-codes/preview.html', html, 'utf8');
console.log('Created public/qr-codes/preview.html');
