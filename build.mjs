import { mkdir, copyFile, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');
await mkdir(join(out, 'assets'), { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js', 'house.js']) {
  await copyFile(join(root, file), join(out, file));
}
for (const file of await readdir(join(root, 'assets'))) {
  if (/\.(png|svg|ttf|js)$/.test(file) || file.startsWith('LICENSE-') || file === 'THIRD-PARTY.md') {
    await copyFile(join(root, 'assets', file), join(out, 'assets', file));
  }
}
console.log('Mezzocosm static site ready in dist/');
