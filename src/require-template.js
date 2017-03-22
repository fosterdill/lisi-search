const fs = require('fs');

module.exports = function (path) {
  let filename = require.resolve(path);
  
  return fs.readFileSync(filename, 'utf8');
};
