const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'public', 'productos');

function renameRecursive(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Rename directory to be slug-friendly
      const newDirName = item.toLowerCase().replace(/\s+/g, '-');
      const newDirPath = path.join(dir, newDirName);
      
      if (fullPath !== newDirPath) {
        fs.renameSync(fullPath, newDirPath);
        renameRecursive(newDirPath);
      } else {
        renameRecursive(fullPath);
      }
    } else if (stat.isFile()) {
      // Rename file to be slug-friendly
      // CATALOGO EMBUTIDOS EL DRAGO 2026 (1)_page-0003.jpg -> page-0003.jpg
      const match = item.match(/page-(\d+)\.jpg/i);
      if (match) {
        const newFileName = `page-${match[1]}.jpg`;
        const newFilePath = path.join(dir, newFileName);
        fs.renameSync(fullPath, newFilePath);
      }
    }
  });
}

try {
  renameRecursive(baseDir);
  console.log('Renaming complete');
} catch (err) {
  console.error('Error during renaming:', err);
}
