import fs from "fs";

export function calculateFinalFloor(input: string): number {
  let floor = 0;
  for (const char of input) {
    if (char === "(") {
      floor++;
    } else if (char === ")") {
      floor--;
    }
  }
  return floor;
}

export function findBasementEntryPosition(input: string): number {
  let floor = 0;

  for (let index = 0; index < input.length; index++) {
    const char = input[index];
    if (char === "(") {
      floor++;
    } else if (char === ")") {
      floor--;
    }

    if (floor < 0) {
      const position = index + 1;
      return position;
    }
  }
  return -1;
}

export function main() {
  const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim();
  console.log("Final floor:", calculateFinalFloor(input));
  console.log("First position:", findBasementEntryPosition(input));
}

if (require.main === module) {
  main();
}
