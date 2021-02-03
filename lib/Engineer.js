const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, "Engineer");
    this.github = github;
  }
  getGithub = () => this.github;
  getRole = () => this.role;
}

function renderEngineer(answers) {
  return ` 
    <div class="col s6 m4 l3 xl2">
      <div class="card small">
        <div class="card-content black-text">
          <h6 class="card-title ">${answers.name}
            <div><i class="fas fa-glasses"></i>Engineer</div>
          </h6>
          <div class="details emp-id">ID: ${answers.id}</div>
          <div class="details contact">Email: <a href="mailto:${answers.email}">${answers.email}</a></div>
          <div class="details github">
            GitHub profile: <a href="https://github.com/${answers.github}" target="_blank">${answers.github}</a>
          </div>
        </div>
      </div>
    </div>
`
}

function renderEngineers(data) {
  let engineersHTML = "";

  data.forEach((element) => {
    engineersHTML += renderEngineer(element);
  });
  return engineersHTML;
}

module.exports = {renderEngineer,
  renderEngineers,
Engineer}

