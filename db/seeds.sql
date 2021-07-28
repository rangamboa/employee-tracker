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
        ('Supervisor', 100000, 1),
        ('X-Ray Tech', 50000, 2),
        ('CT Tech', 60000, 3),
        ('MRI Tech', 70000, 4),
        ('Sonographer', 70000, 5),
        ('Nuclear Medicine Tech', 70000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ('Penny', 'Craig', 1, NULL),
        ('Ran', 'Gamboa', 2, 1),
        ('James', 'Nganga', 3, 2),
        ('Chuck', 'Cromwell', 4, 2),
        ('Holly', 'Krohn', 5, 2),
        ('Kenny', 'Lorfils', 6, 2),
        ('Patrick', 'Reich', 7, 2);