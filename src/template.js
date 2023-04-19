// this is where code for employee templates will be passed through

function employeeTemplate(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
        <div class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
        <p class="card-text">${data.role}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${data.id}</li>
        <li class="list-group-item">${data.email}</li>
        <li class="list-group-item">${data.officeNumber} ${data.github} ${data.school}</li>
        </ul>
        <div class="card-body">
        </div>
        </div>
    </body>
    </html>`

}
module.exports = employeeTemplate;