const json = [
  {
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
const sessaoPrincipal = document.getElementById('sessao-principal')

json.forEach((item) => {
  let elenco = ''
  let genero = ''
  let totalElenco = item.elenco.length
  let totalGeneros = item.generos.length

  let filme = document.createElement('div')
  filme.className = "filme"
  console.log(totalElenco)
  item.elenco.forEach((itemElenco, index) => {
    if (index === totalElenco - 1) {
      elenco = elenco + `${itemElenco}`
    } else {
      elenco = elenco + `${itemElenco}, `
    }
  })

  item.generos.forEach((itemGenero, index) => {
    if (index === totalGeneros - 1) {
      genero = genero + `${itemGenero}`
    } else {
      genero = genero + `${itemGenero}, `
    }
  })  

  filme.innerHTML = `
    <img src="${item.imagem}" width=200 id="photography" alt="banner do filme ${item.titulo}">
    <h1 id="title">${item.titulo}</h1>
    <div class="infos-wrapper">
        <hr>
        <p class="ano">Ano: ${item.ano}</p>
        <hr>
        <p class="diretor">Diretor: <br> ${item.diretor}</p>
        <hr>
        <p class="tipography">Gêneros: <br><span class="dynamic-text" id="gender">${genero}</span></p>
        <hr>
        <p class="tipography">Elenco: <br><span class="dynamic-text" id="elenco">${elenco}</span></p>
        <hr>
        <a id="instagram" target="_blank" href="${item.instagram}"><i class="fab fa-instagram">Visite o instagram</i></a>
    </div>
  `

  sessaoPrincipal.appendChild(filme)
})