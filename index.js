// The app requires these packages to be installed.
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const path = require('path');
const { restoreDefaultPrompts } = require('inquirer');
let choice;

// Set up express.
const PORT = process.env.PORT || 3001;
const app = express();

// app.listen(PORT, () =>
//     console.log(`\n----- Listening at http://localhost:${PORT}`)
// );

// Express middleware
app.use(express.urlencoded({ extended: false }));

// Parse request body as JSON.
app.use(express.json());
app.use(express.static('public'));

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
  
        // MySQL username,
        user: 'root',
  
        // MySQL password

        password: 'password',
        database: 'staff_db'
    },

    console.log(`\n----- Now connected to the staff_db database. -----`)
);
  
app.get('/', (req, res) => res.send('Main'));

// app.get('/', (req, res) => {

//     // res.json(`${req.method} request received in /api/movies.`);
//     console.log('----- GET request in /.');
  
//     res.send('movie data');
  
//     // db.query('SELECT * FROM employee;', function (err, results) {
//     //   console.log(results);
//     //   res.json(results);
// });
  
function init() {

    console.log('\n');
    console.log('----- Welcome to Employee Tracker! -----');

    // Call main menu function.
    mainMenu();

}

const mainMenu = () => {

    console.log('\n');

    // Present main menu options.
    inquirer
        .prompt([
        {
            type: 'list',
            name: 'task',
            prefix: '-',
            message: 'Please select an option from the following menu:',
            choices: ['1. View All Departments', '2. View All Roles', '3. View All Employees', '4. Add a Department', '5. Add a Role' ,'6. Add an Employee','7. Update an Employee Role'],
        },
        ])
        .then((answers) => {

            choice = answers.task[0];
            console.log('\n');

            // View All Departments.
            if (choice == 1) {
                db.query('SELECT id AS ID, name AS Department FROM department', function (err, results) {
                   // console.log(results);
                   console.table(results);
                   keepGoing();
                });
            };

            // View All Roles.
            if (choice == 2) {
                db.query('SELECT role.title AS Title, role.id AS ID, department.name AS Department, role.salary AS Salary FROM role JOIN department ON role.department_id = department.id', function (err, results) {
                   // console.log(results);
                   console.table(results);
                   keepGoing();
                });
            };

            // View All Employees.
            if (choice == 3) {
                db.query('SELECT employee.id AS ID, employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Title, department.name AS Department, role.salary AS Salary, employee.manager_id AS Manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id', function (err, results) {
                   // console.log(results);
                   console.table(results);
                   keepGoing();
                });
            };

        });

    return;
    
};

function keepGoing() {

    inquirer
        .prompt([
        {
            type: 'confirm',
            name: 'goAgain',
            prefix: '-',
            message: 'Would you like to perform another task?',
        },
        ])
        .then((answer) => {
            if (answer.goAgain) mainMenu();
            else console.log('\n----- Thanks for using Employee Tracker. Goodbye!');
        });

}

// Initialize on application launch.
init();
