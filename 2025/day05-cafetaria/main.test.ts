import { countFreshIngredients, mergeRanges, countFreshIDs } from "./main";

const exampleRangesRaw = ["3-5", "10-14", "16-20", "12-18"];

const exampleAvailableIds = [1, 5, 8, 11, 17, 32];

describe("Advent of Code 2025 – Day 5: Cafeteria", () => {
  describe("Part 1 – Fresh IDs among available ingredients", () => {
    test("counts how many available IDs are considered fresh", () => {
      const result = countFreshIngredients(
        exampleRangesRaw,
        exampleAvailableIds
      );
      expect(result).toBe(3);
    });
  });

  describe("Part 2 – Total number of unique fresh IDs from ranges", () => {
    test("merges overlapping ranges and counts all covered IDs", () => {
      const merged = mergeRanges(exampleRangesRaw);
      const totalFresh = countFreshIDs(merged);
      expect(totalFresh).toBe(14);
    });
  });
});
