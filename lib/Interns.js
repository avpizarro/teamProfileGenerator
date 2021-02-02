const renderIntern = require("./Intern.js");

function renderInterns(data) {
  let internsHTML = "";

  data.forEach((element) => {
    internsHTML += renderIntern(element);
  });
  return internsHTML;
}

module.exports = renderInterns;
