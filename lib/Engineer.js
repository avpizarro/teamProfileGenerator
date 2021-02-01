const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github) {
        super(empName, id, email, 'Engineer');
        this.github = github;
    }
    getGithub = () => this.github;
    getRole = () => this.role;
}

// function renderEngineer () {
//     return `
//     `

// }
/* <i class="fas fa-glasses"></i> */
module.exports = Engineer;
