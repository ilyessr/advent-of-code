import { findNumberForHashing } from "./main";
describe("Day 04 – The Ideal Stocking Stuffer", () => {
  describe("findNumberForHashing", () => {
    it("should find the correct number for 5 leading zeroes (example abcdef)", () => {
      const result = findNumberForHashing("abcdef", 5);
      expect(result).toBe(609043);
    });

    it("should find the correct number for 5 leading zeroes (example pqrstuv)", () => {
      const result = findNumberForHashing("pqrstuv", 5);
      expect(result).toBe(1048970);
    });
  });
});
