const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school) {
        super(name, id, email, role);
        this.school = school;
    }
    getGithub() {
        console.log(this.school);
    }
    getRole = () => this.role;
}

module.exports = Intern;
