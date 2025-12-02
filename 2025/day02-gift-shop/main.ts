import fs from "fs";
import path from "path";
/* 


On veut retrouver les faux ID dans chaque rangée et retourner le nombre

On a des range d'ID, séparé par des virgules, et séparé par un - à l'intérieur d'une range

Les motifs répétés deux fois sont des mauvais ID
*/

function loadIdRanges(filename: string): string[] {
  const filePath = path.resolve(__dirname, filename);

  const content = fs.readFileSync(filePath, "utf-8");
  return content.trim().split(",");
}

function getIdRange(range: string): number[] {
  const [start, end] = range.split("-").map(Number);
  return [start, end];
}

function isRepeatedPatternExactlyTwice(id: number): boolean {
  const str = String(id);
  if (str.length % 2 !== 0) {
    return false;
  }

  const half = str.length / 2;

  return str.slice(0, half) === str.slice(half);
}

function isRepeatedPatternAtLeastTwice(id: number): boolean {
  const str = String(id);
  const lengthId = str.length;

  for (let motifSize = 1; motifSize <= Math.floor(lengthId / 2); motifSize++) {
    if (lengthId % motifSize !== 0) {
      continue;
    }

    const motif = str.slice(0, motifSize);

    const rep = lengthId / motifSize;
    if (rep >= 2 && motif.repeat(rep) === str) {
      return true;
    }
  }

  return false;
}

function getInvalidIds(
  start: number,
  end: number,
  method: "part 1" | "part 2"
): number[] {
  let invalidIds: number[] = [];
  for (let currentId = start; currentId <= end; currentId++) {
    if (method === "part 1") {
      if (isRepeatedPatternExactlyTwice(currentId)) {
        invalidIds.push(currentId);
      }
    } else {
      if (isRepeatedPatternAtLeastTwice(currentId)) {
        invalidIds.push(currentId);
      }
    }
  }

  return invalidIds;
}

export function countInvalidId(
  ranges: string[],
  method: "part 1" | "part 2"
): number {
  let count = 0;
  ranges.forEach((range) => {
    const [start, end] = getIdRange(range);
    const invalidIds = getInvalidIds(start, end, method);
    count += invalidIds.reduce((acc, val) => acc + val, 0);
  });

  return count;
}

function main() {
  const idRanges = loadIdRanges("input.txt");

  console.log("Total Invalid ID (Part 1) ", countInvalidId(idRanges, "part 1"));
  console.log("Total Invalid ID (Part 2) ", countInvalidId(idRanges, "part 2"));
}

if (require.main === module) {
  main();
}
