// function imprimir(numero1, numero2) {
//  console.log(numero1 + numero2)
// }

// imprimir(8, 2)

// imprimir(9, 6)

// function imprimir(nome) {
//   console.log(`A ${nome} está na reprograma`)
//  }

//  imprimir('Dai')

// function calcular(a, b, callback) {
//   return callback(a, b)
// }

// function somar(a, b) {
//   return a + b
// }

// function subtrair(a, b) {
//   return a - b
// }

// function multiplicar(a, b) {
//   return a * b
// }

// function dividir(a, b) { 
//   return a / b
// }

let calcular = (a, b, callback) => callback(a, b);
let somar = (a, b) => a + b;
let subtrair = (a, b) => a - b;
let multiplicar = (a, b) => a * b;
let dividir = (a, b) => a / b;

console.log(calcular(8, 3, somar));
console.log(calcular(7, 3, multiplicar));
console.log(calcular(9, 3, subtrair));
