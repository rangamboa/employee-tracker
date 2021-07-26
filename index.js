const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>cd ..
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
