# Day 7 – Laboratories

[Puzzle](https://adventofcode.com/2025/day/7)

---

## Problem Summary

A tachyon beam enters a manifold at position `S` and always moves downward.

- Empty cells (`.`) let the beam pass through.
- Splitters (`^`) stop the beam and emit two new beams: one to the left and one to the right.
- Beams continue until they exit the grid.

The goal is to analyze how beams split and propagate through the manifold.

---

## Shared Rules

- The beam always moves downward.
- Splitters create new paths.
- The grid is read line by line from top to bottom.
- Going outside the grid ends a beam or a timeline.

---

## Part 1 — Classical Manifold

### Description

In Part 1, all beams exist at the same time.
When multiple beams reach the same position, they merge.
Each splitter counts only once per position.

The task is to count how many times a beam is split in total.

### Approach

- Use **BFS (Breadth-First Search)**.
- Track visited positions to avoid counting the same splitter multiple times.
- Each `^` encountered increases the split count by 1.
- Continue until all beams exit the grid.

### Result

**Part 1:** `1546`

---

## Part 2 — Quantum Manifold

### Description

In Part 2, only **one particle** is sent.
At each splitter, **time itself splits**:

- One timeline goes left
- Another timeline goes right

Timelines never merge, even if they pass through the same cell.

The task is to count the **total number of possible timelines**.

### Approach

- Use **DFS (Depth-First Search)**.
- Each recursive call represents one possible timeline.
- When the particle exits the grid, it counts as **1 completed timeline**.
- Use **memoization** to avoid recomputing identical subproblems.
- Use `bigint` because the result is extremely large.

### Result

**Part 2:** `13883459503480`

---

## Implementation Notes

- BFS is used for Part 1 because paths can merge.
- DFS is required for Part 2 because timelines never merge.
- Memoization is critical to prevent exponential runtime.
- `bigint` is necessary to avoid number overflow.

---

## What I Learned

- The difference between exploring **positions** (BFS) and **paths** (DFS).
- Why `visited` cannot be used when histories matter.
- How memoization can make an exponential problem tractable.
- When and why `bigint` is required in JavaScript / TypeScript.

---

## Usage

Run the solution:

```bash
npm run solve -- 2025 07
```

Test the solution:

```bash
npm run solve -- 2025 07
```
