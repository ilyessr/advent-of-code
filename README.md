# Advent of Code – TypeScript Solutions

Personal solutions to [Advent of Code](https://adventofcode.com/) written in **TypeScript**. This repo doubles as a daily algorithms practice log and a place to keep the code tidy, typed, and testable.

## What’s inside
- Year folders (`2015`, `2025`, …) with one subfolder per day.
- Each day usually has `main.ts`, optional `input.txt`, a short `README.md`, and `main.test.ts` for checks.
- Scripts for running a puzzle day or the test suite.

Example layout:
```yaml
2015/
  day01-not-quite-lisp/
    README.md
    input.txt
    main.test.ts
    main.ts
```

## Getting started
```bash
npm install
```

## Run a puzzle
```bash
npm run solve -- <year> <day>
```
Example: `npm run solve -- 2015 01`

## Run tests
```bash
npm test
```
Use `npm test -- <pattern>` to target a specific file or day.

## Goals
- Stay sharp with daily problem solving
- Keep code readable and type-safe
- Capture lessons learned as I go
