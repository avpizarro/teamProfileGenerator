const eng = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Create engineer", () => {
  
      it("should create an object with an empName, id, email, role and github ", () => {
     
        const engineer = new eng.Engineer('engineerName', 'engineerId', 'engineerEmail','github');
     
        expect(engineer.github).toEqual('github');
      });
    });
});