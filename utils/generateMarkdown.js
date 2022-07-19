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

// TODO: Create a function to generate markdown for README
//Generates the markdown used in creating the README.md file.
function generateMarkdown(data) {
  //TODO: Finish this, flesh out contents. Decide on arrangement.
  //Separate blocks maybe? 
  return `# ${data.title} #\n
  \n
  ${renderLicenseBadge(data.license)}

  ## Description ##

  ${data.description}

  
  ## Contents ##

  ## Licensing ##

  ## Installation ##

  ## Use ##

  ## Contributing ##


`;
}

module.exports = generateMarkdown;
