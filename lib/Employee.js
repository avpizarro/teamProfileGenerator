class Employee {
  constructor(empName, id, email, role) {
    this.empName = empName;
    this.id = id;
    this.email = email;
    this.role = role
  }

  getName = () => this.empName;
  getId = () => this.id;
  getEmail = () => this.email;
  getRole = () => this.role;
}

module.exports = Employee;
