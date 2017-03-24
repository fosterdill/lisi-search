const requireTemplate = require('../../require-template');

module.exports = {
  template: requireTemplate('./components/recommended/recommended.html'),
  components: {
    "header-dropdown": require('../header-dropdown/header-dropdown')
  },
  data: function () {
    return {
      styleObject: {
        root: {
          height: "100%"
        }
      }
    }
  }
};