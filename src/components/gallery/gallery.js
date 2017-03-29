const requireTemplate = require('../../require-template');
const { ipcRenderer } = require('electron');
const { AMAZON } = require('./../../constants');

module.exports = {
  template: requireTemplate('./components/gallery/gallery.html'),

  props: ['movies'],

  computed: {
    rowCount() {
      return Math.ceil(this.movies.count() / 4);
    }
  },

  methods: {
    handleClick: function () {
      ipcRenderer.send('open-url', 'https://www.amazon.com/dp/B01MTB2GLE/ref=atv_hm_hom_1_c_obwan_2_1?_encoding=UTF8&pf_rd_i=home&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=2907553782&pf_rd_r=QVMVJK1SSFMYACKVZA7X&pf_rd_s=center-4&pf_rd_t=12401', AMAZON);
    },
  },

  data: function () {
    return {
      styleObject: {
      }
    };
  }
};
