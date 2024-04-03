#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 15000;
let myPin = 7867;
console.log("To test my atm here is the pin:", `${myPin}`);
console.log("Balance in my account is:", `${myBalance}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select options",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:", `${myBalance}`);
        }
        else {
            console.log("insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your current balance is:", `${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let cashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "select fash cash",
                type: "list",
                choices: ["500", "1000", "5000", "10000"]
            }
        ]);
        console.log("Your remaining balance is:", `${myBalance - cashAns.cash}`);
    }
}
else {
    console.log("Incorrect pin code");
}
