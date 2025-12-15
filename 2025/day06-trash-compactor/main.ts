import fs from "fs";
import { resolve } from "path";

function loadGrid(fileName: string): string[] {
  const filePath = resolve(__dirname, fileName);
  const content = fs.readFileSync(filePath, "utf-8");
  return content.split("\n");
}

function isDigit(str: string): boolean {
  return str <= "9" && str >= "0";
}

function isValidOperator(str: string): boolean {
  return ["+", "*"].includes(str);
}

function getCleanGrid(grid: string[]): string[][] {
  return grid.map((row) => row.trim().split(/\s+/));
}

function transpose(grid: string[][]): string[][] {
  const height = grid.length;
  const width = grid[0].length;

  const result: string[][] = Array.from({ length: width }, () => Array(height));

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      result[col][row] = grid[row][col];
    }
  }

  return result;
}

function getGrandTotal(columns: string[][]): number {
  let total = 0;

  columns.forEach((col) => {
    total += evaluateProblem(col);
  });

  return total;
}

function evaluateProblem(col: string[]): number {
  const operator = col[col.length - 1];
  const operands = col.slice(0, -1).map(Number);

  switch (operator) {
    case "+":
      return operands.reduce((sum, val) => sum + val, 0);
    case "*":
      return operands.reduce((product, val) => product * val, 1);
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
}

function extractProblemsPart2(grid: string[]) {
  const width = grid[0].length;
  const height = grid.length;
  let currentProblem = [];
  let problems = [];

  for (let col = width - 1; col >= 0; col--) {
    let number = "";
    for (let row = 0; row < height; row++) {
      const char = grid[row][col];
      if (isDigit(char)) {
        number += char;
      } else if (isValidOperator(char)) {
        currentProblem.push(number);
        number = "";
        currentProblem.push(char);
        problems.push(currentProblem);
        currentProblem = [];
      }
    }

    if (number) {
      currentProblem.push(number);
    }
  }

  return problems;
}

export function part1(grid: string[]): number {
  const cleanGrid = getCleanGrid(grid);
  const problemsPart1 = transpose(cleanGrid);
  return getGrandTotal(problemsPart1);
}

export function part2(grid: string[]): number {
  const problemsPart2 = extractProblemsPart2(grid);
  return getGrandTotal(problemsPart2);
}

function main() {
  const grid = loadGrid("input.txt");
  console.log("Part 1 - The total is:", part1(grid));
  console.log("Part 2 - The total is:", part2(grid));
}

if (require.main === module) {
  main();
}
