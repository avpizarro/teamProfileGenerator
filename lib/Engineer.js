const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(github) {
        super(name, id, email, role);
        this.github = github;
    }
    getGithub() {
        console.log(this.github);
    }
    getRole = () => this.role;
}

module.exports = Engineer;
