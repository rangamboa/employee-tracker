USE staff_db;

INSERT INTO department (name)
VALUES  ('Management'),
        ('Marketing'),
        ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES  ('Manager', 85000, 1),
        ('Marketing Coordinator', 60000, 2),
        ('Account Representative', 50000, 3),
        ('District Lead', 75000, 3);
