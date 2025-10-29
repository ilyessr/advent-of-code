# Day 04 – The Ideal Stocking Stuffer

📌 [Link to the puzzle](https://adventofcode.com/2015/day/4)

## 🧩 Problem Summary

Santa needs help mining AdventCoins (like Bitcoin) to give as gifts.  
He must find an integer which, when appended to a secret key and hashed using MD5, produces a hash that starts with a certain number of zeroes.

- **Part 1**: Find the lowest positive number such that the MD5 hash of the secret key + number starts with **five zeroes**.
- **Part 2**: Same thing, but the hash must start with **six zeroes**.

## 🧠 My Approach

- I wrote a function that:
  1. Increments a candidate number from 0 upwards.
  2. Hashes `secretKey + candidate` using MD5.
  3. Checks if the hash starts with the required number of zeroes using `.startsWith("0".repeat(zeroCount))`.
  4. Returns the first valid number found.
- To avoid repeating logic, I made `zeroCount` a parameter so I could reuse the same function for part 1 and 2.

## ✅ What I Learned

- How to use Node's built-in `crypto` module to generate MD5 hashes.
- How to write parameterized functions to avoid code duplication between Part 1 and Part 2.

## 🚀 Run the Script

```
npm run solve -- 2015 04
```

## 🧪 Run the Tests

```
npm run test:file -- 2015/day04-ideal-stocking-stuffer/main.test.ts
```
