function renderStart() {
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
    <section>
      <div class="results-row1 row">
`
}

module.exports = renderStart
