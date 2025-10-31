# Day 06 – Probably a Fire Hazard

📌 [Link to the puzzle](https://adventofcode.com/2015/day/6)

## 🧩 Problem Summary

Santa is trying to defeat his neighbors in the annual holiday house decorating contest. He gives you a set of instructions to control a **1000×1000 grid of lights**.

There are **two parts**:

### Part 1:

Each light can be either **on** (`true`) or **off** (`false`).  
The instructions can be:

- `turn on`: turn on all lights in a rectangular range
- `turn off`: turn off all lights in a range
- `toggle`: switch lights (on → off, off → on)

At the end, count how many lights are on.

### Part 2:

The lights now have **a brightness level** (integer ≥ 0).

- `turn on` increases brightness by `+1`
- `turn off` decreases brightness by `-1` (but not below 0)
- `toggle` increases brightness by `+2`

Return the **total brightness** of all lights after applying all instructions.

---

## 🧠 My Approach

### Grid Setup

- For **Part 1**: I used a 2D array of `boolean`
- For **Part 2**: I used a 2D array of `number`

Each grid is initialized with 1000 rows and 1000 columns using `Array.from`.

---

### Instruction Parsing

- I used `instruction.match(/\d+/g)` to extract the four coordinates
- The action (`turn on`, `turn off`, `toggle`) is determined with `.startsWith(...)`

---

### Part 1:

- For each instruction, loop over all cells in the range
- Track each light's previous state (`before`)
- Apply the instruction
- If the light’s state changed, update a `countLightOn`

### Part 2:

- For each instruction, loop over all cells in the range
- Track each light's previous brightness (`previous`)
- Apply the instruction (`+1`, `-1` but not below 0, or `+2`)
- Calculate the change: `updated - previous`
- Add that difference to `totalBrightness` immediately

## ✅ What I Learned

- Writing `count = condition ? count++ : count--` doesn't work as expected.  
  The `count++` and `count--` expressions return the **original value** before the increment/decrement, and the assignment (`=`) overrides the result.
- `Array.fill(...)` creates multiple references when used with non-primitives (like arrays) — it's safer to use `Array.from(...).map(...)` to avoid shared references.
- Tracking the difference between `previous` and `updated` values is a clean way to update counters (like `totalBrightness`) without re-scanning the entire grid.
- It's often possible to simplify and condense `for` loops, for example by removing repeated logic or extracting condition checks outside the inner loops.
- Writing concise code helps readability, but not at the expense of clarity — it’s all about finding the right balance.

🚀 Run the Script

```bash
npm run solve -- 2015 06
```

🧪 Run the Tests

```bash
npm run test:file -- 2015/day06-probably-a-fire-hazard/main.test.ts
```
