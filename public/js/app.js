const weatherForm = document.querySelector('form');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');
const inputElem = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = inputElem.value;
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    fetch('http://localhost:3000/weather?address=' + address).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error;
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        });
    });
});
