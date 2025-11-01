import fs from "fs";

function loadInput(): string[] {
  return fs.readFileSync(`${__dirname}/input.txt`, "utf-8").trim().split("\n");
}

export function parseCircuit(lines: string[]) {
  let circuit: Record<string, string> = {};

  lines.forEach((line) => {
    const match = line.match(/^(.+) -> (\w+)$/);
    if (!match) {
      throw new Error(`Invalid instruction: ${line}`);
    }

    const [, expr, wire] = match;
    circuit[wire] = expr;
  });

  return circuit;
}

export function evaluate(
  wire: string,
  circuit: Record<string, string>,
  signals: Record<string, number>
): number {
  if (/^\d+$/.test(wire)) {
    return Number(wire);
  }

  if (signals[wire] !== undefined) {
    return signals[wire];
  }

  const expr = circuit[wire];

  let value: number;

  if (/^\w+$/.test(expr)) {
    value = evaluate(expr, circuit, signals);

    // bitwise NOT
  } else if (/^NOT (\w+)$/.test(expr)) {
    const [, a] = expr.match(/^NOT (\w+)$/)!;
    value = ~evaluate(a, circuit, signals) & 0xffff;

    // AND
  } else if (/^(\w+) AND (\w+)$/.test(expr)) {
    const [, a, b] = expr.match(/^(\w+) AND (\w+)$/)!;
    value = evaluate(a, circuit, signals) & evaluate(b, circuit, signals);

    // bitwise OR
  } else if (/^(\w+) OR (\w+)$/.test(expr)) {
    const [, a, b] = expr.match(/^(\w+) OR (\w+)$/)!;
    value = evaluate(a, circuit, signals) | evaluate(b, circuit, signals);

    // LSHIFT
  } else if (/^(\w+) LSHIFT (\d+)$/.test(expr)) {
    const [, a, shift] = expr.match(/^(\w+) LSHIFT (\d+)$/)!;
    value = (evaluate(a, circuit, signals) << Number(shift)) & 0xffff;

    // RSHIFT
  } else if (/^(\w+) RSHIFT (\d+)$/.test(expr)) {
    const [, a, shift] = expr.match(/^(\w+) RSHIFT (\d+)$/)!;
    value = evaluate(a, circuit, signals) >> Number(shift);
  } else {
    throw new Error(`Unknown expression: ${expr}`);
  }

  signals[wire] = value;
  return value;
}

function main() {
  const input = loadInput();
  const circuit = parseCircuit(input);

  // Part 1
  const signals: Record<string, number> = {};
  const result = evaluate("a", circuit, signals);
  console.log("Signal on wire a:", result);

  // Part 2
  const newCircuit = { ...circuit, b: String(result) };
  const result2 = evaluate("a", newCircuit, {});
  console.log("New signal on wire a after overriding b:", result2);
}

if (require.main === module) {
  main();
}
