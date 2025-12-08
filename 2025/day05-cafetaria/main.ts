import { readFileSync } from "fs";
import { resolve } from "path";

type Range = [number, number];
type RangeList = Range[];

function loadIngredients(fileName: string): [string[], number[]] {
  const filePath = resolve(__dirname, fileName);
  const input = readFileSync(filePath, "utf-8").trim();
  const [rangesPart, idsPart] = input.split("\n\n");

  const freshRanges = rangesPart.split("\n");
  const ingredientIds = idsPart.split("\n").map(Number);

  return [freshRanges, ingredientIds];
}

function parseRange(range: string): Range {
  const [start, end] = range.split("-").map(Number);
  return [start, end];
}

function isFresh(id: number, ranges: string[]): boolean {
  return ranges.some((range) => {
    const [start, end] = parseRange(range);
    return id >= start && id <= end;
  });
}

export function countFreshIngredients(ranges: string[], ids: number[]) {
  return ids.filter((id) => isFresh(id, ranges)).length;
}

function sortByStart(ranges: RangeList): RangeList {
  return ranges.sort(([a], [b]) => a - b);
}

export function mergeRanges(ranges: string[]): RangeList {
  const parsed = ranges.map(parseRange);
  const sorted = sortByStart(parsed);

  const merged: RangeList = [sorted[0]];

  for (const [currentStart, currentEnd] of sorted.slice(1)) {
    const last = merged[merged.length - 1];
    const [, lastEnd] = last;

    if (currentStart <= lastEnd) {
      last[1] = Math.max(lastEnd, currentEnd);
    } else {
      merged.push([currentStart, currentEnd]);
    }
  }

  return merged;
}

export function countFreshIDs(merged: RangeList): number {
  return merged.reduce((sum, [start, end]) => sum + (end - start + 1), 0);
}

function main() {
  const [freshRanges, ingredientIds] = loadIngredients("input.txt");

  const part1 = countFreshIngredients(freshRanges, ingredientIds);
  console.log("Part 1 — Fresh available IDs:", part1);

  const merged = mergeRanges(freshRanges);
  const part2 = countFreshIDs(merged);
  console.log("Part 2 — Total fresh IDs:", part2);
}

if (require.main === module) {
  main();
}
