import { part1, part2 } from "./main";

const exampleInput = [
  "123 328  51 64 ",
  " 45 64  387 23 ",
  "  6 98  215 314",
  "*   +   *   +  ",
];

describe("Advent of Code 2023 — Day 6: Day 6: Trash Compactor", () => {
  describe("Part 1", () => {
    test("computes the correct result for the example input", () => {
      const result = part1(exampleInput);
      expect(result).toBe(4277556);
    });
  });

  describe("Part 2", () => {
    test("computes the correct result for the example input", () => {
      const result = part2(exampleInput);
      expect(result).toBe(3263827);
    });
  });
});
