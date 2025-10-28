import { calculateFinalFloor, findBasementEntryPosition } from "./main";

describe("Day 01 – Not Quite Lisp", () => {
  describe("Part 1 – Final floor calculation", () => {
    it("returns floor 0 for balanced parentheses", () => {
      expect(calculateFinalFloor("(())")).toBe(0);
      expect(calculateFinalFloor("()()")).toBe(0);
    });

    it("returns floor 3 when there are more opening parentheses", () => {
      expect(calculateFinalFloor("(((")).toBe(3);
      expect(calculateFinalFloor("(()(()(")).toBe(3);
      expect(calculateFinalFloor("))((((( ")).toBe(3);
    });

    it("returns floor -3 when there are more closing parentheses", () => {
      expect(calculateFinalFloor(")))")).toBe(-3);
      expect(calculateFinalFloor(")())())")).toBe(-3);
    });
  });

  describe("Part 2 – First time entering the basement", () => {
    it("returns the correct position for first basement entry", () => {
      expect(findBasementEntryPosition("())")).toBe(3);
      expect(findBasementEntryPosition("))(")).toBe(1);
    });
  });
});
