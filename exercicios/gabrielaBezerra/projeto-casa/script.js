// on20: 
/* O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:
1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;*/

const series = [
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

const photography1 = document.getElementById('photography1')
const photography2 = document.getElementById('photography2')
const photography3 = document.getElementById('photography3')
const photography4 = document.getElementById('photography4')
const photography5 = document.getElementById('photography5')

const title1 = document.getElementById('title1')
const title2 = document.getElementById('title2')
const title3 = document.getElementById('title3')
const title4 = document.getElementById('title4')
const title5 = document.getElementById('title5')

const year1 = document.getElementById('year1')
const year2 = document.getElementById('year2')
const year3 = document.getElementById('year3')
const year4 = document.getElementById('year4')
const year5 = document.getElementById('year5')

const director1 = document.getElementById('director1')
const director2 = document.getElementById('director2')
const director3 = document.getElementById('director3')
const director4 = document.getElementById('director4')
const director5 = document.getElementById('director5')

const gender1 = document.getElementById('gender1')
const gender2 = document.getElementById('gender2')
const gender3 = document.getElementById('gender3')
const gender4 = document.getElementById('gender4')
const gender5 = document.getElementById('gender5')

const cast1 = document.getElementById('cast1')
const cast2 = document.getElementById('cast2')
const cast3 = document.getElementById('cast3')
const cast4 = document.getElementById('cast4')
const cast5 = document.getElementById('cast5')

const instagram1 = document.getElementById('instagram1')
const instagram2 = document.getElementById('instagram2')
const instagram3 = document.getElementById('instagram3')
const instagram4 = document.getElementById('instagram4')
const instagram5 = document.getElementById('instagram5')

informarSerie = () => {
  photography1.setAttribute('src', series[0].imagem)
  photography2.setAttribute('src', series[1].imagem)
  photography3.setAttribute('src', series[2].imagem)
  photography4.setAttribute('src', series[3].imagem)
  photography5.setAttribute('src', series[4].imagem)
  title1.innerText = series[0].titulo
  title2.innerText = series[1].titulo
  title3.innerText = series[2].titulo
  title4.innerText = series[3].titulo
  title5.innerText = series[4].titulo
  year1.innerText = series[0].ano
  year2.innerText = series[1].ano
  year3.innerText = series[2].ano
  year4.innerText = series[3].ano
  year5.innerText = series[4].ano
  director1.innerText = series[0].diretor
  director2.innerText = series[1].diretor
  director3.innerText = series[2].diretor
  director4.innerText = series[3].diretor
  director5.innerText = series[4].diretor
  gender1.innerText = series[0].generos
  gender2.innerText = series[1].generos
  gender3.innerText = series[2].generos
  gender4.innerText = series[3].generos.join(' - ')
  gender5.innerText = series[4].generos.join(' - ')
  cast1.innerHTML = series[0].elenco.join(' - ')
  cast2.innerHTML = series[1].elenco.join(' - ')
  cast3.innerHTML = series[2].elenco.join(' - ')
  cast4.innerHTML = series[3].elenco.join(' - ')
  cast5.innerHTML = series[4].elenco.join(' - ')
  instagram1.setAttribute('href', series[0].instagram)
  instagram2.setAttribute('href', series[1].instagram)
  instagram3.setAttribute('href', series[2].instagram)
  instagram4.setAttribute('href', series[3].instagram)
  instagram5.setAttribute('href', series[4].instagram)
   
}   

informarSerie()


