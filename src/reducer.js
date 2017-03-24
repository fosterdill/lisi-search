const { ACCEPT_MOVIES, WAIT_FOR_MOVIES } = require('./actions');
const { Map } = require('immutable');

const initialState = Map({
  movies: Map({
    all: Map({
      loading: false
    })
  })
});

module.exports = function (state = initialState, action) {
  switch (action.type) {
    case ACCEPT_MOVIES:
      return state

        //store movies
        .updateIn(['movies', 'all'], () => {
          return action.movies;
        })

        //update state
        .setIn(['movies', 'all', 'loading'], false);

    case WAIT_FOR_MOVIES:
      return state.setIn(['movies', 'all', 'loading'], true);

    default:
      return state;
  }
};