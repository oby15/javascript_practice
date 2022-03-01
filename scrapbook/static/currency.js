document.addEventListener('DOMContentLoaded', function() {
    // Send a GET request to the URL
    fetch('http://api.exchangeratesapi.io/v1/latest?access_key=987a1ccb3a62a91b834005a799481870&symbols=USD,AUD,GBP&format=1')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        // Get rate from data
        const rateusd = data.rates.USD;
        const rateaud = data.rates.AUD;
        const rategbp = data.rates.GBP;
        // Display message on the screen
        document.querySelector('#first').innerHTML = `1 EUR is equal to ${rateusd.toFixed(3)} USD.`;
        document.querySelector('#second').innerHTML = `1 EUR is equal to ${rateaud.toFixed(3)} AUD.`;
        document.querySelector('#third').innerHTML = `1 EUR is equal to ${rategbp.toFixed(3)} GBP.`;
        });
}); 
