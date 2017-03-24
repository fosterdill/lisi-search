const requireTemplate = require('../../require-template');

module.exports = {
  template: requireTemplate('./components/header-dropdown/header-dropdown.html'),

  props: ['text'],

  data: function () {
    return {
      styleObject: {
        i: {
          fontSize: '20px',
          verticalAlign: 'middle',
          padding: '5px'
        }
      }
    };
  }
};
