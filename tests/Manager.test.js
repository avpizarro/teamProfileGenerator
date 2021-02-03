const man = require('../lib/Manager');

describe("Manager", () => {
    describe("Create Manager", () => {
      it("should create an object with an empName, id, email, role and an office number", () => {
        const manager = new man.Manager('managerName', 'managerId','managerEmail', 'officeNumber');

        expect(manager.officeNumber).toEqual('officeNumber');
      });
    });
});