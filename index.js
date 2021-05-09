const inquirer = require('inquirer');
const fs = require('fs');
const template = require('./template')
const questions = [
    {
        type:'input',
        name:'projectTitle',
        message:'What is the title of your project? (Required)',
    },

    {
        type:'input',
        name:'description',
        message:'Please enter a brief description of your project. (Required)',
    },

    {
        type:'list',
        name:'installation',
        message:'Is installation required to launch your project?',
        choices:['Yes', 'No'],
    },

    {
        type:'input',
        name:'usage',
        message:'How is this project used?',
    },

    {
        type:'list',
        name:'license',
        message:'Please choose a license for your project.',
        choices:[
        'MIT' [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT), 
        'Mozilla-Public' [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0), 
        'BSD' [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause), 
        'Apache' [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)],
    },

    {
        type:'input',
        name:'contribution',
        message:'How can people contribute to your project?',
    },

    {
        type:'input',
        name:'contribution',
        message:'How has this project been tested?',
    },

    {
        type:'input',
        name:'github',
        message:'Please enter your Github user name. (Required)',
    },

    {
        type:'input',
        name:'email',
        message:'Please enter your email address. (Required)',
    },
]

inquirer.prompt(questions).then((answers) => {
    fs.writeFile('DEMO_README.md', template(answers), (err) => {
        console.log("done");
    });
});
