const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a28a27f2b5fcfd0440a47ad773171c4e&query=' + latitude + ',' + longitude + '&units=m';
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to server!', undefined);
        } else if (body.error) {
            callback('Unable to fetch weather data. Please try another co-ordinate', undefined);
        } else {
            const {weather_descriptions, temperature, precip} = body.current;
            callback(undefined, weather_descriptions + '. It is currently ' + temperature + ' degrees out. There is a ' + precip + '% chance of rain.');
        }
    });
};

module.exports = forecast;
