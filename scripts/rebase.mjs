// Solo para la vista previa en marythe-ux.github.io/ddsign-blog/.
// Si BASE_PATH está vacío (con el dominio ddsign.es) no hace nada.
import fs from 'node:fs';
import path from 'node:path';
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
if (!base) process.exit(0);
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
let n = 0;
for (const f of walk('dist')) {
  if (!/\.(html|css)$/.test(f)) continue;
  let s = fs.readFileSync(f, 'utf8');
  const out = s
    .replace(/(href|src|srcset|action)="\/(?!\/)/g, `$1="${base}/`)
    .replace(/url\((["']?)\/(?!\/)/g, `url($1${base}/`);
  if (out !== s) { fs.writeFileSync(f, out); n++; }
}
console.log(`rebase: ${n} archivos ajustados a ${base}/`);
