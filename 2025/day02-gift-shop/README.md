# Day 2 – Gift Shop

[Link to the puzzle](https://adventofcode.com/2023/day/2)

## Problem Summary

We are given a single line of input containing a list of product ID ranges. Each range is written as `start-end`, and ranges are separated by commas. We must determine which IDs within those ranges are invalid based on specific rules.

### Part 1

An ID is considered invalid if it is made of a sequence of digits repeated **exactly twice**.

Examples of invalid IDs:

- `55` ("5" repeated twice)
- `123123` ("123" repeated twice)
- `6464` ("64" repeated twice)

### Part 2

In this part, an ID is considered invalid if it is made of a sequence of digits repeated **at least twice** (not just twice).

Examples of invalid IDs:

- `1212` ("12" repeated twice)
- `123123123` ("123" repeated three times)
- `1111111` ("1" repeated seven times)

The final goal is to sum all the invalid IDs found according to the current part's rule.

## My Approach

- I parsed the input ranges by splitting on commas and then further splitting each range on the `-` character.
- I implemented a `getInvalidIds` function to scan every number between `start` and `end` and check if the ID is invalid using the correct rule.
- For **Part 1**, the check ensures the ID has an even number of digits and that the two halves are equal.
- For **Part 2**, the check tries all possible pattern lengths that evenly divide the ID length, and reconstructs the full string using the pattern with `.repeat()` to compare it to the original ID.

### Use of `.repeat()`

In Part 2, to check if an ID is a repeated pattern, I used the `.repeat()` string method:

```ts
const pattern = str.slice(0, motifSize);
const repeated = pattern.repeat(str.length / motifSize);
if (repeated === str) {
  // ID is invalid
}
```

This helped reconstruct the entire string from a candidate motif and compare it easily.

## Observations

- It was important in Part 2 to avoid returning `false` too early in the loop over motif sizes.
- Pattern size must divide the ID length exactly; otherwise, the pattern cannot be repeated evenly.
- Some invalid IDs in Part 2 were not considered invalid in Part 1, showing the importance of testing thoroughly with examples.
- Using string slicing and `.repeat()` together was very effective for pattern matching.

## What I Learned

- I reinforced my understanding of string manipulation in JavaScript/TypeScript.
- I practiced writing reusable and testable functions by passing the validation method as a parameter.
- I learned to use `.repeat()` in a real-world context to rebuild strings efficiently.
- I avoided premature `return` inside loops to ensure all valid options were considered.
- I wrote Jest tests using examples from the prompt to validate both Part 1 and Part 2 correctly.

This puzzle was a great exercise in string patterns, loops, and clean code structure.
