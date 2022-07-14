// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    "What is the name of your project?",
    "Would you like a description?",
    "Would you like a section for the deployed application?",
    "Would you like to include a screenshot?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

    //Begin asking user questions.
    console.log("Hello world!");

}

// Function call to initialize app
init();
