import { stdin } from "node:process";
import chalk from "chalk";
import checkAge from "./ageCheck.js";
import { formatUser, getUserStatus } from "./userInfo.js";

console.log(chalk.red("Welcome to the User Info Program!"));
console.log(chalk.blue(">> What is your full name?"));

stdin.once("data", (username) => {
  username = String(username).trim();
  console.log(chalk.green(`Welcome here, dev ${username} to class!`));

  console.log(chalk.blue(">> How old are you (in years)? dont lie about it"));

  stdin.once("data", (age) => {
    age = parseInt(String(age).trim());

    let status = checkAge(age);
    let formatForConsole = formatUser(username, age, status);
    console.log(chalk.green(formatForConsole));

    if (status === "an Adult") {
      console.log(chalk.yellow("You are eligible to vote."));
    } else {
      console.log(chalk.yellow("You are not eligible to vote."));
    }
    process.exit();
  });
});

// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();
