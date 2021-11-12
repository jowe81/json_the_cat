const request = require('request');
const SEARCH_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds/search';

//Retrieve a description for the first breed found for search query
//Callback will receive two arguments: error, description
//The endpoint argument is optional and allows to specifiy the API endpoint
const fetchBreedDescription = (query, callback, endpoint) => {
  request(endpoint || SEARCH_BREEDS_URL + '?q=' + query, (err, res, body) => {
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