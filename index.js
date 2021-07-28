// The app needs these packages:
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

// const { restoreDefaultPrompts } = require('inquirer');
let choice;

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

function init() {

    console.log('\n');
    console.log('----- Welcome to Employee Tracker! -----');

    // Call main menu function.
    mainMenu();
}

const viewDepts = () => {
    db.query('SELECT id AS ID, name AS Department FROM department', (err, results) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(results);
            keepGoing();
        }
     });
}

const viewRoles = () => {
    db.query('SELECT role.title AS Title, role.id AS ID, department.name AS Department, role.salary AS Salary FROM role JOIN department ON role.department_id = department.id', (err, results) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(results);
            keepGoing();
        }
     });
}

const viewEmps = () => {
    db.query('SELECT employee.id AS ID, employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Title, department.name AS Department, role.salary AS Salary, employee.manager_id AS Manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id', (err, results) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(results);
            keepGoing();
        }
     });
}

const addDept = () => {

    inquirer
    .prompt([
    {
        type: 'input',
        name: 'newDept',
        prefix: '-',
        message: 'Enter the name of the new department.',
    },
    ])
    .then((answer) => {

        // Create query as a string that includes new department.
        thisQuery = 'INSERT INTO department (name) VALUES ("' + answer.newDept + '")';

        // Add department to table.
        db.query(thisQuery, (err, results) => {
            if (err) {
                console.log(err);
                db.end();
            } else {
                //Display all departments.
                viewDepts();
            }
         });
    });

}

const addRole = () => {

    inquirer
    .prompt([
    {
        type: 'input',
        name: 'newRole',
        prefix: '-',
        message: 'Enter the name of the new job role.',
    },
    {
        type: 'number',
        name: 'newSalary',
        prefix: '-',
        message: 'Enter the salary of the new job role.',
    },
    {
        type: 'input',
        name: 'newDept',
        prefix: '-',
        message: 'Enter the department of the new job role.',
    },
    ])
    .then((answer) => {

        // Create query as a string that includes new role information.
        thisQuery = 'INSERT INTO role (title, salary, department_id) VALUES ("' + answer.newRole + '", ' + answer.newSalary + ', ' + answer.newDept + ')';

        console.log(thisQuery);

        // Add role to table.
        db.query(thisQuery, (err, results) => {
            if (err) {
                console.log(err);
                db.end();
            } else {
                //Display all roles.
                viewRoles();
            }
         });
    });

}

const addEmp = () => {
    
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'newFirst',
        prefix: '-',
        message: 'Enter the first name of the new employeee.',
    },
    {
        type: 'input',
        name: 'newLast',
        prefix: '-',
        message: 'Enter the last name of the new employee.',
    },
    {
        type: 'number',
        name: 'newRole',
        prefix: '-',
        message: 'Enter the role of the new employee.',
    },
    {
        type: 'number',
        name: 'newMgr',
        prefix: '-',
        message: 'Enter the manager ID of the new employee.',
    },
    ])
    .then((answer) => {

        // Create query as a string that includes new employee information.
        thisQuery = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("' + answer.newFirst + '", "' + answer.newLast + '", ' + answer.newRole + ', ' + answer.newMgr + ')';

        //console.log(thisQuery);

        // Add new employee to table.
        db.query(thisQuery, (err, results) => {
            if (err) {
                console.log(err);
                db.end();
            } else {
                //Display all roles.
                viewEmps();
            }
         });
    });
}
const updateEmp = () => {
    
    db.query('SELECT employee.id AS ID, employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Title, department.name AS Department, role.salary AS Salary, employee.manager_id AS Manager FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id', (err, results) => {
        if (err) {
            console.log(err);
            db.end();
        } else {
            console.table(results);
        }
    });

    inquirer
    .prompt([
    {
        type: 'number',
        name: 'updateID',
        prefix: '-',
        message: 'Enter the ID of employee to be updated.',
    },
    {
        type: 'number',
        name: 'updatedRole',
        prefix: '-',
        message: 'Enter the new role for this employee.',
    },
    ])
    .then((answer) => {

        // Create query as a string that includes new employee information.
        thisQuery = 'INSERT INTO employee (role_id, manager_id) VALUES (' + answer.newRole + ', ' + answer.updatedRole + ')';

        console.log(thisQuery);

        // Add role to table.
        db.query(thisQuery, (err, results) => {
            if (err) {
                console.log(err);
                db.end();
            } else {
                //Display all roles.
                viewEmps();
            }
         });
    });
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

            console.log('\n');
            choice = answers.task[0];

            // View all departments.
            if (choice == 1) viewDepts();

            // View all roles.
            else if (choice == 2) viewRoles();

            // View all employees.
            else if (choice == 3) viewEmps();

            // Add a department.
            else if (choice == 4) addDept();

            // Add a role.
            else if (choice == 5) addRole();

            // Add an employee.
            else if (choice == 6) addEmp();

            // Update an employee role.
            else if (choice == 7) updateEmp();

            else db.end();

        });

    // keepGoing();
    
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
            else {
                console.log('\n----- Thanks for using Employee Tracker. Goodbye!');
                console.log('\n');
                db.end();
            }
        });

}

// Initialize on application launch.
init();
