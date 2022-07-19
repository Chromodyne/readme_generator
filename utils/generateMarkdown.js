//Generates a license badge depending on which license the user selected during inquiry.
function renderLicenseBadge(license) {
  
  //Check that the license is not "None" then render the badge. If it is "None" then return the empty string.
  //TODO - Change license options in index.js to match the name directly so we can directly insert the name here
  //to reduce bloat.
  if (license !== "None") {

    //Return the badge image based on the string passed in from license.
    return `![License] https://img.shields.io/badge/License-${license}-blue.svg)`;

  } else {

    return;

  }

}


function renderLicenseLink(license) {

}

//Used by the renderLicenseLink function to generate the license text. May be merged.
function generateLicenseText(license) {

  return `## License ##
  
  The license for this project is a ${license} license.
  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license !== "None") {
    return generateLicenseText(license);
  }

}

// TODO: Create a function to generate markdown for README
//Generates the markdown used in creating the README.md file.
function generateMarkdown(data) {
  return `# ${data.title} #

  ${renderLicenseBadge(data.license)}

  ## Description ##

  ${data.description}

  ## Contents ##

  ##

`;
}

module.exports = generateMarkdown;
