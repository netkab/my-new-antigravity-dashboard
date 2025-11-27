import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { transformSync } from 'esbuild';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, 'docs', 'index.html');
const contentPath = path.join(__dirname, 'src', 'content.ts');

const loadContent = () => {
    const source = fs.readFileSync(contentPath, 'utf8');
    const { code } = transformSync(source, {
        loader: 'ts',
        format: 'cjs',
        target: 'es2019'
    });
    const module = { exports: {} };
    const req = () => {
        throw new Error('Dynamic imports are not supported when hydrating content.');
    };
    const fn = new Function('require', 'module', 'exports', code);
    fn(req, module, module.exports);
    return module.exports.content;
};

const hydrateStaticHtml = (html, hydratedContent) => {
    const replacements = [
        { target: '<title></title>', replacement: `<title>${hydratedContent.metaTitle}</title>` },
        { target: '<aside class="sidebar"></aside>', replacement: `<aside class="sidebar">${hydratedContent.sidebar}</aside>` },
        { target: '<div id="live-incidents" class="tab-content active"></div>', replacement: `<div id="live-incidents" class="tab-content active">${hydratedContent.tabs.liveIncidents}</div>` },
        { target: '<div id="performance" class="tab-content"></div>', replacement: `<div id="performance" class="tab-content">${hydratedContent.tabs.performance}</div>` },
        { target: '<div id="strategy" class="tab-content"></div>', replacement: `<div id="strategy" class="tab-content">${hydratedContent.tabs.strategy}</div>` },
        { target: '<div id="investigation" class="tab-content"></div>', replacement: `<div id="investigation" class="tab-content">${hydratedContent.tabs.investigation}</div>` }
    ];

    let updated = html;
    replacements.forEach(({ target, replacement }) => {
        updated = updated.replace(target, replacement);
    });
    return updated;
};

try {
    const appContent = loadContent();
    let html = fs.readFileSync(indexPath, 'utf8');

    html = hydrateStaticHtml(html, appContent);

    // Remove type="module"
    html = html.replace(/type="module"/g, '');

    // Remove crossorigin
    html = html.replace(/crossorigin/g, '');

    // Fix emoji encoding issues
    html = html.replace(/ÔÜí/g, '⚡');
    html = html.replace(/­ƒôê/g, '📈');
    html = html.replace(/ÔÜÖ´©Å/g, '⚙️');
    html = html.replace(/­ƒæÑ/g, '👥');

    // Fix chevron/triangle characters
    html = html.replace(/Ôû╝/g, '▼');
    html = html.replace(/ÔûÂ/g, '▶');

    // Fix additional emojis
    html = html.replace(/­ƒòÆ/g, '🕒');
    html = html.replace(/Ô£¿/g, '✨');
    html = html.replace(/­ƒøí´©Å/g, '🛡️');

    fs.writeFileSync(indexPath, html, 'utf8');
    console.log('Successfully patched docs/index.html for local execution.');
} catch (err) {
    console.error('Error patching docs/index.html:', err);
    process.exit(1);
}
