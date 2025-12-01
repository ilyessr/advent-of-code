import fs from "fs";
import path from "path";

type Direction = "L" | "R";

function parseInstruction(instruction: string): number {
  const direction = instruction[0] as Direction;
  const distance = parseInt(instruction.slice(1), 10);
  return direction === "L" ? -distance : distance;
}

function normalize(a: number, b: number): number {
  return ((a % b) + b) % b;
}

function countZerosPart1(pos: number, rotation: number): number {
  const newPos = pos + rotation;
  return newPos % 100 === 0 ? 1 : 0;
}

/*  
countZerosPart2 estimates how many times the dial passes over 0 by checking if the range goes outside 0–99. 
*/
function countZerosPart2(pos: number, rotation: number): number {
  const newPos = pos + rotation;
  if (rotation === 0) {
    return 0;
  }

  // rotation to the right
  if (rotation > 0) {
    return Math.floor(newPos / 100);
  }

  if (newPos > 0) {
    return 0;
  }

  // rotation to the left
  const stepsBeyondZero = -newPos;

  const correction = pos === 0 ? 0 : 1;

  return Math.floor(stepsBeyondZero / 100) + correction;
}

function loadInstructions(fileName: string): string[] {
  const filePath = path.resolve(__dirname, fileName);
  const content = fs.readFileSync(filePath, "utf-8");
  return content.trim().split("\n");
}

export function getPassword(
  instructions: string[],
  method: string | null = null
): number {
  let pos = 50;
  let count = 0;

  for (const instruction of instructions) {
    const rotation = parseInstruction(instruction);
    if (method === "0x434C49434B") {
      count += countZerosPart2(pos, rotation);
    } else {
      count += countZerosPart1(pos, rotation);
    }
    const newPos = pos + rotation;
    pos = normalize(newPos, 100);
  }

  return count;
}

function main() {
  const instructions = loadInstructions("input.txt");

  const part1 = getPassword(instructions);
  const part2 = getPassword(instructions, "0x434C49434B");
  console.log("Password (Part 1) ", part1); // 1043
  console.log("Password (Part 2) ", part2); // 5963
}

if (require.main === module) {
  main();
}
