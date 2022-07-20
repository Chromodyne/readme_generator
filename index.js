//Necessary imports.
const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

//Array containing the questions inquirer uses.
const questions = [
    "What is your GitHub Username?",
    "What is your email address?",
    "What is the name of your project?",
    "What would you like your description text to be?",
    "What are your installation instructions? (e.g npm i ...)",
    "What are your usage instructions?",
    "What license does your project use?",
    "What are your contribution instructions?",
    "What are your testing instructions?"
];

//Array holding the various licenses. Not an exhaustive list.
const licenseOptions = [
    "MIT",
    "GPLv3",
    "GPLv2",
    "AGPL_v3",
    "LGPL_v3",
    "Apache_2.0",
    "MIT",
    "MPL_2.0",
    "CCv3",
    "None"];

//Writes the file generated to the current working directory.
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

//Get user input using inquirer.
function getUserData () {
    inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "username",
        },
        {
            type: "input",
            message: questions[1],
            name: "email",
        },
        {
            type: "input",
            message: questions[2],
            name: "project",
        },
        {
            type: "input",
            message: questions[3],
            name: "description",
        },
        {
            type: "input",
            message: questions[4],
            name: "installation",
        },
        {
            type: "input",
            message: questions[5],
            name: "usage"
        },
        {
            type: "list",
            message: questions[6],
            choices: licenseOptions,
            name: "license"
        },
        {
            type: "input",
            message: questions[7],
            name: "contributions"
        },
        {
            type: "input",
            message: questions[8],
            name: "testing"
        }
    
        //After grabbing user data through prompts
    ]).then( (response) => {
        writeReadme(response);
    })
}

//This function writes to the generated README using the data received from the inquirer input.
function writeReadme(data) {
    //Pass destructured objects from inquirer to markdownGenerator form README then write
    writeToFile("./generated/README.md", markdownGenerator({...data}));
    console.log("README generated successfully and placed in the ./generated folder.");
}

//Called on open. Starts inquiry.
function init() {
    getUserData();
}

// Function call to initialize app
init();