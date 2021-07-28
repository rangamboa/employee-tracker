SELECT *
    FROM department; 

SELECT *
    FROM role; 

SELECT *
    FROM employee; 

SELECT id AS ID, name AS Department FROM department;

SELECT role.title AS Title, role.id AS ID, department.name AS Department, role.salary AS Salary
    FROM role
    JOIN department
    ON role.department_id = department.id;

SELECT employee.id AS ID, employee.first_name AS FirstName, employee.last_name AS LastName, role.title AS Title, department.name AS Department, role.salary AS Salary, employee.manager_id AS Manager
    FROM employee
    JOIN role
    ON employee.role_id = role.id
    JOIN department
    ON role.department_id = department.id;
