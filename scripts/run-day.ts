import fs from "fs";
import path from "path";
import glob from "glob";
import chalk from "chalk";
import { performance } from "perf_hooks";
import { execSync } from "child_process";

const [, , year, day] = process.argv;

if (!year || !day) {
  console.error(chalk.red("❌ Usage: npm run day -- <year> <day>"));
  process.exit(1);
}

const paddedDay = day.padStart(2, "0");
const folderPattern = `${year}/day${paddedDay}-*`;
const matches = glob.sync(folderPattern);

if (matches.length === 0) {
  console.error(chalk.red(`❌ No folder found for ${year} day ${day}`));
  process.exit(1);
}

const folderPath = matches[0];
const mainFile = path.join(folderPath, "main.ts");

if (!fs.existsSync(mainFile)) {
  console.error(chalk.red(`❌ main.ts not found in ${folderPath}`));
  process.exit(1);
}

console.log(chalk.cyan(`🚀 Running: ${mainFile}\n`));

const start = performance.now();

try {
  execSync(`npx ts-node ${mainFile}`, { stdio: "inherit" });
} catch (error) {
  console.error(chalk.red("❌ Execution failed"));
  process.exit(1);
}

const end = performance.now();
const duration = (end - start).toFixed(2);
console.log(chalk.green(`\n✅ Done in ${duration}ms`));
