const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];

//metodos de iteração

const encontrarPrimeiro = numeros.find((elemento) => elemento == 2)
// console.log(encontrarPrimeiro)

const filtrarPor = numeros.filter((elemento) => elemento == 7)
// console.log(filtrarPor)

const executarComRetorno = numeros.map((elemento) => elemento * 2)
// console.log(executarComRetorno)

let resultados = []
const executarSemRetorno = numeros.forEach((elemento) => resultados.push(elemento * 2))
// console.log(resultados)

let reduzirPara = numeros.reduce((acumulador, elemento) => acumulador + elemento)
// console.log(reduzirPara)

//outros métodos

// [3, 2, 4, 3, 5, 1, 3, 4, 2]

// console.log(numeros.concat(3, 5, [5, 8, 9]))
// console.log(numeros.push(9, 10, 3, 38)) // retorna o length
// console.log(numeros.pop())
// console.log(numeros.unshift(6, 9, 7))
// console.log(numeros.shift())
// console.log(numeros.slice(2, 8))
// console.log(numeros.splice(2, 0, 88, 99, 66 , 33))
// console.log(numeros.indexOf(2))
// console.log(numeros.includes(9))
console.log(numeros.join(''))

