//Imports inquirer, fs, and the generateMarkdown.js funcionalities into the index.js file.
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/generateLogo');


const questions = [{
  type: 'input',
  message: 'Please enter your initials (up to three):',
  name: 'initials',
},
{
  type: 'input',
  message: 'Please enter a text color:',
  name: 'textColor',
},
{
  type: 'list',
  message: 'Please choose a logo shape:',
  name: 'shape',
  choices: ['Circle', 'Square', 'Triangle']
},
{
  type: 'input',
  message: 'Please enter a shape color:',
  name: 'shapeColor',
}];


inquirer
  .prompt(questions)
  .then((response) => {
    console.log(response)
  let logoShape;
        switch (response.shape) {
        case 'Circle': 
          logoShape = (new Circle(response.initials, response.textColor, response.shapeColor));
          break;
        case 'Square':
          logoShape = (new Square(response.initials, response.textColor, response.shapeColor));
          break;
        case 'Triangle':
          logoShape = (new Triangle(response.initials, response.textColor, response.shapeColor));
          break;
        default:
          break;
      }

    console.log(logoShape)
    fs.writeFile(__dirname + '/examples/logo.svg', logoShape.newShape(), (err) =>
    err ? console.log('Please complete the form') : console.log('Generated logo.svg.'))
  });
