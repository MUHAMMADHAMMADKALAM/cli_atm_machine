#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 25000;
let myPin = 2002;

import chalk from "chalk";
console.log(chalk.yellowBright("_______Welcom to ATM_______"));

let pinAnswer = await inquirer.prompt([{

    name: "pin",
    message: "Enter your pin ",
    type: "number",

}]);

if (pinAnswer.pin === myPin) {
    console.log(chalk.greenBright("Correct pin number!!!"));

    let OperationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option",
                type: "list",
                choices: ["withdraw", "check balance", "fast cash"],
            }
        ]
    );

    if (OperationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]
        );
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;

            console.log(`Your remaning balance is: ${chalk.greenBright(myBalance)}`);
        }
        else {
            console.log(chalk.redBright(`Unable to process the trasaction! \n Your current balace is ${chalk.bgYellow(myBalance)}`));

        }
    }
    else if (OperationAns.operation === "check balance") {
        console.log(`Your balance is: ${chalk.greenBright(myBalance)}`);
    }
    else if (OperationAns.operation === "fast cash") {
        let fastCashAns = await inquirer.prompt(
            [
                {
                    name: "fcamount",
                    message: "Select your amount to withdraw",
                    type: "list",
                    choices: [1000, 5000, 10000, 15000]
                }
            ]
        );
        if (fastCashAns.fcamount <= myBalance) {
            myBalance -= fastCashAns.fcamount;
            console.log(`Your remaning balance is: ${chalk.greenBright(myBalance)}`);

        }
    }
}
else {
    console.log(chalk.bgRed("Incorrect pin number!!!"));
}





