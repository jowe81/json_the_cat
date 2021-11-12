const request = require('request');
const SEARCH_BREEDS_URL = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = (query, endpoint, callback) => {
  request(endpoint + '?q=' + query, (err, res, body) => {
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
      callback(err, body);
    }
  });
};

module.exports = fetchBreedDescription;

/*
const searchBreeds = (query, endpoint) => {
  request(endpoint + '?q=' + query, (err, res, body) => {
    if (!err) {
      const data = JSON.parse(body); //Array expected
      if (data.length > 0) {
        //Print description for each breed returned
        for (let breed of data) {
          console.log(breed.description);
        }
      } else {
        //Nothing returned - not found or no query provided
        if (query) {
          console.log(`Your query "${query}" did not return any results. Misspelled it?`);
        } else {
          console.log(`Please provide a query string to search for - for example "siberian".`);
        }
      }
    } else {
      console.log(`An error occurred while trying to access ${SEARCH_BREEDS_URL}. \n  -> "${err}"`);
    }
  });
};

searchBreeds(process.argv[2], SEARCH_BREEDS_URL);
*/