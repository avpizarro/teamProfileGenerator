const Employee = require('./Employee');

class Manager extends Employee{
    constructor(officeNumber) {
        super(empName, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }

    getRole = () =>  this.role;
}

function renderManager() {
    return `        
    <div class="col s6 m4 l3 xl2">
    <div class="card small">
      <div class="card-content black-text">
        <h6 class="card-title black-text">${managers.name}
          <div><i class="fas fa-mug-hot"></i>Manager</div>
        </h6>
        <div class="details emp-id">ID: ${managers.id}</div>
        <div class="details contact" type="email">Email: ${managers.email}</div>
        <div class="details office-number">
          Office number: ${managers.officeNumber}
        </div>
      </div>
    </div>
  </div>
`

}

module.exports = { 
    Manager,
    renderManager
}
