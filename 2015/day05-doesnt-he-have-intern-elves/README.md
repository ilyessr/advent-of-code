# Day 05 – Doesn't He Have Intern-Elves For This?

📌 [Link to the puzzle](https://adventofcode.com/2015/day/5)

## 🧩 Problem Summary

Santa has asked his intern-elves to help classify strings as **naughty** or **nice**.

### Part 1:

A string is **nice** if:

- It contains at least **three vowels** (`a`, `e`, `i`, `o`, `u`)
- It contains at least **one letter that appears twice in a row**
- It does **not** contain the substrings `ab`, `cd`, `pq`, or `xy`

### Part 2:

The old rules are scrapped. A string is **nice** if:

- It contains a **pair of any two letters** that appears at least twice **without overlapping**
- It contains at least **one letter** which repeats with **exactly one letter between them** (e.g. `xyx`, `efe`, `aaa`)

---

## 🧠 My Approach

### Part 1:

- Loop through each character
- Count vowels using a `Set`
- Detect doubles: `str[i] === str[i + 1]`
- Use a regex to reject forbidden substrings
- Return true if the string has at least 3 vowels and a double letter, and doesn't contain a forbidden substring

### Part 2:

- Use a single loop to handle both conditions efficiently:
  - Track the **last seen position** of every 2-letter pair to detect **non-overlapping repeats**
  - Check for **palindromic patterns** (`xyx`) using `str[i] === str[i - 2]`
- Set flags `hasPair` and `hasRepeatWithGap`, and return true when both are satisfied

---

## ✅ What I Learned

- How to detect repeated substrings **without overlap**
- How to track patterns like `xyx` using index math
- The importance of **checking loop boundaries carefully** to avoid off-by-one bugs

---

## 🚀 Run the Script

```bash
npm run solve -- 2015 05
```

## 🧪 Run the Tests

```bash
npm run test:file -- 2015/day05-doesnt-he-have-intern-elves-for-this/main.test.ts
```
