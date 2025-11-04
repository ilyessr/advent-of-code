import { countMemoryCharacters, countEncodedCharacters } from "./main";

function getDifference(lines: string[]) {
  let code = 0;
  let memory = 0;
  for (const line of lines) {
    code += line.length;
    memory += countMemoryCharacters(line);
  }
  return code - memory;
}

function getEncodedDifference(lines: string[]) {
  let code = 0;
  let encoded = 0;
  for (const line of lines) {
    code += line.length;
    encoded += countEncodedCharacters(line);
  }
  return encoded - code;
}

describe("--- Day 8: Matchsticks ---", () => {
  const exampleLines = ['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'];

  describe("Part 1 – code length vs memory length", () => {
    test("Individual memory character counts", () => {
      expect(countMemoryCharacters('""')).toBe(0);
      expect(countMemoryCharacters('"abc"')).toBe(3);
      expect(countMemoryCharacters('"aaa\\"aaa"')).toBe(7);
      expect(countMemoryCharacters('"\\x27"')).toBe(1);
    });

    test("Total difference between code and memory", () => {
      const diff = getDifference(exampleLines);
      expect(diff).toBe(12);
    });
  });

  describe("Part 2 – encoded string vs code length", () => {
    test("Individual encoded lengths", () => {
      expect(countEncodedCharacters('""')).toBe(6);
      expect(countEncodedCharacters('"abc"')).toBe(9);
      expect(countEncodedCharacters('"aaa\\"aaa"')).toBe(16);
      expect(countEncodedCharacters('"\\x27"')).toBe(11);
    });

    test("Total encoded length - original code length", () => {
      const diff = getEncodedDifference(exampleLines);
      expect(diff).toBe(19);
    });
  });
});
