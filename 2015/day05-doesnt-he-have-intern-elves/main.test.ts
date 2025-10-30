import { isStringNice, isStringNice2 } from "./main";

describe("Day 05 - Part 1 - isStringNice", () => {
  test("ugknbfddgicrmopn is nice", () => {
    expect(isStringNice("ugknbfddgicrmopn")).toBe(true);
  });

  test("aaa is nice", () => {
    expect(isStringNice("aaa")).toBe(true);
  });

  test("jchzalrnumimnmhp is naughty (no double letter)", () => {
    expect(isStringNice("jchzalrnumimnmhp")).toBe(false);
  });

  test("haegwjzuvuyypxyu is naughty (contains 'xy')", () => {
    expect(isStringNice("haegwjzuvuyypxyu")).toBe(false);
  });

  test("dvszwmarrgswjxmb is naughty (only one vowel)", () => {
    expect(isStringNice("dvszwmarrgswjxmb")).toBe(false);
  });
});

describe("Day 05 - Part 2 - isStringNice2", () => {
  test("qjhvhtzxzqqjkmpb is nice", () => {
    expect(isStringNice2("qjhvhtzxzqqjkmpb")).toBe(true);
  });

  test("xxyxx is nice", () => {
    expect(isStringNice2("xxyxx")).toBe(true);
  });

  test("uurcxstgmygtbstg is naughty (no repeat with gap)", () => {
    expect(isStringNice2("uurcxstgmygtbstg")).toBe(false);
  });

  test("ieodomkazucvgmuy is naughty (no repeated pair)", () => {
    expect(isStringNice2("ieodomkazucvgmuy")).toBe(false);
  });
});
