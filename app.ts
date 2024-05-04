#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log("=".repeat(50));
console.log(chalk.bold.yellow("\n \t\t AZ Word-Counter"));
console.log("=".repeat(50));

let answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answers.Sentence.trim().split(" ");

console.log("=".repeat(50));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(50));

