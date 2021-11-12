const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (err, desc) => {
  if (!err) {
    if (typeof desc === 'string') {
      console.log(desc);
    } else {
      //Nothing returned - not found or no query provided
      if (breedName) {
        console.log(`Your query "${breedName}" did not return any results. Misspelled it?`);
      } else {
        console.log(`Please provide a query string to search for - for example "siberian".`);
      }
    }
  } else {
    console.log(`An error occurred while trying to access the cat API. \n  -> "${err}"`);
  }
});