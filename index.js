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
  .then(async ({ text, textCol, color, shape }) => { // Use async/await
    const shapesMap = {
      'Triangle': Triangle,
      'Square': Square,
      'Circle': Circle
    };

    const newShape = shapesMap[shape];
    if (newShape) {
      const mySVG = new newShape(color, text, textCol);
      const svgContent = mySVG.render();

      try {
        await fs.promises.writeFile('logo.svg', svgContent);
        console.log('Generated logo.svg');
        // Use dynamic import to load 'open' at runtime
        const open = (await import('open')).default;
        open('logo.svg'); // Open the generated file
      } catch (err) {
        console.error('Error creating or opening your new logo', err);
      }
    }
  })
  .catch((err) => console.log(err));