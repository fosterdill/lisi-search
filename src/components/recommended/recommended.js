const requireTemplate = require('../../require-template');
const templateString = requireTemplate('./components/recommended/recommended.html');

module.exports = {
  template: templateString,
  data: function () {
    return {
      styleObject: {
        background: 'red'
      }
    };
  }
};