// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');

// DATA

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe the Usage of the app:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Describe how to contribute:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Describe any tests:',
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Add you github username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Add your email:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick your license',
  },
];

inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file generated successfully!');
    }
  });
});

// FUNCTIONS

// USER INTERACTIONS

// INITILIZATIONS

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
