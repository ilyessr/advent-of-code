# Day 04 – Printing Department

[Puzzle](https://adventofcode.com/2025/day/4)

Paper rolls (`@`) sit on a grid. A roll is **accessible** if it has fewer than 4 neighboring `@` rolls across the 8 directions (diagonals included).

## Shared rules
- Grid is a mutable `string[][]`.
- Neighbors come from a fixed list of 8 direction offsets.
- Accessibility = count adjacent `@` and check `< 4`.

## Part 1 — Initial accessible rolls
- Scan every cell.
- If it is `@` and accessible, increment the total.
- Return how many rolls are accessible in the original grid.

## Part 2 — Removal waves
- Loop until stable:
  1) Collect all accessible `@`.
  2) Replace them with `.` in a grid copy.
- Return the total number of rolls removed.

## Implementation notes (see `main.ts`)
- Direction array keeps neighbor logic declarative.
- Defensive copy: `const grid = originalGrid.map(row => [...row]);`
- Detect first, mutate after to avoid mid-iteration bias.

## Current results
- Part 1: 13
- Part 2: 43

## What I learned
- Separating detection from mutation prevents mid-loop bias.
- Direction arrays keep neighbor traversal compact and reusable.
- Copying with `map(row => [...row])` is a quick, readable deep copy for mutable grids.

## Usage
- Run: `npm run solve -- 2025 04`
- Test: `npm run test:file -- 2025/day04-printing-department/main.test.ts`
