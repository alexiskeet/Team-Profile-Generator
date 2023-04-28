// this is where code for employee templates will be passed through

function employeeTemplate(data1, data2) {
  if (data2.officeNumber) {
    var newData2 = data2.officeNumber;
  }; 
  if (data2.github) {
    var newData2 = data2.github;
  }; 
  if (data2.school) {
    var newData2 = data2.school;
  };
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
        <h5 class="card-title">${data1.name}</h5>
        <p class="card-text">${data1.role}</p>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">${data1.id}</li>
        <li class="list-group-item">${data1.email}</li>
        <li class="list-group-item">${newData2}</li>
        </ul>
        <div class="card-body">
        </div>
        </div>
    </body>
    </html>`

}
module.exports = employeeTemplate;