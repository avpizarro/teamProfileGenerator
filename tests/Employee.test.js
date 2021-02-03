const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Create employee", () => {
      // Positive test
      it("should create an object with an empName, id, email, role ", () => {
        // Arrange
        const employee = new Employee('employeeName', 'employeeId','employeeEmail', 'employeeRole');
        // Assert
        expect(employee.name).toEqual('employeeName');
      });
    });
});