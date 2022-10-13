
const objetoJson = {
  "nome": "Liniker",
  "foto": "./images/liniker.webp",
  "generos": ["MPB", "Soul", "R&B", "Blues"],
  "discografia": ["Remonta", "Goela Abaixo", "Indigo Borboleta Azul"], 
  "instagram": "https://www.instagram.com/linikeroficial/"
}

// Suponha que nosso projeto consiste em um site de informações sobre cantoras brasileiras e na página em questão a usuária selecionou a cantora Liniker, e a API nos retornou um JSON com todas as informações que precisamos (armazenado na variável objetoJson acima), então devemos popular nosso HTML com essas informações utilizando JavaScript 

const foto = document.getElementById('photography')
const title = document.querySelector('#title')
const gender = document.getElementById('gender')
const discography = document.getElementById('discography')
const instagram = document.querySelector('#instagram')

preencherDados = () => {
  photography.setAttribute('src', objetoJson["foto"])
  title.innerText = objetoJson.nome
  gender.innerText = objetoJson.generos.join(' - ')
  discography.innerText = objetoJson.discografia.join('- ')
  instagram.setAttribute('href', objetoJson.instagram)
}

preencherDados()
