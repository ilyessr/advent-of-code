import { evaluate, parseCircuit } from "./main";

describe("Day 07 - Circuit Evaluation Examples", () => {
  const baseCircuit = [
    "123 -> x",
    "456 -> y",
    "x AND y -> d",
    "x OR y -> e",
    "x LSHIFT 2 -> f",
    "y RSHIFT 2 -> g",
    "NOT x -> h",
    "NOT y -> i",
  ];

  const circuit = parseCircuit(baseCircuit);

  test("123 -> x", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("x", circuit, memo)).toBe(123);
  });

  test("x AND y -> d", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("d", circuit, memo)).toBe(72);
  });

  test("x OR y -> e", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("e", circuit, memo)).toBe(507);
  });

  test("x LSHIFT 2 -> f", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("f", circuit, memo)).toBe(492);
  });

  test("y RSHIFT 2 -> g", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("g", circuit, memo)).toBe(114);
  });

  test("NOT x -> h", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("h", circuit, memo)).toBe(65412);
  });

  test("NOT y -> i", () => {
    const memo: Record<string, number> = {};
    expect(evaluate("i", circuit, memo)).toBe(65079);
  });
});
