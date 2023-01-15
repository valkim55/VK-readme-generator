// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'leave blank') {
        return `![GitHub license](./images/nolicense.png)`;
    }

    return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license !== 'leave blank') {
        return `\n* [License](#license)\n`;
    }

    return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'leave blank') {
        return `## License The license for this project is ${license}`
    }

    return '';
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Navigation
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Questions & Collaboration](#questions-and-collaboration)
  - [Contribution](#contribution)


  ## Installation
  Please run the command below to install the dependencies:
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Tests
  ${data.test}

  ## Questions and collaboration
  For collaboration inquiries and any questions or suggestions please reach out at ${data.email} <br>
  You can find my portfolio at [${data.github}](https://github.com/${data.github}/)

  ## Contribution
  ${data.contribution}

`;
}

module.exports = generateMarkdown;
