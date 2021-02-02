const Employee = require("./Employee");

class Intern extends Employee {
  constructor(school) {
    super(empName, id, email, "Intern");
    this.school = school;
  }
  getSchool = () => this.school;
  getRole = () => this.role;
}

function renderIntern(answers) {
  return `  
    <div class="col s6 m4 l3 xl2">
      <div class="card small">
        <div class="card-content black-text">
          <h6 class="card-title">${answers.name}
            <div><i class="fas fa-user-graduate"></i>Intern</div>
          </h6>
          <div class="details emp-id">ID: ${answers.id}</div>
          <div class="details contact">Email: <a href="mailto:${answers.email}">${answers.email}</a></div>
          <div class="details school">
            School name: ${answers.school}
          </div>
        </div>
      </div>
    </div>
`;
}

module.exports = renderIntern;
// module.exports = Intern;
