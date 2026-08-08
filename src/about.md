This calculator's estimates your cat's approximate age in human years using a formula based on Purina Pet Expert Team's article. Enter your cat’s current age (in years) or their date of birth, and the calculator will instantly return an approximate human age estimate.

## How the formula was made

According to [Purina's Pet Expert Team](https://www.purina.com/articles/cat/behavior/understanding-cats/cat-years-to-human-years), "...first year of your cat's life is considered the equivalent of 15 human years. The second year adds nine more human years, so 2 cat years are approximately 24 human years. After this, each additional human year is four “cat years” i.e., age 3 will be 28 human years."

So we can deduce that:

-   1 year old cat = 15 in human years
-   2 year old cat = 24 in human years
-   3 year old cat = `24 + 4` = `28`
-   4 year old cat = `24 + 4 + 4` = `32`
-   5 year old cat = `24 + 4 + 4 + 4` = `36`
-   and so on.

To simplify the addition of 4 in years subsequent 2 years, we can make the following function. Let's say `x` is the cat's age: `f(x) = 24 + 4 * (x - 2)` We subtract x (the cat's age) by 2 because 24 already accounts for the first two years of the cat's age.

We can simplify further to:

```
f(x) = 24 + 4 * (x - 2)
f(x) = 24 + 4x - 8
f(x) = 16 + 4x
```

`f(x) = 16 + 4x` is the formula I implemented in the JavaScript function `calcCatToHumanAge(catAge)`:
