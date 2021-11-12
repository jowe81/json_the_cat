const request = require('request');
const SEARCH_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (query, callback) => {
  request(SEARCH_BREEDS_URL + '?q=' + query, (err, res, body) => {
    if (!err) {
      const data = JSON.parse(body); //Array expected
      if (data.length > 0) {
        //Return description for first breed returned from the API
        callback(err, data[0].description);
      } else {
        //No error but no data either (no query or no results)
        callback(err, data);
      }
    } else {
      //Error - request failed
      callback(err, null);
    }
  });
};

module.exports = { fetchBreedDescription };