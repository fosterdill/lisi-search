const ACCEPT_MOVIES = 'ACCEPT_MOVIES';
const WAIT_FOR_MOVIES = 'WAIT_FOR_MOVIES';

module.exports = {
  ACCEPT_MOVIES,

  WAIT_FOR_MOVIES,

  acceptMovies(movies) {
    return { type: ACCEPT_MOVIES, movies };
  },

  waitForMovies() {
    return { type: WAIT_FOR_MOVIES };
  }
};