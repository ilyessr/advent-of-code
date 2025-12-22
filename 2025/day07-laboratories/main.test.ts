import { countSplits, countTimelines, findStart } from "./main";

const grid = [
  ".......S.......",
  "...............",
  ".......^.......",
  "...............",
  "......^.^......",
  "...............",
  ".....^.^.^.....",
  "...............",
  "....^.^...^....",
  "...............",
  "...^.^...^.^...",
  "...............",
  "..^...^.....^..",
  "...............",
  ".^.^.^.^.^...^.",
  "...............",
].map((row) => [...row]);

describe("Advent of Code 2025 — Day 7", () => {
  const [startRow, startCol] = findStart(grid);

  describe("Part 1", () => {
    test("computes the correct number of splits for the example", () => {
      const result = countSplits(grid, [startRow, startCol]);
      expect(result).toBe(21);
    });
  });

  describe("Part 2", () => {
    test("computes the correct number of timelines for the example", () => {
      const result = countTimelines(grid, startRow, startCol);
      expect(result).toBe(40);
    });
  });
});
