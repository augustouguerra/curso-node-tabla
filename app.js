const fs = require('fs'); 
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// console.log(argv);
console.log('base: yargs', argv.base);

// Array destructoring 
// const [ , , arg3='base=5'] = process.argv;
// const [ , base ] = arg3.split('=');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
.then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));

