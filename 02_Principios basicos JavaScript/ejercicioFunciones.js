const mostrarLista = (arreglo) => {
  if (arreglo.length == 0) {
    return 'Lista Vacia'
  } else {
    console.log(arreglo)
    for (i = 0; i <= arreglo.length; i++) {
      if (arreglo[i] !== undefined) {
        console.log(i)
        console.log(`Valor ${i} es : ${arreglo[i]}`)
      }

    }
    return
  }
}

console.log(mostrarLista([1, 5, 89, 7, 4, 54]))