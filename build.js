/*
 * dirt simple build script to inject my md files into the about page
 */

const fs = require('fs');
const MarkdownIt = require('markdown-it');

const md = new MarkdownIt();
let html = fs.readFileSync('src/about-template.html', 'utf8');

// convert markdown files
const aboutHtml = md.render(fs.readFileSync('src/about.md', 'utf8'));

// replace placeholders
html = html.replace('{{ about }}', aboutHtml);

fs.writeFileSync('about/index.html', html);
