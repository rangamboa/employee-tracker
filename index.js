// The app requires these packages to be installed.
const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const path = require('path');
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

    console.log(`\n----- Connected to the movies_db database. -----`)
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

    console.log('\n----- Welcome to Employee Tracker! -----');

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
            prefix: '-',
            message: 'Please select an option from the following menu:',
            choices: ['1. View All Departments', '2. View All Roles', '3. View All Employees', '4. Add a Department', '5. Add a Role' ,'6. Add an Employee','7. Update an Employee Role'],
        },
        ])
        .then((answers) => {

            choice = answers.task[0];
            console.log(choice);

            if (answers.task[0])

        });
    return;
}

// Initialize on application launch.
init();
