const card = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `
}


function htmlGen(answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <title>${answers.team}</title>
    </head>
    <body>
        <main class='w-75 mx-auto'>
            <section>
                <h1 class='mt-5 text-center bg-secondary p-2'>${answers.manager}</h1>
                <p>Member ID Number: <br>
                ${answers.managerID}
                </p>
            </section>
        </main>
    </body>
    </html>
    `
}

module.exports = htmlGen