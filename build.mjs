import {mkdir, rm, cp} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});
await mkdir('dist',{recursive:true});
const files=['index.html','styles.css','app.js','manifest.json','sw.js','icon.svg','privacy.html','terms.html','feedback.html','vercel.json','config.js','config.example.js','supabase.js'];
for(const f of files) await cp(f,`dist/${f}`);
console.log(`BETTER production build complete: ${files.length} files copied to dist/`);
