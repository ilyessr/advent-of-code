import { countAccessibleRolls, removeAccessibleRolls } from "./main";

const exampleGridRaw = [
  "..@@.@@@@.",
  "@@@.@.@.@@",
  "@@@@@.@.@@",
  "@.@@@@..@.",
  "@@.@@@@.@@",
  ".@@@@@@@.@",
  ".@.@.@.@@@",
  "@.@@@.@@@@",
  ".@@@@@@@@.",
  "@.@.@@@.@.",
];

const exampleGrid = exampleGridRaw.map((line) => [...line]);

describe("Advent of Code 2025 – Day 4: Printing Department", () => {
  describe("Part 1 – Accessible rolls", () => {
    test("counts the number of rolls that can be accessed initially", () => {
      const result = countAccessibleRolls(exampleGrid);
      expect(result).toBe(13);
    });
  });

  describe("Part 2 – Total removable rolls with propagation", () => {
    test("counts the total number of rolls that can be removed iteratively", () => {
      const result = removeAccessibleRolls(exampleGrid);
      expect(result).toBe(43);
    });
  });
});
