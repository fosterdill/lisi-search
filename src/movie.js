const { fromJS, Record, List, Map } = require('immutable');
const store = require('./store');
const { acceptMovies, waitForMovies } = require('./actions');

const Movie = Record({
  "id": null,
  "title": "",
  "release_year": null,
  "themoviedb": null,
  "original_title": "",
  "alternate_titles": List(),
  "imdb": "tt4975722",
  "pre_order": false,
  "in_theaters": false,
  "release_date": "",
  "rating": "",
  "rottentomatoes": null,
  "freebase": "",
  "wikipedia_id": null,
  "metacritic": "",
  "common_sense_media": "",
  "poster_120x171": "",
  "poster_240x342": "",
  "poster_400x570": ""
});

module.exports = {
  Movie,

  getMovies() {
    store.dispatch(waitForMovies());

    fetch("http://api-public.guidebox.com/v2/movies", {
      headers: new Headers({
        'Authorization': '61b04fad269c726d0c050a2624ac5f0df26bab44'
      })
    })
    
    //Attempt to parse JSON
    .then((response) => {
      return response.json();
    })

    //Convert to Immutable
    .then((responseJSON) => {
      return Promise.resolve(fromJS(responseJSON));
    })
    
    .then((responseMap) => {
      store.dispatch(acceptMovies(responseMap));
    })

    .catch((error) => {
      console.log('didnt', error);
    });
  }
};