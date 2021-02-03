const int = require('../lib/Intern');

describe("Intern", () => {
    describe("Create intern", () => {
      // Positive test
      it("should create an object with an empName, id, email, role and school name", () => {
        // Arrange
        const intern = new int.Intern('iternName', 'internID','internEmail', 'internSchool');
        // Assert
        expect(intern.school).toEqual('internSchool');
      });
    });
});