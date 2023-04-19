const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./src/template');
const path = require('path');
const util = require('util');
const { writeFile } = require('fs').promises;

const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

const newTeamMember = [];

// questions
const mainQs = [
    {
        type: 'input',
        name: "name",
        message: "What is your name?",
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?',
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Engineer', 'Intern', 'Manager', 'Exit'],
    }
    ]

const employeeType = responses.role;

// if manager is selected

if (employeeType === 'Manager') {
    const managerQs = [
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
        },
    ]
    const newManager = new Manager(
        responses.name,
        responses.id,
        responses.email,
        responses.officeNumber
    );
    newTeamMemeber.push(newManager);
}

// if engineer is selected
if (employeeType === 'Engineer') {
    const engineerQs = [
        {
            type: 'input',
            name: 'github',
            message: 'What is your github?',
        },
    ]
    const newEngineer = new Engineer(
        responses.name,
        responses.id,
        responses.email,
        responses.github
    );
    newTeamMember.push(newEngineer)
}

// if intern is selected
if (employeeType === 'Intern') {
    const internQs = [
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
        },
    ]
    const newIntern = new Intern (
        responses.name,
        responses.id,
        responses.email,
        responses.school
);
newTeamMemeber.push(newIntern);
};


//function to write html file
function writeToFile(fileName, responses) {
    return fs.fstat.writeFileSync(path.json(process.cwd(), fileName), responses);
};
 

//function to initialize app
function init() {

    inquirer.prompt(mainQs)
    .then((responses) => writeFile('employees.html', template(responses)))
    .then(() => console.log('Sucessfully wrote to employees.html!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
