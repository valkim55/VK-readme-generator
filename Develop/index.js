// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHUb username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose the license for your project:',
        choices: ['Apache 2.0', 'MIT', 'GPL 3.0', 'leave blank']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the installation command'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please mention the instructions for the user, if any'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide details for collaboration/contributing requests',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log('Please wait');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    });
};

// Function call to initialize app
init();


