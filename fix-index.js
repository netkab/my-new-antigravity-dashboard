import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, 'docs', 'index.html');

try {
    let content = fs.readFileSync(indexPath, 'utf8');

    // Remove type="module"
    content = content.replace(/type="module"/g, '');

    // Remove crossorigin
    content = content.replace(/crossorigin/g, '');

    // Fix emoji encoding issues
    content = content.replace(/ÔÜí/g, '⚡');
    content = content.replace(/­ƒôê/g, '📈');
    content = content.replace(/ÔÜÖ´©Å/g, '⚙️');
    content = content.replace(/­ƒæÑ/g, '👥');

    // Fix chevron/triangle characters
    content = content.replace(/Ôû╝/g, '▼');
    content = content.replace(/ÔûÂ/g, '▶');

    // Fix additional emojis
    content = content.replace(/­ƒòÆ/g, '🕒');
    content = content.replace(/Ô£¿/g, '✨');
    content = content.replace(/­ƒøí´©Å/g, '🛡️');

    fs.writeFileSync(indexPath, content, 'utf8');
    console.log('Successfully patched docs/index.html for local execution.');
} catch (err) {
    console.error('Error patching docs/index.html:', err);
    process.exit(1);
}
