# Day 01: Not Quite Lisp

📅 [Puzzle link](https://adventofcode.com/2015/day/1)

## 🧩 Problem Summary

Santa is trying to deliver presents in a building with many floors.  
Each `(` means going up one floor, and each `)` means going down one floor.  
We start at floor 0.

**Part 1**: What floor do we end up on after processing the entire string?  
**Part 2**: When does Santa first enter the basement (floor -1)?

---

## 🧠 My Approach

- Read input as a string
- Loop through each character:
  - Add `+1` for `(`, `-1` for `)`
- For Part 2, track the position where we reach floor -1

---

## 🛠️ Tools Used

- Language: **TypeScript**
- Run with: `npm run solve -- 2015 01`
- Run tests with `npm run test:file -- 2015/day01-not-quite-lisp/main.test.ts`
