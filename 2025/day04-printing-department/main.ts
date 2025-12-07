import fs from "fs";
import path from "path";

const directions: Position[] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function loadGrid(fileName: string): string[][] {
  const filePath = path.resolve(__dirname, fileName);
  const input = fs.readFileSync(filePath, "utf-8");
  const banks = input.split("\n").map((bank) => [...bank]);
  return banks;
}

type Position = [number, number];

function getAdjacentPositions(
  roll: Position,
  width: number,
  height: number
): Position[] {
  const [x, y] = roll;

  return directions
    .map(([dx, dy]) => [x + dx, y + dy] as Position)
    .filter(([nx, ny]) => nx >= 0 && ny >= 0 && nx < width && ny < height);
}

function countAdjacentRolls(grid: string[][], roll: Position): number {
  const width = grid[0].length;
  const height = grid.length;
  const adjacentRolls = getAdjacentPositions(roll, width, height);

  return adjacentRolls.filter((roll) => {
    const [x, y] = roll;
    return grid[x][y] === "@";
  }).length;
}

function isAccessible(grid: string[][], roll: Position): boolean {
  return countAdjacentRolls(grid, roll) < 4;
}

export function countAccessibleRolls(grid: string[][]) {
  let count = 0;
  const width = grid[0].length;
  const height = grid.length;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === "@" && isAccessible(grid, [row, col])) {
        count += 1;
      }
    }
  }
  return count;
}

export function removeAccessibleRolls(originalGrid: string[][]) {
  let somethingRemoved = true;
  let totalRemoved = 0;

  const grid = originalGrid.map((row) => [...row]);
  const width = grid[0].length;
  const height = grid.length;

  while (somethingRemoved) {
    somethingRemoved = false;
    const toRemove: Position[] = [];
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        const roll: Position = [row, col];
        if (grid[row][col] === "@" && isAccessible(grid, roll)) {
          toRemove.push(roll);
        }
      }
    }

    if (toRemove.length > 0) {
      for (const [x, y] of toRemove) {
        grid[x][y] = ".";
      }
      totalRemoved += toRemove.length;
      somethingRemoved = true;
    }
  }

  return totalRemoved;
}

function main() {
  const grid = loadGrid("input.txt");
  console.log("Accessible grid:", countAccessibleRolls(grid));
  console.log("Total rolls removed:", removeAccessibleRolls(grid));
}

if (require.main === module) {
  main();
}
