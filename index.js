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
const mainQs = {
    initial: [ {
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
      }],
        engineer : [
          {
              type: 'input',
              name: 'github',
              message: 'What is your github name?',
          }, 
          {
              type: 'input',
              name: 'quit',
              message: 'do you want to quit',
              choices: ['true', 'false'],
          }
      ],
      intern : [
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
        }, 
        {
            type: 'input',
            name: 'quit',
            message: 'do you want to quit',
            choices: ['true', 'false'],
        }
    ],
    manager : [
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team managers office number?',
        }, 
        {
            type: 'input',
            name: 'quit',
            message: 'do you want to quit',
            choices: ['true', 'false'],
        }
    ],
  }

  function prompt(questions) {
    inquirer.prompt(questions).then( response => {
  if (response.role === "Engineer") {
   //all of the code to make it work depending in the role
   
  }
  if (response.role === "Intern") {
   //all of the code to make it work depending in the role
  }
  if (response.role === "Manager") {
    //all of the code to make it work depending in the role
   }
  if(response.quit === "true") {
  //here you write the file and return;
  } else {
     prompt(questions) // starts the questionnaire from the begging to add another employee. 
   }
  })
  }

  function main() {
    prompt(mainQs["initial"]);
   }
