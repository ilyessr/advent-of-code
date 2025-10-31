// day06.test.ts
import { countLightsLit, getTotalBrightness } from "./main";

describe("Day 06 - Part 1 - countLightsLit", () => {
  test("turn on 0,0 through 999,999 (all lights on)", () => {
    const input = ["turn on 0,0 through 999,999"];
    expect(countLightsLit(input)).toBe(1000000);
  });

  test("toggle 0,0 through 999,0 after all on (row of 1000 toggled)", () => {
    const input = ["turn on 0,0 through 999,999", "toggle 0,0 through 999,0"];
    expect(countLightsLit(input)).toBe(999000);
  });

  test("turn off 499,499 through 500,500 after all on (4 lights off)", () => {
    const input = [
      "turn on 0,0 through 999,999",
      "turn off 499,499 through 500,500",
    ];
    expect(countLightsLit(input)).toBe(999996);
  });
});

describe("Day 06 - Part 2 - getTotalBrightness", () => {
  test("turn on 0,0 through 0,0 increases brightness by 1", () => {
    const input = ["turn on 0,0 through 0,0"];
    expect(getTotalBrightness(input)).toBe(1);
  });

  test("toggle 0,0 through 999,999 increases brightness by 2 million", () => {
    const input = ["toggle 0,0 through 999,999"];
    expect(getTotalBrightness(input)).toBe(2000000);
  });
});
