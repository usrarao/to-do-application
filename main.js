#!/usr/bin/env code
// SHABANG
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
// print welcome message
console.log(chalk.blue.bold("\n \t Wellcome to code with Amber - ToDo-List Application\n"));
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellow("Enter your New Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in ToDo-List successfully `);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do You Want to  add more task?:",
            default: "False"
        }
    ]);
    conditions = addMoreTask.addmore;
}
console.log("Your updated Todo-List:", todoList);
