USE staff_db;

INSERT INTO department (name)
VALUES  ('Administration'),
        ('Diagnostic X-Ray'),
        ('Computed Tomography'),
        ('Magnetic Resonance Imaging'),
        ('Ultrasonography'),
        ('Nuclear Medicine');

INSERT INTO role (title, salary, department_id)
VALUES  ('Manager', 125000, 1),
        ('Assistant Manager', 100000, 1),
        ('X-Ray Tech', 60000, 2),
        ('CT Tech', 60000, 3),
        ('MRI Tech', 60000, 4),
        ('Sonographer', 60000, 5),
        ('Nuclear Medicine Tech', 70000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Penny', 'Craig', 1, NULL),
        ('Ran', 'Gamboa', 2, 1),
        ('Raychel', 'Crider', 3, 2),
        ('Ken', 'Puffenbarger', 4, 2),
        ('Daniela', 'Vela', 5, 2),
        ('Dana', 'Harp', 6, 2),
        ('Patrick', 'Reich', 7, 2);