/*
 * dirt simple build script to inject my md files into the about page
 */

const fs = require('fs');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();
let html = fs.readFileSync('src/about-template.html', 'utf8');

const sections = ['about', 'privacy', 'toc'];

// find and replace placeholders
for (const section of sections) {
    // convert markdown files
    const aboutHtml = md.render(fs.readFileSync(`src/${section}.md`, 'utf8'));

    // replace placeholders
    html = html.replace(`{{ ${section} }}`, aboutHtml);
}

fs.writeFileSync('about/index.html', html);
