const Employee = require('./Employee');

class Manager extends Employee{
    constructor(officeNumber) {
        super(empName, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }

    getRole = () =>  this.role;
}

module.exports = Manager;
