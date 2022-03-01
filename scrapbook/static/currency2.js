document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
    // Send a GET request to the URL
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=987a1ccb3a62a91b834005a799481870&symbols=USD,AUD,GBP&format=1')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        // Get currency from user input and put in upper case
        const currency = document.querySelector('#currency').value.toUpperCase();
 
        // Get rate from data
        const rate = data.rates[currency];
        // check if currency is valid, if so, display on screen, if not, throw error
        if(rate!==undefined) {
            document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
        }
        else {
            document.querySelector('#result').innerHTML = 'Invalid Currency.';
        }
    })
    // Catch any errors and log them to the console
    .catch(error => {
        console.log('Error:', error);
        });
        // Prevent default submission
        return false;
    }
});