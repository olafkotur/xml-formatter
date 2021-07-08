const fs = require('fs');
const format = require('xml-formatter');

fs.readFile('input.txt', 'utf8', (_err, data) => {
  const formatted = format(data, { indentation: '  '});
  fs.writeFile('output.txt', formatted, () => console.log('Done'));
});
