# Day 3: Perfectly Spherical Houses in a Vacuum

📌 [Link to the puzzle](https://adventofcode.com/2015/day/3)

---

## 🧩 Problem Summary

### Part 1 – Santa's Solo Journey

Santa delivers presents on an **infinite 2D grid**.  
He starts at `(0, 0)` and follows a list of movement instructions:

- `^` → north (+y)
- `v` → south (–y)
- `>` → east (+x)
- `<` → west (–x)

At every step (including the starting point), Santa delivers one present to the house he’s currently on.

We need to determine how many **unique houses** receive **at least one present**.

Example:  
`>` → 2 houses  
`^>v<` → 4 houses  
`^v^v^v^v^v` → 2 houses (just two very lucky kids)

#### 🧠 My Approach (Part 1)

- Use a `Set<string>` to track visited house coordinates (`"x,y"`)
- Initialize position at `[0, 0]` and add it to the set
- For each move:
  - Update the position according to the symbol
  - Add the new position to the set
- Return the size of the set (number of unique houses)

---

### Part 2 – Santa & Robo-Santa

Santa gets help from **Robo-Santa** 🤖.  
They both start at `(0, 0)` and take **turns** moving based on the same list of instructions.

Santa moves first, then Robo-Santa, and so on.

We need to find how many **unique houses** receive at least one present.

Example:  
`^v` → 3 houses  
`^>v<` → 3 houses  
`^v^v^v^v^v` → 11 houses

#### 🧠 My Approach (Part 2)

- Use a single shared `Set<string>` for visited houses
- Loop through the input string, alternating moves:
  - Even index → Santa moves
  - Odd index → Robo-Santa moves
- After each move, store the position in the set
- Return the number of unique entries in the set

---

## ✅ What I Learned

- Using `Set<string>` is perfect for tracking unique positions
- Be careful with global state — always isolate logic inside functions
- Sorting and destructuring arrays helps simplify code readability
