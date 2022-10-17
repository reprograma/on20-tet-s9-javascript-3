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
  }
]

const container = document.getElementById('demo')

function createCard(serie) {
  return `
    <div class="cards">
      <img class="covers" src=${serie.imagem}>
      <h2 class="titles">${serie.titulo}</h2>
      <p class="contents">Ano: <span class="dynamic-text">${serie.ano}</span></p>
      <p class="contents">Direção: <span class="dynamic-text">${serie.diretor}</span></p>
      <p class="contents">Gêneros: <span class="dynamic-text">${serie.generos.join(" - ")}</span></p>
      <p class="contents">Elenco: <span class="dynamic-text">${serie.elenco.join(" - ")}</span></p>
      <a target="_blank" href=${serie.instagram}><i class="fab fa-instagram"></i></a>
    </div>
  `
}

function fillPage(series) {
    series.forEach((serie) => {
      container.innerHTML += createCard(serie)
    })
}

fillPage(json)

