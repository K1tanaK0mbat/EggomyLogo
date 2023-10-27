const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Triangle, Square } = require('./lib/shape');
const opn = require('opn');

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
      message: 'For text color, enter keyword or hex value https://developer.mozilla.org/en-US/docs/Web/CSS/named-color',
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
      message: 'For shape color, enter keyword or hex value https://developer.mozilla.org/en-US/docs/Web/CSS/named-color',
    },
  ])
  .then(({ text, textCol, color, shape }) => {
    const shapesMap = {
      'Triangle': Triangle,
      'Square': Square,
      'Circle': Circle
    };

    const newShape = shapesMap[shape];
    if (newShape) {
      const mySVG = new newShape(color, text, textCol);
      const svgContent = mySVG.render();


    fs.writeFile('logo.svg', svgContent, opn('logo.svg'),(err) => {
      if (err) {
        console.error('Error creating new logo', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  }
  })
  .catch((err) => console.log(err));
