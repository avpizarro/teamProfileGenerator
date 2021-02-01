const Employee = require('./Employee');

class Manager extends Employee{
    constructor(officeNumber) {
        super(name, id, email, role);
        this.officeNumber = officeNumber;
    }
    getRole = () =>  this.role;
}

module.exports = Manager;
