import fs from "fs";
import path from "path";

function loadBanks(fileName: string): string[] {
  const filePath = path.resolve(__dirname, fileName);
  const input = fs.readFileSync(filePath, "utf-8");
  const banks = input.split("\n");
  return banks;
}

function best2Digits(bank: string) {
  let firstBatterie = bank[0];
  let secondBatterie = "0";

  for (let i = 1; i < bank.length; i++) {
    const currentBatterie = bank[i];

    if (i < bank.length - 1 && currentBatterie > firstBatterie) {
      firstBatterie = currentBatterie;
      secondBatterie = "0";
    } else if (currentBatterie > secondBatterie) {
      secondBatterie = currentBatterie;
    }
  }

  return firstBatterie + secondBatterie;
}

function bestKDigits(bank: string, k = 12): string {
  const stack: string[] = [];
  let toRemove = bank.length - k;

  for (const digit of bank) {
    while (
      toRemove > 0 && // canRemove
      stack.length > 0 && // has Elements to remove
      stack[stack.length - 1] < digit // last digit on the stack is smaller
    ) {
      stack.pop();
      toRemove--;
    }

    stack.push(digit);
  }

  return stack.join("").slice(0, k);
}

function findBestBatteries(bank: string, digits: number): string {
  if (digits === 2) {
    return best2Digits(bank);
  }
  return bestKDigits(bank, digits);
}

export function getTotalJoltage(banks: string[], digits: number = 2): number {
  return banks.reduce((acc, bank) => {
    const best = findBestBatteries(bank, digits);
    return acc + Number(best);
  }, 0);
}

function main() {
  const banks = loadBanks("input.txt");
  console.log("Part 1 - total joltage:", getTotalJoltage(banks, 2));
  console.log("Part 2 - total joltage:", getTotalJoltage(banks, 12));
}

if (require.main === module) {
  main();
}
