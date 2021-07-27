SELECT *
    FROM employee 
    JOIN role ON employee.role_id = role.title;

SELECT *
    FROM employee; 

SELECT *
    FROM role
    JOIN department ON role.department_id = department.name;
