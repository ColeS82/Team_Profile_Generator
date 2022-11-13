const inquirer = require('inquirer');
const fs = require('fs');
const htmlGen = require('./htmlGen')

inquirer.prompt([
{
    name: 'greetings',
    message: 'Welcome to the "Team Profile Generator"!\n What will the name of this file be?'
},
{
    name: 'manager',
    message: 'Who is the team manager for this project?'
},
{
    name: 'managerID',
    message: `What is the manager's ID`,
}
])

.then((answers) => {
    const responses = htmlGen(answers)
    const fileName = `${answers.greetings.toLowerCase().split(' ').join('')}.html`;
    fs.writeFile(fileName, responses, (err) => err ? console.log(err) : console.log('success'))
})