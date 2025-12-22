import fs from "fs";
import { resolve } from "path";

function loadGrid(fileName: string): string[][] {
  const filePath = resolve(__dirname, fileName);
  const content = fs.readFileSync(filePath, "utf-8");
  return content.split("\n").map((row) => [...row]);
}

export function findStart(grid: string[][]): [number, number] {
  const col = grid[0].indexOf("S");
  if (col === -1) {
    throw new Error("Starting point not found");
  }
  return [0, col];
}

export function countSplits(grid: string[][], start: [number, number]): number {
  const height = grid.length;
  const width = grid[0].length;

  const queue: [number, number][] = [[start[0] + 1, start[1]]];
  const visited = new Set<string>();
  let splitCount = 0;

  while (queue.length > 0) {
    const [row, col] = queue.shift()!;

    if (row >= height || col < 0 || col >= width) {
      continue;
    }

    const key = `${row},${col}`;
    if (visited.has(key)) {
      continue;
    }
    visited.add(key);

    const cell = grid[row][col];

    if (cell === "^") {
      splitCount++;
      queue.push([row + 1, col - 1]);
      queue.push([row + 1, col + 1]);
    } else {
      queue.push([row + 1, col]);
    }
  }

  return splitCount;
}

export function countTimelines(
  grid: string[][],
  row: number,
  col: number,
  memo = new Map<string, number>()
): number {
  const height = grid.length;
  const width = grid[0].length;

  if (row >= height || col < 0 || col >= width) {
    return 1;
  }

  const key = `${row},${col}`;
  if (memo.has(key)) {
    return memo.get(key)!;
  }

  const cell = grid[row][col];
  let result: number;

  if (cell === "^") {
    result =
      countTimelines(grid, row + 1, col - 1, memo) +
      countTimelines(grid, row + 1, col + 1, memo);
  } else {
    result = countTimelines(grid, row + 1, col, memo);
  }

  memo.set(key, result);
  return result;
}

function main(): void {
  const grid = loadGrid("input.txt");

  const [startRow, startCol] = findStart(grid);
  const splitCount = countSplits(grid, [startRow, startCol]);

  console.log("Part 1 - Number of divisions :", splitCount);

  const timelines = countTimelines(grid, startRow + 1, startCol);
  console.log("Part 2 - Timelines :", timelines);
}

if (require.main === module) {
  main();
}
