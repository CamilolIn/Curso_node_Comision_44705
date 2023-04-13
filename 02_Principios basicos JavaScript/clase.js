// class Animal {
//   // Propiedades
//   // name = "Garfield";
//   // type = "cat";
//   constructor(name, type){
//     this.name = 'Tony'
//     this.type = 'Gato'
//   }
   
//   static nameStatic = 'correa'
//   static typeStatic = 'perr'

//   // Métodos
//   hablar() {
//     return "Odio los lunes."
//   }

//   correr() {
//     return `esta corriendo ${this.name}`
//   }
// }

// let animal1 = new Animal('Titi', 'Perro')
// console.log(animal1.nameStatic)

//Jewrcico
class Contador{
  constructor(nombre){
    this.nombre =nombre
    this.contador = 0
  }

  static contadorGlobal = 0

  getResponsable(){
    return this.nombre
  }

  contar(global){
    if(global){
      return this.contadorGlobal + 1
    }
    return this.contador + 1
  }

  getCuentaIndividual(){
    return this.contar()
  }

  getCuentaGlobal(){
    return this.contar('global')
  }
}

console.log(Contador.contadorGlobal)

let contador1 = new Contador('Camilo')
contador1.getCuentaIndividual()
contador1.getCuentaGlobal()
contador1.getCuentaIndividual()
contador1.getCuentaGlobal()

console.log(contador1.contador)
console.log(Contador.contadorGlobal)