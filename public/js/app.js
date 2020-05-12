const weatherForm = document.querySelector('form');
const inputElem = document.querySelector('input');
const locationElem = document.getElementById('location');
const desc = document.getElementById('weather-desc');
const windSpeed = document.getElementById('current-wind-speed');
const precip = document.getElementById('current-precip');
const pressure = document.getElementById('current-pressure');
const temp = document.getElementById('current-temp');
const msgElem = document.getElementById('error-msg');
const resultElem = document.getElementById('weather-content');
const detailElem = document.getElementById('details');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = inputElem.value;
    msgElem.textContent = 'Loading...';
    resultElem.style.display = 'none';
    fetch('/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msgElem.textContent = data.error;
            } else {
                resultElem.style.display = 'block';
                msgElem.textContent = '';
                locationElem.textContent = data.location;
                desc.textContent = data.weather_descriptions;
                windSpeed.textContent = 'Wind: ' + data.wind_speed + ' kmph';
                precip.textContent = 'Precip: ' + data.precip + ' mm';
                pressure.textContent = 'Pressure: ' + data.pressure + ' mb';
                temp.innerHTML = data.temperature + '&#176;c';
                detailElem.innerHTML =
                    'It is currently ' +
                    data.temperature +
                    '&#176;c out but feels like ' +
                    data.feelslike +
                    '&#176;c. Humidity is ' +
                    data.humidity +
                    '%. There is a ' +
                    data.precip +
                    '% chance of rain.';
            }
        });
    });
});
