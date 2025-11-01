# Day 07 – Some Assembly Required

📌 [Link to the puzzle](https://adventofcode.com/2015/day/7)

## 🧩 Problem Summary

We’re given a list of logic gate instructions to wire a circuit.  
Each wire holds a 16-bit signal (`0` to `65535`) and is connected using logical operations: `AND`, `OR`, `NOT`, `LSHIFT`, `RSHIFT`.

The goal is to compute the signal ultimately provided to wire **`a`**.
Each instruction is of the form: `**<expression> -> <wire>**`

Example instructions:

```
123 -> x
x AND y -> d
x OR y -> e
x LSHIFT 2 -> f
y RSHIFT 2 -> g
NOT x -> h
```

## 🧠 My Approach

### Part 1

**Circuit Parsing**

- Used `/^(.+) -> (\w+)$/` to extract expressions and wires.
- Stored as: `circuit[wire] = expression` — a simple dependency map.

**Recursive Evaluation**

- Wrote `evaluate(wire, circuit, signals)`:
  - If `wire` is a number → return it
  - If memoized → return cached value
  - Else:
    - Get the expression
    - Match its type
    - Evaluate dependencies recursively
    - Cache result in `signals[wire]`

**Supported Expression Patterns**

| Pattern                | Operation     |
| ---------------------- | ------------- |
| `^\w+$`                | direct assign |
| `^NOT (\w+)$`          | bitwise NOT   |
| `^(\w+) AND (\w+)$`    | bitwise AND   |
| `^(\w+) OR (\w+)$`     | bitwise OR    |
| `^(\w+) LSHIFT (\d+)$` | left shift    |
| `^(\w+) RSHIFT (\d+)$` | right shift   |

### Part 2

- Overwrote `circuit["b"]` with that value of wire `a`.
- Reset the `signals` object.
- Called `evaluate("a")` again.

## ✅ What I Learned

- Discovered all bitwise operations: `AND`, `OR`, `NOT`, `LSHIFT`, `RSHIFT`.
- Tried looping the circuit — didn't work.
- Recursive evaluation with memoization was the right approach.
- Understood regex groups: `match[1+]` are captures → `[, expr, wire]`.

## 🚀 Run the Script

```bash
npm run solve -- 2015 07
```

## 🧪 Run the Tests

```bash
npm run test:file -- 2015/day07-some-assembly-required/main.test.ts
```
