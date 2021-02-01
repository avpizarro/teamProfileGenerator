function render(data) {
    return ` 
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="src/style.css" />

    <script
      src="https://kit.fontawesome.com/55b8ef16f8.js"
      crossorigin="anonymous"
    ></script>

    <title>Team Profile Generator</title>
  </head>

  <body>
    <header>My Team</header>
    <section id="topResults">
      <div class="results-row1 row">
        <div class="col s6 m4 l3 xl2">
          <div class="card large">
            <div class="card-content black-text">
              <h6 class="card-title black-text">${data.empName}</h6>
              <div class="emp-id">ID: ${data.id }</div>
              <div class="contact" type="email">Email: ${data.email}</div>
              <div class="office-number">
                Office number: ${data.officeNumber}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="results-row2 row"></div>
    </section>
  </body>
</html>

`

}