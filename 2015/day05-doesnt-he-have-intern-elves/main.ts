import fs from "fs";

function load() {
  const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim();
  const arr: string[] = input.split("\n");
  return arr;
}

export function isStringNice(str: string): boolean {
  const VOWELS = new Set(["a", "e", "i", "o", "u"]);
  const FORBIDDEN_REGEX = /ab|cd|pq|xy/;

  let vowelCount = 0;
  let hasDouble = false;

  if (FORBIDDEN_REGEX.test(str)) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const next = str[i + 1];

    if (VOWELS.has(char)) {
      vowelCount++;
    }

    if (!hasDouble && next && char === next) {
      hasDouble = true;
    }

    if (hasDouble && vowelCount >= 3) {
      return true;
    }
  }

  return hasDouble && vowelCount >= 3;
}

export function isStringNice2(str: string): boolean {
  const pairPositions: Record<string, number> = {};
  let hasRepeatWithGap = false;
  let hasPair = false;

  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1) {
      const pair = str[i] + str[i + 1];
      if (!(pair in pairPositions)) {
        pairPositions[pair] = i;
      } else if (pairPositions[pair] <= i - 2) {
        hasPair = true;
      }
    }

    if (!hasRepeatWithGap && i >= 2 && str[i] === str[i - 2]) {
      hasRepeatWithGap = true;
    }

    if (hasRepeatWithGap && hasPair) {
      return true;
    }
  }

  return hasRepeatWithGap && hasPair;
}

function main() {
  const strings = load();

  const part1Count = strings.filter(isStringNice).length;
  const part2Count = strings.filter(isStringNice2).length;

  console.log("Nice strings:", part1Count);
  console.log("Nice strings with better conditions:", part2Count);
}

if (require.main === module) {
  main();
}
