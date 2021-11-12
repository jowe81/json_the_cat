const { type } = require('os');
const request = require('request');
const SEARCH_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds/search';

const searchBreeds = (query, endpoint) => {
  request(endpoint + '?q=' + query, (err, res, body) => {
    if (!err) {
      const data = JSON.parse(body); //Array expected
      for (let breed of data) {
        console.log(breed.description);
      }
    }
  });
};

searchBreeds(process.argv[2] || 'siberian', SEARCH_BREEDS_URL);