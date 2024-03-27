function renderBadge(license) {
  let badgeUrl = '';
  switch (license) {
    case 'MIT':
      badgeUrl = 'https://img.shields.io/badge/License-MIT-yellow.svg';
      break;
    case 'Apache 2.0':
      badgeUrl = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
      break;
    case 'GPLv3':
      badgeUrl = 'https://img.shields.io/badge/License-GPL-blue.svg';
      break;
  }
  return badgeUrl;
}

function renderLicenseLink(license) {
  let licenseUrl = '';
  switch (license) {
    case 'MIT':
      licenseUrl = 'https://opensource.org/licenses/MIT';
      break;
    case 'Apache 2.0':
      licenseUrl = 'https://www.apache.org/licenses/LICENSE-2.0';
      break;
    case 'GPLv3':
      licenseUrl = 'https://www.gnu.org/licenses/gpl-3.0.html';
      break;
  }
  return licenseUrl;
}

function renderLicenseSection(license) {
  const badge = renderBadge(license);
  const licenseLink = renderLicenseLink(license);

  return `
## License
![License](${badge})
This application is covered under the ${license} license. [Learn more](${licenseLink})
`;
}

const generateREADME = (answers) => {
  const licenseSection = renderLicenseSection(answers.license);

  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

${licenseSection}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
Please checkout my Git Hub by clicking below. If their are any questions please reach out to me through my email.
GitHub: [${answers.gitHub}](https://github.com/${answers.gitHub})
Email: ${answers.email}
`;
};

module.exports = generateREADME;
