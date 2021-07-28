SELECT *
    FROM department; 

SELECT *
    FROM role; 

SELECT *
    FROM employee; 

SELECT role.title, role.id, department.name, role.salary
    FROM role
    JOIN department ON role.department_id = department.id;
