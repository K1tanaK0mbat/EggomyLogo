const fs = require('fs');
const inquirer = require('inquirer');
const { Shape, Circle, Triangle, Square } = require('./lib/shape');

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
  .then(({ text, textCol, color, shape }) => {
    const shapeObject = new (eval(shape))(color, text, textCol);
    const svgContent = shapeObject.render();

    fs.writeFile('logo.svg', svgContent, (err) => {
      if (err) {
        console.error('Error creating new logo', err);
      } else {
        console.log('Your new logo is ready');
      }
    });
  })
  .catch((err) => console.log(err));
