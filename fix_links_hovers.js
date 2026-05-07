import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (file) => {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) return;
  
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  // Fix href="#" -> to="/" with Link
  if (content.includes('<a href="#"')) {
    content = content.replace(/<a href="#"/g, '<Link to="/"');
    content = content.replace(/<\/a>/g, '<\/Link>');
    if (file.includes('Footer.tsx') && !content.includes('import { Link }')) {
      // it already has import Link
    }
  }

  // Hover states for CTA buttons
  // Find hover:bg-black or hover:bg-[#000000] and switch to Deep Earthy Brown [#3C2A21]
  // if it's currently bg-[#000000] class, and it has hover:bg-...
  content = content.replace(/hover:bg-black\/80/g, 'hover:bg-[#3C2A21]');
  content = content.replace(/hover:bg-black/g, 'hover:bg-[#3C2A21]');
  content = content.replace(/hover:bg-\[\#000000\]\/80/g, 'hover:bg-[#3C2A21]');
  content = content.replace(/hover:bg-\[\#000000\]\b/g, 'hover:bg-[#3C2A21]');
  content = content.replace(/group-hover:bg-\[\#000000\]\b/g, 'group-hover:bg-[#3C2A21]');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log('Updated', file);
  }
});
