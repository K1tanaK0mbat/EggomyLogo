const fs = require('fs');
const inquirer = require('inquirer');
const { writeFile } = require('fs');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter 3 letters for logo',
    },
    {
      type: 'input',
      name: 'textCol',
      message: 'For text color, enter keyword or hex value from here https://developer.mozilla.org/en-US/docs/Web/CSS/named-color',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape',
      choices: ['Triangle', 'Square', 'Circle'],
    },
    {
      type: 'input',
      name: 'color',
      message: 'For shape color, enter keyword or hex value from here https://developer.mozilla.org/en-US/docs/Web/CSS/named-color',
    },
])
  .then(({ text, textCol, color, shapeChoice }) => {
    this.text = text;
    this.textCol = textCol;
    this.color = color;
    shape = shapeChoice;

    let shapeObject;
    if (shape === 'Triangle') {
      shapeObject = new Triangle(this.text, this.textCol, this.color);
    } else if (shape === 'Square') {
      shapeObject = new Square(this.text, this.textCol, this.color);
    } else if (shape === 'Circle') {
      shapeObject = new Circle(this.text, this.textCol, this.color);
    }
    return shapeObject;
  })
  .then(() => {
    writeFile('logo.svg', this.shapeObject.render() ); 
  })
  .catch((err) => console.log(err));
