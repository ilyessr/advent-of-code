# Day 01 – Secret Entrance

[Link to the puzzle](https://adventofcode.com/2025/day/1)

## Problem Summary

We turn a dial with positions `0` to `99`, starting at `50`. Each instruction looks like `R10` or `L37` and moves the dial clockwise or counter-clockwise.

- Part 1: count how many instructions leave the dial exactly on `0`.
- Part 2: a new method counts every time the dial passes through `0` during a move (including if it stops there).

## My Approach

- Parse each instruction into a signed rotation: right is positive, left is negative.
- Keep the dial position in `[0, 99]` with a normalize helper (`((x % 100) + 100) % 100`).
- Part 1: after each rotation, check if the raw position is a multiple of 100 to see if we land on `0`.
- Part 2: for right turns, `floor((pos + rotation) / 100)` gives the number of zeros crossed; for left turns, count how far we go past `0` and adjust if we end exactly on `0` to avoid double-counting.

## Observations

- The dial size (100) and start (50) are fixed, so everything can stay in integers.
- Negative modulo in JS is tricky; normalize before storing the new position.
- Left turns that overshoot the starting position need careful zero-counting to avoid off-by-one.

## What I Learned

- Normalizing with `((x % N) + N) % N` ensures the result is always positive, even for negative values.
- It's better to separate logical counting (e.g. raw overflows, multiples of 100) from state tracking (e.g. normalized position on the dial).
