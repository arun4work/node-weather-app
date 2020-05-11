const request = require('postman-request');

const geocode = (address, callback) => {
    const url =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoiYWJhaGFsIiwiYSI6ImNrNnlla3Q2bTB1bjEzZXA3eWVrZWgxaW8ifQ.lEogfgZBcxZJmglGXVvZnA';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to server!', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location, please try another search.', undefined);
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name,
            });
        }
    });
};

module.exports = geocode;
