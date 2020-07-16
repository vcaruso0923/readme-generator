//different badge / description depending on chosen license

// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License



## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me via [email](${data.email}) or on [Github](http://github.com/${data.githubUsername}).
`;
}

module.exports = generateMarkdown;
