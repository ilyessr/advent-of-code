# Day 03 – Gift Shop

[Link to the puzzle](https://adventofcode.com/2025/day/3)

## Problem Summary

The goal is to power an escalator using emergency batteries.  
Each input line is a **bank** of batteries.  
Each character (1–9) is the battery’s voltage.

- A bank = one line of digits.
- I must turn on **exactly 2 batteries** (Part 1) or **k batteries** (Part 2).
- I must keep the original order (no rearranging).
- The selected digits form a number.  
  Example: in `12345`, picking `2` and `4` gives `24`.

The total joltage is the sum of the best values from each bank.

---

## Part 1

Find the **largest two-digit number** that can be formed from each bank while keeping the order.  
Add all those numbers together.

Example:

- `987654...` → 98
- `811111...119` → 89

I used a simple greedy algorithm just for 2 digits.

---

## Part 2

Now I need to select **k digits** (12 in my case) to get the largest possible number.  
Still in order.  
This is harder and the greedy from Part 1 does not work anymore.

I used a **Monotonic Stack** to solve this efficiently.

---

## My Approach

- Part 1: custom greedy for selecting the best 2 digits.
- Part 2: monotonic stack to build the best subsequence of length `k`.
- After building the stack, I must remember to do `.slice(0, k)`  
  (otherwise the result may contain more digits than needed).

---

## Observations

- Comparing digits as strings works only if both have the same length.
- For iterating over characters, `for...of` is the cleanest way.
- The monotonic stack was the key for selecting more than 2 digits.
- The algorithm removes smaller previous digits when a bigger one arrives.
- Works in linear time, which is great for long banks.

---

## What I Learned

- A simple greedy works for Part 1 but not for larger `k`.
- The **Monotonic Stack** builds the best subsequence in order and in O(n).
- Always be careful with JavaScript’s scientific notation when numbers get too big.
- Always cut the final result with `.slice(0, k)` to keep the correct number of digits.

# Notes on the Monotonic Stack Algorithm

## What this algorithm solves

This algorithm finds the **best possible subsequence of digits** (in order) of a fixed length `k`.  
It builds the largest number possible without rearranging, only by removing digits.

Use this algorithm when you need to:

- pick `k` digits from a long sequence,
- keep the original order,
- maximize the resulting number.

---

## Core idea

We scan the digits from left to right and use a **stack** to build the result.

**Main rule:**

> If a larger digit arrives and we are allowed to remove digits,  
> we remove smaller digits from the top of the stack.

This keeps the stack as the best number possible at every step.

---

## Conditions used

For each new digit, we check:

1. **We can still remove digits**  
   `toRemove > 0`

2. **The stack is not empty**  
   `stack.length > 0`

3. **The last digit in the stack is smaller than the current digit**  
   `stack[stack.length - 1] < digit`

If all three conditions are true, we pop from the stack.  
We repeat this until one condition becomes false.

---

## How the stack behaves

- The stack **grows** when we push digits.
- The stack **shrinks** when a better digit arrives (we pop smaller digits).
- When `toRemove` reaches `0`, we cannot remove anything anymore and only push.

Because of this, the stack may contain **more than `k` digits**,  
so to keep only the required length, we must use:

```js
slice(0, k);
```

## Does the monotonic stack only work with numbers?

No, the monotonic stack does **not** work only with numbers.

It works with **any values that can be compared** in a consistent way:

- digits
- characters
- strings
- custom objects (if you define how to compare them)

The important part is the **comparison**, not the type.
