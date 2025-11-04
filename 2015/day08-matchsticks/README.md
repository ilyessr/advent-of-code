# Day 8: Matchsticks

📌 [Link to the puzzle](https://adventofcode.com/2015/day/08)

## Part 1

Santa is going digital and wants to know how much space his list of string literals will take up in memory.

**What is the goal?**  
We need to compute, for each line:

- The number of characters in the code (as written in the source file)
- The number of characters in memory (after escape sequences are evaluated)
- Then return the total difference: `code length - memory length`

**Key rules to consider:**
There are three escape sequences to handle:

- `\\` → represents one backslash (`\`) in memory
- `\"` → represents one double quote (`"`) in memory
- `\xNN` → represents one character (ASCII value), but takes **4 characters in code**

Other important notes:

- Whitespace (like newlines) in the file is not counted as part of the string.
- The outer quotes (`"`) are part of the code but **not** part of the in-memory string.

### Implementation

I implemented a parser that walks through each line character by character, ignoring the surrounding quotes.  
Whenever a backslash (`\`) is found, I check whether it starts an escape sequence (`\\`, `\"`, or `\xNN`) and increment the memory count accordingly, while skipping the right number of characters.  
Regular characters are counted as-is. I manually control the index to avoid double-counting or misinterpreting multi-character sequences.

### Complexity Analysis

- **Time Complexity:** O(N), where N is the total number of characters across all lines. Each character is examined at most once.
- **Space Complexity:** O(1), constant space. The algorithm uses only a few variables and does not allocate any data structures proportional to input size.

### Obstacles Encountered

- Initially tried to compare character pairs directly (e.g. `pair === "\\"`), which led to incorrect logic due to misunderstanding how escape characters work in JavaScript strings.
- Used a `for` loop with `i++`, which made it difficult to handle variable-length escape sequences like `\xNN`. It caused incorrect parsing and repeated processing of the same characters.
- Forgot to exclude the surrounding double quotes when counting characters in memory, resulting in overcounting.
- Misused regular expressions, for example using `/w+/` instead of a proper hex pattern to match `\xNN`.
- Confused the difference between:
  - how strings are written in the source code (`"\\x27"`),
  - how JavaScript interprets them in memory (`\x27`),
  - and what they actually represent at runtime (a single `'` character).

## Part 2

The task is reversed: instead of computing how many characters are in memory vs. in code, we now want to know how much larger the string becomes when **encoded for storage** in source code.

**What changes:**

- Each existing backslash (`\`) becomes `\\` → +1 character
- Each existing double quote (`"`) becomes `\"` → +1 character
- The entire string is wrapped in additional quotes → +2 characters

The goal is to compute:

- The number of characters **in the newly encoded string**
- Minus the original number of characters in code (as written)

**Approach:**

- Loop through each line
- Escape backslashes and double quotes
- Add 2 for the surrounding quotes
- Compare the new length with the original

### Implementation

I reused the same loop structure to iterate through each character, and for each backslash or quote, I added 1 extra character. Finally, I added 2 extra characters for the wrapping quotes.

### Complexity Analysis

- **Time Complexity:** O(N), each character is visited once and processed in constant time.
- **Space Complexity:** O(1), no additional memory beyond counters is used.

---

## What I Learned

- Always start by checking line[i], and only look ahead (i + 1, i + 2, etc.) when necessary
- Manually control the loop index based on the type of sequence detected (+1, +2, or +4)
- Exclude the opening and closing quotes when computing the in-memory string length
- Use a precise regular expression for matching \xNN: /^[0-9a-fA-F]{2}$/
- Better distinguish between string code, runtime representation, and memory storage

### Run the Script

```bash
npm run solve -- 2015 08
```

### Run the Tests

```bash
npm run test:file -- 2015/day08-matchsticks/main.test.ts
```
