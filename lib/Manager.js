const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }

  getRole = () => this.role;
}

function renderManager(answers) {
  return `        
    <div class="col s6 m4 l3 xl2">
      <div class="card small">
        <div class="card-content black-text">
          <h6 class="card-title">${answers.name}
            <div><i class="fas fa-mug-hot"></i>Manager</div>
          </h6>
          <div class="details emp-id">ID: ${answers.id}</div>
          <div class="details contact">Email: <a href="mailto:${answers.email}">${answers.email}</a></div>
          <div class="details office-number">
            Office number: ${answers.officeNumber}
          </div>
        </div>
      </div>
    </div>
`;
}

module.exports = {renderManager,

 Manager}