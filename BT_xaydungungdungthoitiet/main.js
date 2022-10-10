const API_KEY = '9e8d81e118dfd2d1c6ce4f3008e357f5';
axios.get('ttps://api.openweathermap.org/data/2.5/weather', {
    params: {
        lat: 51.5085,
        lon: -0.1257,
        api: API_KEY
    }

})
    .then(response => {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });