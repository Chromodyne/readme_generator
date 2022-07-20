//Generates a license badge depending on which license the user selected during inquiry.
function renderLicenseBadge(license) {
  
  //Check that the license is not "None" then render the badge. If it is "None" then return the empty string.
  if (license !== "None") {

    //Return the badge image based on the string passed in from license.
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;

  } else {

    return;

  }

}

//TODO: Figure this out.
function renderLicenseLink(license) {

}

//Used by the renderLicenseSection function to generate the license text. May be merged.
function generateLicenseText(license) {

  let licenseText = `## License ##\n
  \n
  The license for this project is a ${license} license.`;

  return licenseText;

}

function renderLicenseSection(license) {

  if (license !== "None") {
    return generateLicenseText(license);
  } else {
    return "";
  }

}

//Generates the markdown used in creating the README.md file.
function generateMarkdown(data) {

  return `# ${data.project} #\n
  ${renderLicenseBadge(data.license)}

  ## Contents ##

  1. [Description](#description)


  3. [Installation](#installation)

  4. [Usage](#usage)

  5. [Contributions](#contributions)

  ## Description ##

  ${data.description}

  ## License ##
  ${data.license}

  ## Installation ##
  ${data.installation}

  ## Use ##
  ${data.usage}

  ## Contributions ##
  ${data.contributions}

`;
}

module.exports = generateMarkdown;
