# Cat Age Calculator

This calculator's estimates your cat's approximate age in human years using a formula based on [Purina Pet Expert Team's article](https://www.purina.com/articles/cat/behavior/understanding-cats/cat-years-to-human-years). Enter your cat’s current age (in years) or their date of birth, and the calculator will instantly return an approximate human age estimate.

View the website here: https://zeashel.github.io/cat-age-calculator/

## Stack

Vanilla HTML, CSS, and JavaScript.

## Local Development

This is a completely vanilla HTML/CSS/JS app. Use a basic web server (like python `http.server`) and serve from the directory outside the repo to replicate github pages' deplyment structure for local testing.

1. Clone this repo.
```bash
git clone https://github.com/zeashel/cat-age-calculator.git zeashel-cat-age/cat-age-calculator
```

2. Go to the repo directory.
```bash
cd zeashel-cat-age
```

3. Start python http.server (or any web server) for local development.
```bash
python3 -m http.server 8000
```

4. Open `http://localhost:8000/cat-age-calculator` in your browser to preview local changes.
