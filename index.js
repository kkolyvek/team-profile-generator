// =====================
// IMPORTS AND VARIABLES
// =====================
// const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./util/generateHtml.js');

const questions = [
    {
        type: 'list',
        message: 'Select employee to add:',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ],
        name: 'employee'
    },
    {
        type: 'input',
        message: 'Enter employee name:',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Enter employee ID:',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Enter employee email:',
        name: 'email'
    },
    {
        type: 'number',
        message: "Enter office number:",
        name: 'officeNumber',
        when: response => response.employee === 'Manager'
    },
    {
        type: 'input',
        message: "Enter GitHub username:",
        name: 'github',
        when: response => response.employee === 'Engineer'
    },
    {
        type: 'input',
        message: "Enter school:",
        name: 'school',
        when: response => response.employee === 'Intern'
    },
    {
        type: 'confirm',
        message: 'Add another employee?',
        name: 'contBool'
    }
];



// =========
// FUNCTIONS
// =========
const writeToFile = (data) => {
    fs.writeFile('index.html', data, (err) => {
        err ? console.log(err) : console.log('Sucess! File created.');
    });
};

const init = team => {
    inquirer
        .prompt(questions)
        .then(response => {
            let emp = undefined;
            const name = response.name;
            const id = response.id;
            const email = response.email;
            
            if (response.employee === 'Manager') {
                emp = new Manager(name, id, email, response.officeNumber);
            } else if (response.employee === 'Engineer') {
                emp = new Engineer(name, id, email, response.github);
            } else {
                emp = new Intern(name, id, email, response.school);
            };
            
            team.push(emp);

            if (response.contBool === true) {
                init(team);
            } else {
                // generate file
                console.log('Generating file...');
                writeToFile(generate(team));
            };
        });
};



// ===
// RUN
// ===

// init array of employee objects
let team = [];

// build team and generate file
init(team);