const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Barbosa" },
  idade: 21,
  cidade: "Palmas",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
};  

// console.log(aluna.cidade)
// aluna.saudacao()

// console.log(aluna.interesses[1])
// console.log(aluna.nome.segundo)

console.log(aluna['cidade de nascimento'])

const anime = new Object()

console.log(anime)
anime.nome = 'kimetsu no yaiba'
console.log(anime)

const { idade, cidade } = aluna
console.log(idade)
console.log(cidade)
