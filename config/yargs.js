const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Establece la ciudad'
    }
}).argv;

module.exports = {
    argv
};