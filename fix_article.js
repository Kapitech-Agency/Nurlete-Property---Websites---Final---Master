import fs from 'fs';

let p = './src/app/pages/ArticleDetail.tsx';
let txt = fs.readFileSync(p, 'utf-8');

txt = txt.replace(/\/\/\s*ArrowRight needed for the footer\s*import\s+\{\s*ArrowRight\s*\}\s*from\s*'lucide-react';/g, '');

fs.writeFileSync(p, txt, 'utf-8');
console.log('Fixed ArticleDetail');
