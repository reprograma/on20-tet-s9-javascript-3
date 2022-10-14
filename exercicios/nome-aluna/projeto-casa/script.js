// on17

const json1 =
  {
    "imagem": "./images/pose.jpg",
    "titulo": "Pose",
    "ano": "2018",
    "diretor": "Ryan Murphy",
    "generos": ["Drama"],
    "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
    "instagram": "https://www.instagram.com/poseonfx/"
  }
const json2 =  {
    "imagem": "./images/manhas.jpg",
    "titulo": "Manhãs de Setembro",
    "ano": "2021",
    "diretor": "Luis Pinheiro",
    "generos": ["Drama"],
    "elenco": ["Liniker", "Linn da Quebrada"], 
    "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
  }

 const json3 = {
    "imagem": "./images/euphoria.jpg",
    "titulo": "Euphoria",
    "ano": "2019",
    "diretor": "Sam Levinson",
    "generos": ["Drama"],
    "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
    "instagram": "https://www.instagram.com/euphoria/"
  }

 const json4 = {
    "imagem": "./images/veneno.jpeg",
    "titulo": "Veneno",
    "ano": "2020",
    "diretor": "Javier Ambrossi",
    "generos": ["Drama", "Biografia"],
    "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
    "instagram": "https://www.instagram.com/venenolaserie/"
  }


const json5 =  {
    "imagem": "./images/legendary.jpg",
    "titulo": "Legendary",
    "ano": "2020",
    "diretor": "Rik Reinholdtsen",
    "generos": ["Reality Show", "Competição"],
    "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
    "instagram": "https://www.instagram.com/legendarymax/"
  }

const foto1 = document.getElementById('photo1')
const titulo1 = document.getElementById('titulo1')
const ano1 = document.getElementById('ano1')
const diretor1 = document.getElementById('diretor1')
const generos1 = document.getElementById('generos1')
const elenco1 = document.getElementById('elenco1')
const mainWrapper = document.querySelectorAll('.tipography')

const foto2 = document.getElementById('photo2')
const titulo2 = document.getElementById('titulo2')
const ano2 = document.getElementById('ano2')
const diretor2 = document.getElementById('diretor2')
const generos2 = document.getElementById('generos2')
const elenco2 = document.getElementById('elenco2')

const foto3 = document.getElementById('photo3')
const titulo3 = document.getElementById('titulo3')
const ano3 = document.getElementById('ano3')
const diretor3 = document.getElementById('diretor3')
const generos3 = document.getElementById('generos3')
const elenco3 = document.getElementById('elenco3')

const foto4 = document.getElementById('photo4')
const titulo4 = document.getElementById('titulo4')
const ano4 = document.getElementById('ano4')
const diretor4 = document.getElementById('diretor4')
const generos4 = document.getElementById('generos4')
const elenco4 = document.getElementById('elenco4')

const foto5 = document.getElementById('photo5')
const titulo5 = document.getElementById('titulo5')
const ano5 = document.getElementById('ano5')
const diretor5 = document.getElementById('diretor5')
const generos5 = document.getElementById('generos5')
const elenco5 = document.getElementById('elenco5')



preencherDados1 = () => {
  foto1.setAttribute('src', json1.imagem)
  titulo1.innerText =json1.titulo
  ano1.innerText=json1.ano
  diretor1.innerText=json1.diretor
  generos1.innerText=json1.generos
  elenco1.innerText=json1.elenco.join(', ')
}

preencherDados2 = () => {
  foto2.setAttribute('src', json2.imagem)
  titulo2.innerText =json2.titulo
  ano2.innerText=json2.ano
  diretor2.innerText=json2.diretor
  generos2.innerText=json2.generos
  elenco2.innerText=json2.elenco.join(', ')
}

preencherDados3 = () => {
  foto3.setAttribute('src', json3.imagem)
  titulo3.innerText =json3.titulo
  ano3.innerText=json3.ano
  diretor3.innerText=json3.diretor
  generos3.innerText=json3.generos
  elenco3.innerText=json3.elenco.join(', ')
}

preencherDados4 = () => {
  foto4.setAttribute('src', json4.imagem)
  titulo4.innerText =json4.titulo
  ano4.innerText=json4.ano
  diretor4.innerText=json4.diretor
  generos4.innerText=json4.generos
  elenco4.innerText=json4.elenco.join(', ')
}

preencherDados5 = () => {
  foto5.setAttribute('src', json5.imagem)
  titulo5.innerText =json5.titulo
  ano5.innerText=json5.ano
  diretor5.innerText=json5.diretor
  generos5.innerText=json5.generos.join(', ')
  elenco5.innerText=json5.elenco.join(', ')
}


preencherDados1()
preencherDados2()
preencherDados3()
preencherDados4()
preencherDados5()

/* 


O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
