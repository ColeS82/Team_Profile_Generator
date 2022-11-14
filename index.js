const inquirer = require('inquirer');
const fs = require('fs');
const htmlGen = require('./htmlGen')

inquirer.prompt([
    {
        name: 'team',
        message: 'What do you want to name this team?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What will be the role of this member?',
        choices: ['Manager', 'Engineer'],
    },
    {
        name: 'name',
        message: "What is the this person's name?",
    },
    {
        name: 'id',
        message: `What is the employee ID?`,
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
    }
)