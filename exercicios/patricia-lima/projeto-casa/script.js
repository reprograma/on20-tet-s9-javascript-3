
const series = [{
  "imagem": "./images/pose.jpg",
  "titulo": "Pose",
  "ano": "2018",
  "diretor": "Ryan Murphy",
  "generos": ["Drama"],
  "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
  "instagram": "https://www.instagram.com/poseonfx/"
},
{
  "imagem": "./images/manhas.jpg",
  "titulo": "Manhãs de Setembro",
  "ano": "2021",
  "diretor": "Luis Pinheiro",
  "generos": ["Drama"],
  "elenco": ["Liniker", "Linn da Quebrada"], 
  "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
},
{
  "imagem": "./images/euphoria.jpg",
  "titulo": "Euphoria",
  "ano": "2019",
  "diretor": "Sam Levinson",
  "generos": ["Drama"],
  "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
  "instagram": "https://www.instagram.com/euphoria/"
},
{
  "imagem": "./images/veneno.jpeg",
  "titulo": "Veneno",
  "ano": "2020",
  "diretor": "Javier Ambrossi",
  "generos": ["Drama", "Biografia"],
  "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
  "instagram": "https://www.instagram.com/venenolaserie/"
},
{
  "imagem": "./images/legendary.jpg",
  "titulo": "Legendary",
  "ano": "2020",
  "diretor": "Rik Reinholdtsen",
  "generos": ["Reality Show", "Competição"],
  "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
  "instagram": "https://www.instagram.com/legendarymax/"
},
]

const main =document.getElementById('cards-series')



function preencherCards(series){
series.forEach ((itenArray)=>{
  const div= document.createElement ('div')
  main.appendChild(div)

  const imagem = document.createElement('img')
  imagem.setAttribute('src', itenArray.imagem)
  imagem.setAttribute('alt', "capa-de-filme")

  div.appendChild(imagem)

  const titulo = document.createElement('h2')
  titulo.innerText= itenArray.titulo
  div.appendChild(titulo)

  const ano = document.createElement('p')
  ano.innerText= `Ano: ${itenArray.ano}` 
  div.appendChild(ano) 

  const diretor = document.createElement('p')
  diretor.innerText= `Diretor: ${itenArray.diretor}`
  div.appendChild(diretor)

  const generos = document.createElement('p')
  generos.innerHTML =`Generos: ${itenArray.generos}`
  div.appendChild(generos)

  const elenco = document.createElement('p')
  elenco.innerHTML= `Elemento: ${itenArray.elenco.join (' - ')}`
  div.appendChild(elenco)

  const instagram = document.createElement('a')
  instagram.setAttribute('target','_blank')
  instagram.setAttribute('href', itenArray.instagram)
  const imagenInst = document.createElement('img')
  imagenInst.setAttribute('src', "./images/insta.png")
  instagram.appendChild(imagenInst)

  
      div.appendChild(instagram)
    } ) 
  }
      
  
  
  
  preencherCards(series)

  
  







































