//Generates a license badge depending on which license the user selected during inquiry.
function renderLicenseBadge(license) {
  
  //Check that the license is not "None" then render the badge. If it is "None" then return the empty string.
  if (license !== "None") {

    //Return the badge image based on the string passed in from license.
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;

  } else {

    return "";

  }

}

//Used by the renderLicenseSection function to generate the license text. May be merged.
function generateLicenseText(license) {

  let licenseType = license;

  if (licenseType !== "None") {

    let licenseText = `The license for this project is covered under the ${license} license.`;

    return licenseText;

  } else {

    let licenseText = `This software does not have a license.`;

    return licenseText;

  }

}

//Generates the markdown used in creating the README.md file.
function generateMarkdown(data) {

  return `# ${data.project} #\n
  ${renderLicenseBadge(data.license)}

  ## Contents ##

  1. [Description](#description)

  2. [License](#license)

  3. [Installation](#installation)

  4. [Usage](#usage)

  5. [Contributions](#contributions)

  6. [Testing](#testing)

  7. [Questions](#questions)

  ## Description ##

  ${data.description}

  ## License ##
  ${generateLicenseText(data.license)}

  ## Installation ##
  ${data.installation}

  ## Use ##
  ${data.usage}

  ## Contributions ##
  ${data.contributions}

  ## Testing ##
  ${data.testing}

  ## Questions ##
  If you have any questions regarding this software, check out my GitHub at: https://github.com/${data.username} or email me at ${data.email}

`;
}

module.exports = generateMarkdown;
