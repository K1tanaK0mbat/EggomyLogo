const inquirer = require('inquirer');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');

inquirer
.prompt (
    {
        type:'input',
        name:'text',
        message:'Enter 3 letters for logo' 
    },
    {
        type:'input',
        name:'textCol',
        message:'Choose text color'
    },
    {
    type:'list',
    name:'shape',
    message:'Choose a shape',
    choices: []
} ,
{
    type:'input',
    name:'shapeCol',
    message:'Choose the color for the shape'
}
)