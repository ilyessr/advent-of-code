import { calculateTotalWrappingPaper, calculateTotalRibbon } from "./main";

describe("Day 02 – Not Quite Lisp", () => {
  describe("Wrapping paper calculation", () => {
    it("should return 58 for a box of 2x3x4", () => {
      const boxes = [[2, 3, 4]];
      expect(calculateTotalWrappingPaper(boxes)).toBe(58);
    });

    it("should return 43 for a box of 1x1x10", () => {
      const boxes = [[1, 1, 10]];
      expect(calculateTotalWrappingPaper(boxes)).toBe(43);
    });
  });

  describe("Ribbon calculation", () => {
    it("should return 34 for a box of 2x3x4", () => {
      const boxes = [[2, 3, 4]];
      expect(calculateTotalRibbon(boxes)).toBe(34);
    });

    it("should return 14 for a box of 1x1x10", () => {
      const boxes = [[1, 1, 10]];
      expect(calculateTotalRibbon(boxes)).toBe(14);
    });
  });
});
