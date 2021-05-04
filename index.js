const inquirer = require('inquirer');

const questions = [
    {
        type:'input',
        name:'project-title',
        message:'What is the title of your project? (Required)',
    },

    {
        type:'input',
        name:'description',
        message:'Please enter a brief description of your project. (Required)',
    },

    {
        type:'checkbox',
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
        choices:['MIT', 'Mozilla-Public', 'BSD', 'Apache'],
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
]