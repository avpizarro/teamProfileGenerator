const inquirer = require("inquirer");
const js = require("fs");
const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");


inquirer
  .prompt([
    {
      name: "name",
      type: "input",
      message: "Enter your employee's name:",
    },
    {
      name: "id",
      type: "input",
      message: "Enter the employee's id:",
    },
    {
      name: "email",
      type: "input",
      message: "Enter your employee's email address:",
    },
    {
      name: "role",
      type: "checkbox",
      message: "What is your employee's role?",
      choices: ["Manager", "Engineer", "Intern"],
    },
  ])
  .then((answers) => {
    if (answers.role == "Manager") {
      inquirer.prompt({
        name: "officeNumber",
        type: "input",
        message: "What is their office number?",
      });
    } else if (answers.role == "Engineer") {
      inquirer.prompt({
        name: "github",
        type: "input",
        message: "What is their github profile?",
      });
    } else {
      inquirer.prompt({
        name: "school",
        type: "input",
        message: "Which school do they go to?",
      });
    }
  });
