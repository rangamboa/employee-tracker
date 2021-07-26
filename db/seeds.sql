USE staff_db;

INSERT INTO department (name)
VALUES  ('Management'),
        ('Computed Tomography'),
        ('MRI');

INSERT INTO role (title, salary, department_id)
VALUES  ('Manager', 125000, 1),
        ('Assistant Manager', 100000, 1),
        ('CT Tech', 60000, 2),
        ('MRI Tech', 70000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Penny', 'Craig', 1, NULL),
        ('Ran', 'Gamboa', 2, 1),
        ('Jason', 'Garbes', 3, 2),
        ('Ken', 'Puffenbarger', 3, 2),
        ('Daniela', 'Vela', 4, 2),
        ('Corrie', 'Ferguson', 4, 2);