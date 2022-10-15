const data = new Date()
// console.log(data)

const dia = data.getDate();
// console.log(dia)

const mes = data.getMonth();
// console.log(mes + 1)

const ano = data.getFullYear();
// console.log(ano)

// console.log(`${dia}/${mes + 1}/${ano}`) // interpolação
// console.log(dia + "/" + (mes + 1) + "/" + ano) // concatenação

const dataFormatada = data.toLocaleDateString('pt-BR', {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric"})

console.log(dataFormatada)
