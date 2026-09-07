const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

async function run() {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/1h3Ise5tE7eWiBs3x8bsyNdJ8-yx7ZXgucQTf9jJUYCk/export?format=csv';
  console.log('Fetching live spreadsheet data from Google Sheets...');
  
  const res = await fetch(csvUrl);
  const csv = await res.text();
  
  const lines = csv.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  const headerIdx = lines.findIndex(l => l.startsWith('First Name,Last Name'));
  
  if (headerIdx === -1) {
    console.error('Could not find header in CSV!');
    return;
  }
  
  const dataLines = lines.slice(headerIdx + 1);
  console.log(`Found ${dataLines.length} recipient rows.`);

  const outDir = path.join(process.cwd(), 'public', 'qr-codes');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const index = [];

  for (let i = 0; i < dataLines.length; i++) {
    const line = dataLines[i];
    
    // Parse CSV row taking commas inside quotes into account
    const matches = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || line.split(',');
    const parts = matches.map(m => m.replace(/^"|"$/g, '').trim());
    
    const firstName = parts[0] || '';
    const lastName = parts[1] || '';
    const company = parts[2] || '';
    const role = parts[8] || '';
    
    const id = 100 + i;
    const url = `https://www.acceptrec.co.uk/c/${id}`;

    const safeCompany = company.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    const safeName = `${firstName}_${lastName}`.replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
    
    const fileName = `qr_${id}_${safeCompany}_${safeName}.svg`.replace(/__+/g, '_');
    const filePath = path.join(outDir, fileName);

    const svgContent = await QRCode.toString(url, {
      type: 'svg',
      errorCorrectionLevel: 'M',
      margin: 1,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    });

    fs.writeFileSync(filePath, svgContent, 'utf8');

    index.push({
      id,
      name: `${firstName} ${lastName}`.trim(),
      company,
      role,
      url,
      fileName,
      relativePath: `/qr-codes/${fileName}`,
    });
  }

  fs.writeFileSync(
    path.join(outDir, 'index.json'),
    JSON.stringify(index, null, 2),
    'utf8'
  );

  console.log(`Successfully generated ${index.length} vector SVG QR codes in ${outDir}`);
}

run().catch(err => {
  console.error('Error generating QR codes:', err);
  process.exit(1);
});
