const inquirer = require('inquirer');
const fs = require('fs');
const htmlGen = require('./htmlGen')

inquirer.prompt([
{
    name: 'team',
    message: 'What do you want to name this team?'
},
{
    name: 'manager',
    message: 'Who is the team manager for this project?'
},
{
    name: 'managerID',
    message: `What is the manager's ID?`,
},
{
    name: 'email',
    message: `What is the manager's email address?`
},
{
    name: 'office',
    message: `What is the manager's office number?`
},

])


.then((answers) => {
    const responses = htmlGen(answers)
    const fileName = 'index.html';
    fs.writeFile(fileName, responses, (err) => err ? console.log(err) : console.log('success'))
})