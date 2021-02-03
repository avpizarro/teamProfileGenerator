class Employee {
  constructor(name, id, email, role) {
    this.name = name;
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
