const inquirer = require("inquirer");
const js = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const render = require("./render.js")

let managers = [];
let engineers = [];
let interns = [];

function getManagerInfo() {
  inquirer
    .prompt([
      {
        name: "empName",
        type: "input",
        message: "What is the team's Manager name:",
      },
      {
        name: "id",
        type: "input",
        message: "Enter their employee's id:",
      },
      {
        name: "email",
        type: "input",
        message: "Enter their email address:",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is their office number?",
      },
      {
        name: "addEmployee",
        type: "list",
        choices: ["Engineer", "Intern", "Complete"],
      },
    ])
    .then((answers) => {
      managers.push(answers.empName, answers.id, answers.email, answers.officeNumber);
      console.log(managers);
      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } 
    });
}

function getEngineerInfo() {
  inquirer
    .prompt([
      {
        name: "empName",
        type: "input",
        message: "Enter the employee's name:",
      },
      {
        name: "id",
        type: "input",
        message: "Enter the employee's id:",
      },
      {
        name: "email",
        type: "input",
        message: "Enter the employee's email address:",
      },
      {
        name: "github",
        type: "input",
        message: "What is their github profile?",
      },
      {
        name: "addEmployee",
        type: "list",
        choices: ["Engineer", "Intern", "Complete"],
      },
    ])
    .then((answers) => {
      engineers.push(answers.empName, answers.id, answers.email, answers.github);
      console.log(engineers);
      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } 
    });
}

function getInternInfo() {
  inquirer
    .prompt([
      {
        name: "empName",
        type: "input",
        message: "Enter the employee's name:",
      },
      {
        name: "id",
        type: "input",
        message: "Enter the employee's id:",
      },
      {
        name: "email",
        type: "input",
        message: "Enter the employee's email address:",
      },
      {
        name: "school",
        type: "input",
        message: "Which school do they go to?",
      },
      {
        name: "addEmployee",
        type: "list",
        choices: ["Engineer", "Intern", "Complete"],
      },
    ])
    .then((answers) => {
      interns.push(answers.empName, answers.id, answers.email, answers.school);
      console.log(interns);
      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } 
    });
}

getManagerInfo();
