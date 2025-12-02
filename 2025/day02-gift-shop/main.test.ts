import { countInvalidId } from "./main";

describe("Advent of Code 2025 - Day 2", () => {
  const exampleRanges = [
    "11-22",
    "95-115",
    "998-1012",
    "1188511880-1188511890",
    "222220-222224",
    "1698522-1698528",
    "446443-446449",
    "38593856-38593862",
    "565653-565659",
    "824824821-824824827",
    "2121212118-2121212124",
  ];

  test("Part 1", () => {
    const total = countInvalidId(exampleRanges, "part 1");
    expect(total).toBe(1227775554);
  });

  test("Part 2", () => {
    const total = countInvalidId(exampleRanges, "part 2");
    expect(total).toBe(4174379265);
  });
});
