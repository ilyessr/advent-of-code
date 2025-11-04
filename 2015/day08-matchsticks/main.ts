import fs from "fs";

const isValidHex = (a: string, b: string): boolean =>
  /^[0-9a-fA-F]{2}$/.test(a + b);

export function countMemoryCharacters(line: string): number {
  let memoryCount = 0;
  let i = 1;

  while (i < line.length - 1) {
    const char = line[i];
    const next = line[i + 1];

    if (char === "\\") {
      if (next === "\\" || next === '"') {
        memoryCount += 1;
        i += 2;
        continue;
      }

      if (next === "x" && isValidHex(line[i + 2], line[i + 3])) {
        memoryCount += 1;
        i += 4;
        continue;
      }
    }

    memoryCount += 1;
    i += 1;
  }

  return memoryCount;
}

function getDifference(lines: string[]) {
  let stringCount = 0;
  let memoryCount = 0;

  for (let line of lines) {
    stringCount += line.length;
    memoryCount += countMemoryCharacters(line);
  }

  return stringCount - memoryCount;
}

export function countEncodedCharacters(line: string): number {
  let encodeCount = 2; // extra quotes

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === "\\" || char === '"') {
      encodeCount += 2;
    } else {
      encodeCount++;
    }
  }

  return encodeCount;
}

function getEncodedDifference(lines: string[]) {
  let stringCount = 0;
  let encodeCount = 0;

  for (let line of lines) {
    stringCount += line.length;
    encodeCount += countEncodedCharacters(line);
  }

  return encodeCount - stringCount;
}

function main() {
  const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim();
  const lines = input.trim().split("\n");

  console.log("Size:", getDifference(lines));
  console.log("Size :", getEncodedDifference(lines));
}

if (require.main === module) {
  main();
}
