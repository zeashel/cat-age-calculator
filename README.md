# Cat Age Calculator

This calculator's estimates your cat's approximate age in human years using a formula based on [Purina Pet Expert Team's article](https://www.purina.com/articles/cat/behavior/understanding-cats/cat-years-to-human-years). Enter your cat’s current age (in years) or their date of birth, and the calculator will instantly return an approximate human age estimate.

View the website here: https://zeashel.github.io/cat-age-calculator/

## Stack

- Vanilla HTML, CSS, and JavaScript. 
- `markdown-it` in a very simple `build.js` for converting markdown to HTML. 

The overhead of an SSG was not needed due to the simplicity and minimalism of this site.

## Local Development

### Prerequisites

This is a completely vanilla HTML/CSS/JS app but for ease of testing and building, node and a basic web server (like python `http.server`) is needed.

-   [Node.js](https://nodejs.org/)
-   [pnpm](https://pnpm.io/installation) (though npm should work fine too)
-   python `http.server` that comes with python (or any similar web server)

### Running

1. Clone this repo.
```bash
git clone https://github.com/zeashel/cat-age-calculator.git
```

2. Go to the repo directory.
```bash
cd cat-age-calculator
```

3. Start the dev script to get nodemon to watch the `src/` directory and run build.js at every file change (only if doing edits to the about page).
```bash
pnpm dev
```

4. Start python http.server (or any web server) for local development.
```bash
python3 -m http.server 8000
```

4. Open `http://localhost:8000/` in your browser to preview local changes.
