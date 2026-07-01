const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Category.tsx',
  'src/pages/Checkout.tsx',
  'src/pages/ProductDetail.tsx',
  'src/pages/Cart.tsx',
  'src/pages/Compare.tsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace \` with `
    content = content.replace(/\\`/g, '`');
    // Replace \$ with $
    content = content.replace(/\\\$/g, '$');
    fs.writeFileSync(filePath, content);
    console.log('Fixed', file);
  }
});
