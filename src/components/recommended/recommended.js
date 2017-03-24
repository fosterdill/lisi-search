const requireTemplate = require('../../require-template');
let store = require('../../store');
let unsubscribe;
const { fetchGallery } = require('../../actions');
const { getMovies } = require('../../movie');

module.exports = {
  template: requireTemplate('./components/recommended/recommended.html'),
  
  components: {
    "header-dropdown": require('../header-dropdown/header-dropdown'),
    "loader": require('../loader/loader')
  },

  methods: {
    updateState() {
      this.movies = store.getState().getIn(['movies', 'all']);
      console.log(this.movies.get('loading'));
    }
  },

  created() {
    unsubscribe = store.subscribe(this.updateState.bind(this));

    getMovies();
  },

  destroyed() {
    unsubscribe();
  },

  data() {
    return {
      movies: null,
      styleObject: {
        root: {
          height: "100%"
        },

        searchIcon: {
          fontSize: "30px"
        }
      }
    }
  }
};