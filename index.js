// DEPENDENCIES
const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');

// DATA
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
    message: 'Add your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Add your email:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Pick your license:',
    choices: ['MIT', 'Apache 2.0', 'GPLv3'],
  },
];

// FUNCTIONS
function promptUser() {
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
}

function init() {
  promptUser();
}

// INITILIZATIONS
init();
