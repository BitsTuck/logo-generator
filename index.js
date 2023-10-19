//Imports inquirer, fs, and the generateMarkdown.js funcionalities into the index.js file.
const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./utils/generateLogo');

// newCircle = new Circle ('blt', 'blue', 'red')
// console.log(newCircle)
// console.log(newCircle.newShape())

// newSquare = new Square ('blt', 'blue', 'red')
// Questions posed by the app, including type and potential answer choices (see: license)
const questions = [ {
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
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
      type: 'input',
      message: 'Please enter a shape color:',
      name: 'shapeColor',
    }];

    function generateLogo(data) {
        return `${logoShape}`
    }
    
    //invokes inquirer and directs the writing of the ReadMe file when the questions have been answered. Error handling included.

inquirer
  .prompt(questions)
  .then((response) => {
    let newShape = new Triangle(response.initials, response.textColor, response.shapeColor); 
    // let newShape = new Square(response.initials, response.textColor, response.shapeColor)
    fs.writeFile('logo.svg', newShape.newShape(), (err) =>
    err ? console.log('Please complete the form') : console.log('Thanks! Click on logo.svg to see your logo.'))
  }); 
//   SWITCH CASE GOES at letNewShape