const request = require('request');
const SEARCH_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds/search';

const searchBreeds = (query, endpoint) => {
  request(endpoint + '?q=' + query, (err, res, body) => {
    console.log(body);
  });
};

searchBreeds('siberian', SEARCH_BREEDS_URL);