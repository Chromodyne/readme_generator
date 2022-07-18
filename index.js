// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub Username?",
    "What is your email address?",
    "What is the name of your project?",
    "What would you like your description text to be?",
    "What are your installation instructions? (e.g npm i ...)",
    "What are your usage instructions?",
    "What license does your project use?",
    "Are there any contributors?",
    ""
];

//Constructor to store input data locally for further use.
// function UserChoices (project, description, installation, usage, license, contributors) {

//     this.project = project;
//     this.description = description;
//     this.installation = installation;
//     this.usage = usage;
//     this.license = license;
//     this.contributors = contributors;

// }
 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    //Returns by writing a file...
    //Uses writeFileSync over writeFile for no callback.
    //TODO
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {

    getUserData();

}

//Get user input using inquirer.
function getUserData () {
    inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "username"
        },
        {
            type: "input",
            message: questions[1],
            name: "email"

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
            //TODO: Add all license choices. Reorganize.
            choices: ["MIT", "GPL 3.0", "GPL 2.0", "None", "Apache 2.0", "GLPL 2.1"],
            name: "license"
        },
        {
            type: "input",
            message: questions[7],
            name: "contributors"
        }

    ]).then((response) => {
        let readmeChoices = new UserChoices(response.project, response.description, response.installation, response.usage, response.license, response.contributors);
        console.log(readmeChoices);
    })
}

// Function call to initialize app
init();

module.exports = readmeChoices;