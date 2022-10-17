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
    "generos": ["Reality Show", " Competição"],
    "elenco": ["Leiomy Maldonado", " Megan Thee Stallion", " Dashaun Wesley"], 
    "instagram": "https://www.instagram.com/legendarymax/"
  },
]
//CONSTANTES ARRAY - ISOLANDO OBJETOS
const pose = json[0]
const manhas = json[1]
const euphoria = json[2]
const veneno = json[3]
const legendary = json[4]

//CONSTANTES POSE
const photographyPose = document.getElementById('photography-pose')
const titlePose = document.getElementById('title-pose')
const yearPose = document.getElementById('year-pose')
const directorPose = document.getElementById('director-pose')
const genresPose = document.getElementById('genres-pose')
const castingPose = document.getElementById('casting-pose')
const instagramPose = document.getElementById('instagram-pose')

//CONSTANTES MANHÃS
const photographyManhas = document.getElementById('photography-manhas')
const titleManhas = document.getElementById('title-manhas')
const yearManhas = document.getElementById('year-manhas')
const directorManhas = document.getElementById('director-manhas')
const genresManhas = document.getElementById('genres-manhas')
const castingManhas = document.getElementById('casting-manhas')
const instagramManhas = document.getElementById('instagram-manhas')

//CONSTANTES EUPHORIA
const photographyEuphoria = document.getElementById('photography-euphoria')
const titleEuphoria = document.getElementById('title-euphoria')
const yearEuphoria = document.getElementById('year-euphoria')
const directorEuphoria = document.getElementById('director-euphoria')
const genresEuphoria = document.getElementById('genres-euphoria')
const castingEuphoria = document.getElementById('casting-euphoria')
const instagramEuphoria = document.getElementById('instagram-euphoria')

// CONSTANTES VENENO
const photographyVeneno = document.getElementById('photography-veneno')
const titleVeneno = document.getElementById('title-veneno')
const yearVeneno = document.getElementById('year-veneno')
const directorVeneno = document.getElementById('director-veneno')
const genresVeneno = document.getElementById('genres-veneno')
const castingVeneno = document.getElementById('casting-veneno')
const instagramVeneno = document.getElementById('instagram-veneno')

//CONSTANTES LEGENDARY

const photographyLegendary = document.getElementById('photography-legendary')
const titleLegendary = document.getElementById('title-legendary')
const yearLegendary = document.getElementById('year-legendary')
const directorLegendary = document.getElementById('director-legendary')
const genresLegendary = document.getElementById('genres-legendary')
const castingLegendary = document.getElementById('casting-legendary')
const instagramLegendary = document.getElementById('instagram-legendary')

//CONSTANTE TITULO
const tituloOficial = document.getElementById('titulo-oficial')

//ESCREVE NO HTML
displayBox1 = (serie) => {
  photographyPose.setAttribute('src', serie.imagem)
  titlePose.innerText = serie.titulo
  yearPose.innerText = serie.ano
  directorPose.innerText = serie.diretor
  genresPose.innerHTML = serie.generos.join(' - ')
  castingPose.innerHTML = serie.elenco.join(' - ')
  instagramPose.setAttribute('href', serie.instagram)
}

displayBox2 = (serie) => {
  photographyManhas.setAttribute('src', serie.imagem)
  titleManhas.innerText = serie.titulo
  yearManhas.innerText = serie.ano
  directorManhas.innerText = serie.diretor
  genresManhas.innerHTML = serie.generos.join(' - ')
  castingManhas.innerHTML = serie.elenco.join(' - ')
  instagramManhas.setAttribute('href', serie.instagram)
}

displayBox3 = (serie) => {
  photographyEuphoria.setAttribute('src', serie.imagem)
  titleEuphoria.innerText = serie.titulo
  yearEuphoria.innerText = serie.ano
  directorEuphoria.innerText = serie.diretor
  genresEuphoria.innerHTML = serie.generos.join(' - ')
  castingEuphoria.innerHTML = serie.elenco.join(' - ')
  instagramEuphoria.setAttribute('href', serie.instagram)
}

displayBox4 = (serie) => {
  photographyVeneno.setAttribute('src', serie.imagem)
  titleVeneno.innerText = serie.titulo
  yearVeneno.innerText = serie.ano
  directorVeneno.innerText = serie.diretor
  genresVeneno.innerHTML = serie.generos.join(' - ')
  castingVeneno.innerHTML = serie.elenco.join(' - ')
  instagramVeneno.setAttribute('href', serie.instagram)
}

displayBox5 = (serie) => {
  photographyLegendary.setAttribute('src', serie.imagem)
  titleLegendary.innerText = serie.titulo
  yearLegendary.innerText = serie.ano
  directorLegendary.innerText = serie.diretor
  genresLegendary.innerHTML = serie.generos.join(' - ')
  castingLegendary.innerHTML = serie.elenco.join(' - ')
  instagramLegendary.setAttribute('href', serie.instagram)
}

titleBox = () => {
  tituloOficial.innerText = ("MariFlix 🎥🍿")
}

//CHAMA A FUNÇÃO
titleBox()
displayBox1(pose)
displayBox2(manhas)
displayBox3(euphoria)
displayBox4(veneno)
displayBox5(legendary)