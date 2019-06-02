const axios = require('axios');

const getClima = async (lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2a271768289d76eba596f4abc02cb3a&units=metric`);

    return resp.data.main.temp;
};


module.exports = {
    getClima
};