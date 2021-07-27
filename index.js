// The app requires these packages to be installed.
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const path = require('path');

// Set up express.
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

// app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

// app.get('/send', (req, res) =>cd ..
//   res.sendFile(path.join(__dirname, 'public/sendFile.html'))
// );

// app.get('/routes', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/routes.html'))
// );

// app.listen(PORT, () =>
//   console.log(`Example app listening at http://localhost:${PORT}`)
// );

// console.table([
//     {
//       name: 'foo',
//       age: 10
//     }, {
//       name: 'bar',
//       age: 20
//     }
//   ]);

function init() {

    console.log('\n\n----- Welcome to Employee Tracker! -----\n');

    // Call main menu function.
    mainMenu();

}

const mainMenu = () => {

    // Present main menu options.
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'task',
            prefix: '!',
            message: 'Please select an option:',
            choices: ['1. View All Departments', '2. View All Roles', '3. View All Employees', '4. Add a Department', '5. Add a Role' ,'6. Add an Employee','7. Update an Employee Role'],
        },
        ])
        .then((answers) => {

            console.log(answers.task[0]);

        });
    return;
}

init();
