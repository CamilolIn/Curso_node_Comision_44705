// const colors = require('colors')
// const moment = require('moment'); // require



// console.log('hello'.bgBlue);
// console.log(moment('02-03-1922'))

let lab = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']

lab.forEach((valor, ind, lista) => {
  lista[ind] = valor.toUpperCase()
})

console.log(lab)