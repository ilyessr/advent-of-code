import fs from "fs";

const MOVES: Record<string, [number, number]> = {
  "^": [0, 1],
  v: [0, -1],
  ">": [1, 0],
  "<": [-1, 0],
};

export const countHouses = (directions: string): number => {
  let pos = [0, 0];

  const visited = new Set<string>();
  visited.add(`${pos[0]},${pos[1]}`);

  for (const direction of directions) {
    const [dx, dy] = MOVES[direction];
    pos[0] += dx;
    pos[1] += dy;
    visited.add(`${pos[0]},${pos[1]}`);
  }

  return visited.size;
};

export const countHousesWithRoboSanta = (directions: string): number => {
  let santaPos = [0, 0];
  let roboPos = [0, 0];
  const visited = new Set<string>();

  visited.add("0,0");

  for (let i = 0; i < directions.length; i++) {
    const actor = i % 2 === 0 ? santaPos : roboPos;
    const [dx, dy] = MOVES[directions[i]];
    actor[0] += dx;
    actor[1] += dy;
    visited.add(`${actor[0]},${actor[1]}`);
  }

  return visited.size;
};

export function main() {
  const data = fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim();
  console.log("Number of houses visited:", countHouses(data));
  console.log(
    "Number of houses visited with Robo:",
    countHousesWithRoboSanta(data)
  );
}

if (require.main === module) {
  main();
}
