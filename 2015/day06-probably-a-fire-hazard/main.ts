import fs from "fs";

function getInstructions(): string[] {
  return fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim().split("\n");
}

function createGridWithBoolean(size: number): boolean[][] {
  const grid = Array.from({ length: size }, () => Array(size).fill(false));

  return grid;
}

function createGridWithNumber(size: number): number[][] {
  const grid = Array.from({ length: size }, () => Array(size).fill(0));

  return grid;
}

export function countLightsLit(instructions: string[]): number {
  const grid = createGridWithBoolean(1000);
  let countLightOn = 0;

  for (let instruction of instructions) {
    let mode: "on" | "off" | "toggle";
    if (instruction.startsWith("turn on")) mode = "on";
    else if (instruction.startsWith("turn off")) mode = "off";
    else mode = "toggle";

    const [row1, col1, row2, col2] = instruction.match(/\d+/g)!.map(Number);

    for (let x = row1; x <= row2; x++) {
      for (let y = col1; y <= col2; y++) {
        const previous: boolean = grid[x][y];

        switch (mode) {
          case "on":
            grid[x][y] = true;
            break;

          case "off":
            grid[x][y] = false;
            break;

          case "toggle":
            grid[x][y] = !grid[x][y];
            break;

          default:
            console.error("instruction not recognized");
            break;
        }

        const updated: boolean = grid[x][y];

        if (previous !== updated) {
          if (updated) {
            countLightOn++;
          } else {
            countLightOn--;
          }
        }
      }
    }
  }

  return countLightOn;
}

export function getTotalBrightness(instructions: string[]): number {
  const grid = createGridWithNumber(1000);
  let totalBrightness = 0;

  for (let instruction of instructions) {
    let mode: "on" | "off" | "toggle";
    if (instruction.startsWith("turn on")) mode = "on";
    else if (instruction.startsWith("turn off")) mode = "off";
    else mode = "toggle";

    const [row1, col1, row2, col2] = instruction.match(/\d+/g)!.map(Number);

    for (let x = row1; x <= row2; x++) {
      for (let y = col1; y <= col2; y++) {
        const previous = grid[x][y];

        switch (mode) {
          case "on":
            grid[x][y]++;
            break;
          case "off":
            grid[x][y] = Math.max(0, grid[x][y] - 1);
            break;
          case "toggle":
            grid[x][y] += 2;
            break;
        }

        const updated = grid[x][y];
        totalBrightness += updated - previous;
      }
    }
  }

  return totalBrightness;
}

function main() {
  const instructions = getInstructions();
  console.log("Number of lights on:", countLightsLit(instructions));
  console.log("Total brightness:", getTotalBrightness(instructions));
}

if (require.main === module) {
  main();
}
