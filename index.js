const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const renderManager = require("./lib/Manager.js");
const renderEngineer = require("./lib/Engineer.js");
const renderIntern = require("./lib/Intern.js");
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
      manager = {
        name: answers.empName,
        role: "Manager",
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
      };
      console.log(manager);

      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } 
      else {
        fs.writeFile("myTeam.html", renderStart()+ renderManager(manager) + renderEnd(), (err) =>
          err ? console.log(err) : console.log("Success!")
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
      engineer = {
        name: answers.empName,
        role: "Engineer",
        id: answers.id,
        email: answers.email,
        gitHub: answers.github,
      };
      engineers.push(engineer);
      console.log(engineers);

      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } else {
        fs.writeFile("myTeam.html", renderStart() + renderManager(manager) + renderEngineer(engineer) + renderEnd(), (err) =>
          err ? console.log(err) : console.log("Success!")
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
      intern = {
        name: answers.empName,
        role: "Intern",
        id: answers.id,
        email: answers.email,
        school: answers.school,
      };
      interns.push(intern);
      console.log(interns);
      if (answers.addEmployee == "Engineer") {
        getEngineerInfo();
      } else if (answers.addEmployee == "Intern") {
        getInternInfo();
      } else {
        fs.writeFile("myTeam.html", renderStart() + renderManager(manager) + renderEngineer(engineer) + renderIntern(intern) + renderEnd(), (err) =>
          err ? console.log(err) : console.log("Success!")
        );
      }
    });
}

getManagerInfo();
