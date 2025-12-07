import { getTotalJoltage } from "./main";

const exampleBanks = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

describe("Advent of Code 2025 – Day 3", () => {
  describe("Part 1", () => {
    test("computes the total joltage by selecting the best 2 digits per bank", () => {
      // Expected:
      // 987654321111111 → 98
      // 811111111111119 → 89
      // 234234234234278 → 78
      // 818181911112111 → 92
      //
      // Total = 357

      const total = getTotalJoltage(exampleBanks, 2);
      expect(total).toBe(357);
    });
  });

  describe("Part 2", () => {
    test("computes the total joltage by selecting the best 12 digits per bank", () => {
      const total = getTotalJoltage(exampleBanks, 12);
      expect(total).toBe(3121910778619);
    });
  });
});
