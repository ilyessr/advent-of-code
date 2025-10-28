import fs from "fs";

const parseDimensions = (str: string): number[][] => {
  const arr = str.split("\n");
  const result: number[][] = [];

  for (let line of arr) {
    const dimensions = line.trim().split("x").map(Number);
    result.push(dimensions);
  }

  return result;
};

export const calculateTotalWrappingPaper = (arr: number[][]): number => {
  let total = 0;

  for (let box of arr) {
    const [l, w, h] = box;
    const side1 = l * w;
    const side2 = w * h;
    const side3 = h * l;

    const surface = 2 * side1 + 2 * side2 + 2 * side3;
    const slack = Math.min(side1, side2, side3);
    total += surface + slack;
  }

  return total;
};

export const calculateTotalRibbon = (arr: number[][]): number => {
  let total = 0;

  for (let box of arr) {
    const [l, w, h] = box;

    const dimensions = box.sort((a, b) => a - b);
    const [side1, side2] = dimensions;

    const perimeter = 2 * (side1 + side2);
    const bow = l * w * h;

    total += perimeter + bow;
  }

  return total;
};

const input = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim();
const boxes = parseDimensions(input);
console.log(
  "📦 Total wrapping paper needed:",
  calculateTotalWrappingPaper(boxes)
);
console.log("🎗️ Total ribbon needed:", calculateTotalRibbon(boxes));
