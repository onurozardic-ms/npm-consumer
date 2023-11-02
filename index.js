const colors = require('com-microsoft-demo-colors');

const chosenColor = colors.getRandomColor();
console.log(`You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`);
console.log(`version: ${colors.getVersion()}`);