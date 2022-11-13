function htmlGen(answers) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <main>
            <section>
                <h1>${answers.manager}</h1>
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