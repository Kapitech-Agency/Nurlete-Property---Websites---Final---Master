import fs from 'fs';

let p = './src/app/components/common/Footer.tsx';
let txt = fs.readFileSync(p, 'utf-8');

txt = txt.replace(/<Link to="\/" className="w-\[48px\] h-\[48px\]/g, '<a href="#" className="w-[48px] h-[48px]');
txt = txt.replace(/<\/Link>\s*<\/div>\s*<\/div>\s*{\/\* Site Map Column \*\//s, '</a></div></div>{/* Site Map Column */');

fs.writeFileSync(p, txt, 'utf-8');
console.log('Restored icons');
