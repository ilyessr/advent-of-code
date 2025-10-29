import * as crypto from "crypto";

function hashMD5(data: string): string {
  return crypto.createHash("md5").update(data).digest("hex");
}

export const findNumberForHashing = (
  secretKey: string,
  zeroCount: number
): number => {
  let candidate: number = 0;
  const zeroString = "0".repeat(zeroCount);

  while (true) {
    const hashInput = secretKey + candidate;
    const hash = hashMD5(hashInput);

    if (hash.startsWith(zeroString)) {
      return candidate;
    }
    candidate++;
  }
};

export function main() {
  const secretKey = "yzbqklnj";
  const zeroCount = 6;

  console.log(`Searching for hash starting with ${zeroCount} zeros...`);
  const result = findNumberForHashing(secretKey, zeroCount);
  console.log(`\n✅ Result found: ${result}`);
}

if (require.main === module) {
  main();
}
