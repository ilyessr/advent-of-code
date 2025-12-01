import { getPassword } from "./main";

const exampleInstructions = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
];

describe("Advent of Code 2025 - Day 1", () => {
  test("Part 1 - Counts how many times the dial ends on 0", () => {
    const result = getPassword(exampleInstructions);
    expect(result).toBe(3);
  });

  test("Part 2 - Counts all times the dial passes through 0 (including final position)", () => {
    const result = getPassword(exampleInstructions, "0x434C49434B");
    expect(result).toBe(6);
  });

  test("Part 1 - Long right rotation only counts final landing on zero", () => {
    const result = getPassword(["R250"]);
    expect(result).toBe(1);
  });

  test("Part 2 - Left rotation correctly counts passing zero once", () => {
    const result = getPassword(["L120"], "0x434C49434B");
    expect(result).toBe(1);
  });
});
