const axios = require('axios');

const getCoordenadas = async (direccion) => {
    // Transforma (codifica) la dirección en un uri válido
    uri = encodeURI(direccion);

    // Crea petición
    const axiosInstance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${uri}`,
        headers: {'X-RapidAPI-Key': 'efcdd99310mshb14d34b125b4ecep18fa47jsnb2fb1ae86bce'}
    });

    // Ejecuta petición

    const resp = await axiosInstance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontraron resultados para ${direccion}`); 
    }

    const resultado = resp.data.Results[0], 
          lat = resultado.lat,
          lon = resultado.lon;
    direccion = resultado.name; 
    
    return {
        direccion,
        lat,
        lon
    };
};

module.exports = {
    getCoordenadas
};