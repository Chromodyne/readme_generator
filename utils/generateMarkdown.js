// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  
  //TODO: Add actual return values and finish up adding licenses.
  switch (license) {

    case "Apache 2.0 License":
      return;

    case "Boost":
      return;
    
    case "BSD 3-Clause":
      return;

    case "BSD 2-Clause":
      return;
    
    case "CreativeCommons 0":
      return;

    case "CreativeCommons ShareAlike 4.0 International":
      return;

    case "CreativeCommons Attribution-NonCommerical 4.0 International":
      return;
    
    //GNU Licenses
    case "GNU GPL 3.0":
      return;

    case "GNU GPL 2.0":
      return;
    
    case "GNU AGPL 3.0":
      return;

    case "GNU LGPL 3.0":
      return;
  
    case "GNU FDL 1.3":
      return;

    case "MIT":
      return;

    default:
      return "";

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //If LICENSE return link
  //ELSE return ""
  if (license != "None") {

  } else {
    return "";
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

//Let's put our initial license check in here so we don't have to repeat ourselves.
function checkLicense() {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
