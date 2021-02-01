const Employee = require('./Employee');

class Intern extends Employee{
    constructor(school) {
        super(empName, id, email, 'Intern');
        this.school = school;
    }
    getSchool = () => this.school;
    getRole = () => this.role;
}

module.exports = Intern;
