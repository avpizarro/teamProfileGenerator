const renderEngineer = require("./Engineer.js");

function renderEngineers(data) {
  let engineersHTML = "";

  data.forEach((element) => {
    engineersHTML += renderEngineer(element);
  });
  return engineersHTML;
}

module.exports = renderEngineers;
