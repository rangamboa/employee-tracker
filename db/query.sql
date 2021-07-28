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

SELECT employee.id, employee.first_name, employee.last_name, role.title
    FROM employee
    JOIN role
    ON employee.role_id = role.id;
