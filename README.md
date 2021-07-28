# Employee Tracker
Employee Tracker is a command-line application that manages a company's employee database, using the Node.js Inquirer package and MySQL.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

  1. [Description](#description)
  2. [Walkthrough](#walkthrough)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contribution](#contribution)
  6. [Testing](#testing)
  7. [Questions](#questions)
  8. [License](#license)
  
## Description

Employee Tracker is a command-line application that dynamically generates and maintains a database of company employees, including pertinent employment info. The user is presented with a main menu upon launch, through which several choices can be made for accessing and changing staff information.


## Walkthrough

Here is a link to a [walkthrough video on YouTube](https://youtu.be/mTI7VUzXJ2k) to show the application functionality. As evidenced by the video not all parts of the application are completely functional. I plan to resolve these errors in the near future.

## Installation

This project uses node, npm and MySQL. Install these packages if you do not have them on your local machine. 

## Usage

Use ``node .\index.js`` to launch this application. It will take you through a series of inputs through the main menu to manipulate information stored in the database.

## Contribution

Feel free to contribute. and please follow the [Contributor Covenant](http://contributor-covenant.org/version/1/3/0/):

* Fork the reposition
* Create a new branch (``git checkout -b improve-feature``)
* Make, add and commit the appropriate changes in the files
* Push to the branch (``git push origin improve-feature``)
* Create a Pull Request

Thanks!

## Testing

As of launch, the application is not fully functional. I couldn't figure out how to perform a self-join for the employee/manager display. Nor could I work out how to dynamically generate inquirer prompt choices from a table, which would have helped immensely with the input for the several "Add" and "Update" options. I plan to return to the code after studying and researching, to resolve these issues.

## Questions

Please don't hesitate to reach out to me via GitHub or email if you've got any questions! Thank you for checking out my code.

* [GitHub Profile](https://github.com/rangamboa) 

* [Email](mailto:rangamboa@gmail.com)

## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---
@2021 Ran Gamboa - ``Thanks for reading!``
