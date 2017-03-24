const requireTemplate = require('../../require-template');

module.exports = {
  template: requireTemplate('./components/gallery/gallery.html'),

  props: ['movies'],

  computed: {
    rowCount() {
      return Math.ceil(this.movies.count() / 4);
    }
  },

  data: function () {
    return {
      styleObject: {
      }
    };
  }
};
