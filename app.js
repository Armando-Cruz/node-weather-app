const argv = require('./config/yargs').argv,
      lugar = require('./lugar/lugar'),
      clima = require('./clima/clima');

// Recupera dirección ciudad
let direccion = argv.direccion;

const getInfo = async (direccion) => {
    let coordenadas,
        temperatura;
    try {
        coordenadas = await lugar.getCoordenadas(direccion);
        temperatura = await clima.getClima(coordenadas.lat, coordenadas.lon);
    }
    catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
    
    return `El clima de ${coordenadas.direccion} es de ${temperatura}°`;
};


getInfo(direccion)
    .then( console.log )
    .catch( console.log );