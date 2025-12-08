# Day 05 – Cafeteria

[Puzzle](https://adventofcode.com/2025/day/5)

---

## Problem Summary

The Elves’ inventory database contains two sections:

1. a list of fresh ingredient ID ranges,
2. a list of available ingredient IDs.

An ingredient is considered **fresh** if its ID falls within **any** of the listed ranges.  
Part 1 asks how many available IDs are fresh.  
Part 2 asks how many **unique IDs** are covered by the fresh ranges, ignoring the available list.

---

## Shared Rules

- The first block contains ID ranges in the form `start-end`.
- A blank line separates the ranges from the list of ingredient IDs.
- Ranges may overlap; overlapping or nested intervals must be merged.
- All ranges are inclusive.

---

## Part 1 — Description

Determine how many IDs from the available list are considered fresh.

### Approach

- Parse each range into a `[start, end]` numeric interval.
- For each available ID, check if it falls inside any range.
- Count how many IDs match at least one range.

### Result

**Part 1:** 661

---

## Part 2 — Description

Compute the total number of **distinct** ingredient IDs covered by the fresh ranges alone.

### Approach

- Parse and sort all ranges by starting value.
- Merge overlapping ranges to avoid counting IDs twice.
- For each merged interval, compute `end - start + 1`.
- Sum these values to get the final count.

### Result

**Part 2:** 359526404143208

---

## Implementation Notes

- Using `.some()` expresses “ID is fresh if it belongs to at least one range.”
- Interval merging ensures correctness when ranges overlap.
- Tuple types (`[start, end]`) make range handling safer and clearer.

---

## What I Learned

- Interval merging is essential to avoid double-counting.
- Clean separation between parsing, checking, and merging improves clarity.
- Array methods like `map`, `some`, and `reduce` lead to idiomatic, concise TypeScript.

---

## Usage

Run:

```bash
npm run solve -- 2025 05
```

Test:

```bash
npm run test:file -- 2025/day05-cafeteria/main.test.ts
```

# Merge Intervals — Notes

The _merge intervals_ algorithm is used to combine overlapping numeric ranges into a minimal list of non-overlapping intervals.

## Why we need it

If two ranges overlap, counting them separately leads to duplicates.  
Merging them gives the true set of unique covered values.

Example:
Ranges: [10,14], [12,18], [16,20]  
All overlap → become one range: [10,20].

## The algorithm (simple version)

1. Parse all ranges as `[start, end]`.
2. Sort them by `start`.
3. Start a `merged` list with the first interval.
4. For each next interval:
   - If it overlaps the last merged interval → extend the last interval.
   - Otherwise → add it as a new interval.

Overlap rule:  
`current.start <= last.end`

## Result

The final merged intervals cover all values without double-counting.

## Complexity

O(n log n) because of sorting, then O(n) to merge.

## Summary

**Sort intervals, then scan and merge overlaps.**
