// I want to create a card for each employee entry
// for each employee entered I want the card generated with employees info and inserted into the html body for every employee
// for loop through entries 
// 


function htmlGen(answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
        <link href="./assets/styles.css" rel="stylesheet">
        <title>${answers.team}</title>
    </head>
    <body>
        <main class='w-75 mx-auto'>
                <h1 class='mt-5 text-center bg-secondary p-2'>${answers.team}</h1>
                <div class="col-4 mt-4">
        <div class="card h-100 mt-5">
            <div class="card-header">
                <h3>${answers.name}</h3>
                <h4>${answers.role}</h4>
            </div>
            <div class="card-body">
                <p class="id">ID: ${answers.id}</p>
                <p class="email">Email: <a href="mailto:${answers.email}">${answers.email}</a></p>
                <p class="office">Office Number: ${answers.office}</p>
            </div>
        </div>
    </div>
        </main>
    </body>
    </html>
    `
}

module.exports = htmlGen