const { fetchBreedDescription } = require('../breedFetcher');
const assert = require('chai').assert;

describe('fetchBreedDescription', () => {

  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      assert.strictEqual(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.strictEqual(expectedDesc, desc.trim());
      done();
    });
  });

  it('returns an empty description if the breed was not found', (done) => {
    fetchBreedDescription('aweirdbreed', (err, desc) => {
      assert.isEmpty(desc);
      done();
    });
  });
  
  it('returns an empty description if no query string was provided', (done) => {
    fetchBreedDescription(undefined, (err, desc) => {
      assert.isEmpty(desc);
      done();
    });
  });

  it('returns an error if the API request fails', (done) => {
    const faultyUrl = 'https://api.thecaaaaatapi.com/v1/breeds/search';
    fetchBreedDescription(undefined, (err, desc) => {
      assert.isNotEmpty(err);
      done();
    }, faultyUrl);
  });

});