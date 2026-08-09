According to [Purina's Pet Expert Team](https://www.purina.com/articles/cat/behavior/understanding-cats/cat-years-to-human-years), "*...first year of your cat's life is considered the equivalent of 15 human years. The second year adds nine more human years, so 2 cat years are approximately 24 human years. After this, each additional human year is four “cat years” i.e., age 3 will be 28 human years.*"

So we can deduce that:

-   1 year old cat = 15 in human years
-   2 year old cat = 24 in human years
-   3 year old cat = `24 + 4` = `28`
-   4 year old cat = `24 + 4 + 4` = `32`
-   5 year old cat = `24 + 4 + 4 + 4` = `36`
-   and so on.

### Cats aged 2 and above

To simplify the addition of 4 in years subsequent 2 years, we can make the following function. Let's say `x` is the cat's age: `f(x) = 24 + 4 * (x - 2)` We subtract x (the cat's age) by 2 because 24 already accounts for the first two years of the cat's age.

We can simplify further to:

```
f(x) = 24 + 4 * (x - 2)
f(x) = 24 + 4x - 8
f(x) = 16 + 4x
```

Now we can test `x >= 2: f(x) = 16 + 4x` (only for years 2 and above):

- `f(3) = 16 + 4 * 3 = 28` 
- `f(5) = 16 + 4 * 5 = 36`
- `f(13) = 16 + 4 * 13 = 68`

This also accounts for 2 year old cats since the function is derived from 2 cat years = 24 human years:

- `f(2) = 16 + 4 * 2 = 24`

This is why we define it as `x >= 2` instead of `x > 2`. This function also works with precise decimals:

- `f(2.5) = 16 + 4 * 2.5 = 26` (for example, your cat is 2 years and 6 months old)

Looks good!

`f(x) = 16 + 4x` is the formula I implemented in the JavaScript function `calcCatToHumanAge(catAge)`:

# TEMP


### Cats aged 0 to 1

So the next question is, how do we determine the cat's human age if they're between 0 to 1 years old (`0 <= x <= 1`), or between 1 and 2 years old (`1 <= x <= 2`)? For instance, your cat is 6 months old (0.5 years) and you'd like to determine their approximate age.

Well, for `0 <= x <= 1`, it's quite easy because we know 1 cat year = 15 human years. And 0 cat years is obviously equal to 0 human years, so we can deduce:

```
g(0) = 0 ... g(1) = 15
g(x) = 15x
```

In JavaScript:

# TEMP

### Cats aged 1 to 2

For cat years `1 <= x <= 2`, we have 2 reference points once more:

- 1 cat year = 15 human years
- 2 cat years = 24 human years

```
h(1) = 15 ... h(2) = 24

h(x) = 15 + (9 * (x - 1))

```
