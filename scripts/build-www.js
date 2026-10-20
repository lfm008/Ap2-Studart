// Monta a pasta www/ (o que vai dentro do APK): copia os arquivos do app e
// junta + minifica todos os banco*.js em um único arquivo, para abrir mais rápido.
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..'), out = path.join(root, 'www');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
const copy = (n) => fs.cpSync(path.join(root, n), path.join(out, n), { recursive: true });
['fonts', 'icons', 'manifest.webmanifest', 'sw.js'].forEach(copy);

let html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const tag = /<script src="(banco[^"]*\.js)"><\/script>\n?/g;
const files = [...html.matchAll(tag)].map((m) => m[1]);
if (!files.length) throw new Error('nenhum <script src="banco*.js"> encontrado no index.html');
const code = files.map((f) => fs.readFileSync(path.join(root, f), 'utf8')).join('\n;\n');
let min = code;
(async () => {
  try {
    const r = await require('terser').minify(code, { compress: true, mangle: true });
    if (r.code) min = r.code;
  } catch (e) { console.warn('terser indisponível, usando o código sem minificar:', e.message); }
  fs.writeFileSync(path.join(out, 'banco.bundle.js'), min);
  html = html.replace(tag, '').replace('</body>', '<script src="banco.bundle.js"></script>\n</body>');
  fs.writeFileSync(path.join(out, 'index.html'), html);
  console.log(`www pronto: ${files.length} arquivos de dados -> banco.bundle.js (${(min.length / 1024).toFixed(0)} KB)`);
})();
