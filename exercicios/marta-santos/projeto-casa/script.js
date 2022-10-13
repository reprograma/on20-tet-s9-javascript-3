const maratonar = [
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

/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
 //Vou tentar mais um pouco

 const imagemm = document.getElementById('imagemmm')
 const tituloo = document.getElementById('titulo')
 const anoo = document.getElementById('tentativa2')
 const diretorr = document.getElementById('tentativa3')
 const geneross = document.getElementById('tentativa4')
 const elencoo = document.getElementById('tentativa5')

 comeceMaratonar = () => {
  imagemm.setAttribute('src', maratonar [0].imagem)
  tituloo.innerText = maratonar [0].titulo
  anoo.innerText = maratonar [0].ano
  diretorr.innerText = maratonar [0].diretor
  geneross.innerText = maratonar[0].generos
  elencoo.innerText = maratonar [0].elenco.join('br')

 }

 comeceMaratonar() 

 // PROFESORA SE VC OLHAR MEU TRABALHO DA A IMPREÇÃO QUE EU NÃO ME ESFORCEI, MAS SERIO EU ME ESFORCEI E MUITO, SINTO MUITO POR TER FICADO HORRIVEL ASSIM, EU TO ME ESFORÇANDO MUITO, PODE NÃO PARECER PQ TA HORRIVEL MAS EU TO DESCULPA..