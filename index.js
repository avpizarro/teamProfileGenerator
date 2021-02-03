const inquirer = require("inquirer");
const fs = require("fs");
const man = require("./lib/Manager.js");
const eng = require("./lib/Engineer.js");
const int = require("./lib/Intern.js");
const renderStart = require("./lib/renderStart.js");
const renderEnd = require("./lib/renderEnd.js");

let manager = {};
let engineer = {};
let intern = {};
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
      manager = new man.Manager(
        answers.empName,
        answers.id,
        answers.email,
        answers.officeNumber
      );

      console.log(manager);

      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } else {
        fs.writeFile(
          "myTeam.html",
          renderStart() + man.renderManager(manager) + renderEnd(),
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
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
      engineer = new eng.Engineer(
        answers.empName,
        answers.id,
        answers.email,
        answers.github
      );

      engineers.push(engineer);

      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
        console.log(engineers);
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } else {
        fs.writeFile(
          "myTeam.html",
          renderStart() +
            man.renderManager(manager) +
            eng.renderEngineers(engineers) +
            int.renderInterns(interns) +
            renderEnd(),
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
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
      intern = new int.Intern(
        answers.empName,
        answers.id,
        answers.email,
        answers.school
      );

      interns.push(intern);
      
      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } else {
        fs.writeFile(
          "myTeam.html",
          renderStart() +
            man.renderManager(manager) +
            eng.renderEngineers(engineers) +
            int.renderInterns(interns) +
            renderEnd(),
          (err) => (err ? console.log(err) : console.log("Success!"))
        );
      }
    });
}

getManagerInfo();
