const inquirer = require('inquirer');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const {writeFile} = require('fs');
const {createDocument} = require('./lib/svg');

const text = [];
const textCol = [];
const color = [];

inquirer
.prompt([
    {
        type:'input',
        name:'text',
        message:'Enter 3 letters for logo' 
    },
    {
        type:'input',
        name:'textCol',
        message:'For text color, enter keyword or hex value from here https://developer.mozilla.org/en-US/docs/Web/CSS/named-color'
    },
    {
        type:'list',
        name:'shape',
        message:'Choose a shape',
        choices: [Triangle, Square, Circle]
    },
    {
        type:'input',
        name:'color',
        message:'For shape color, enter keyword or hex value from here https://developer.mozilla.org/en-US/docs/Web/CSS/named-color'
    }
])
.then(({text, textCol, color, shape}) => {
    text.push(text);
    textCol.push(textCol);
    color.push(color);
    if (shape === Triangle) {
        new Triangle(text, textCol, color).render();
    } else if (shape === Square) {
        new Square(text, textCol, color).render();
    } else if (shape === Circle) {
        new Circle(text, textCol, color).render();
    }
})
.then(() => writeFile('logo.svg', createDocument(shape)))
.catch(err => console.log(err));
