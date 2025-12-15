# Day 06 – Trash Compactor

[Puzzle](https://adventofcode.com/2023/day/6)

---

## Problem Summary

You fall into a garbage smasher and find a strange cephalopod math worksheet.  
Each "problem" consists of numbers arranged **vertically** in columns, with an **operator (`+` or `*`) at the bottom**.  
In **Part 1**, you read the problems vertically (top to bottom), left to right.  
In **Part 2**, cephalopod math is actually read **column by column from right to left**, digit by digit (top = most significant).

---

## Shared Rules

- Each number is formed vertically in a column.
- Operator (`+` or `*`) is always at the bottom row of the column.
- Columns of spaces separate each problem.
- In Part 2, numbers are built digit by digit from top to bottom.

---

## Part 1 — Description

The goal is to compute each problem's result and return the sum of all problems.

### Approach

- Parse each row into tokens using `split(/\s+/)`.
- Transpose the 2D array so that each column becomes a row.
- Apply the operation (either `+` or `*`) at the bottom of each column.
- Sum all problem results.

### Result

**Part 1: `5381996914800`**

---

## Part 2 — Description

The worksheet is actually meant to be read _column by column, right to left_, digit by digit.
Each digit in a column represents a position (top = highest digit).
Problems are still separated by blank columns.

### Approach

- Read the grid character by character (keeping all spacing).
- From right to left, for each column:
  - Collect digits from the top to just before the last line.
  - Detect the operator at the last line.
  - Reconstruct each full number (by column), per problem.
- Evaluate each problem (`+` or `*`).
- Sum the results.

### Result

**Part 2: `3263827`**

---

## Implementation Notes

- Used `transpose()` helper for part 1.
- Used `extractProblemsPart2()` to read columns properly in part 2.
- Wrote pure functions: `evaluateProblem`, `isDigit`, `isValidOperator`.
- Fully test-covered using **Jest** with example input from the problem.

---

## What I Learned

- Parsing visually aligned data can require attention to **spacing**.
- Transposing matrices is a powerful technique for orientation-based parsing.
- Always test your parsing with **raw example input**, especially if spacing is important.
- Writing helpers and testable logic makes the puzzle much easier to debug and test.

---

## Usage

```bash
npm run solve -- 2023 6
```

```bash
npm run test -- 2023 6
```
