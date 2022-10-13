// const series = [
//     {
//       "imagem": "./images/pose.jpg",
//       "titulo": "Pose",
//       "ano": "2018",
//       "diretor": "Ryan Murphy",
//       "generos": ["Drama"],
//       "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
//       "instagram": "https://www.instagram.com/poseonfx/"
//     },
//     {
//       "imagem": "./images/manhas.jpg",
//       "titulo": "Manhãs de Setembro",
//       "ano": "2021",
//       "diretor": "Luis Pinheiro",
//       "generos": ["Drama"],
//       "elenco": ["Liniker", "Linn da Quebrada"], 
//       "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
//     },
//     {
//       "imagem": "./images/euphoria.jpg",
//       "titulo": "Euphoria",
//       "ano": "2019",
//       "diretor": "Sam Levinson",
//       "generos": ["Drama"],
//       "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
//       "instagram": "https://www.instagram.com/euphoria/"
//     },
//     {
//       "imagem": "./images/veneno.jpeg",
//       "titulo": "Veneno",
//       "ano": "2020",
//       "diretor": "Javier Ambrossi",
//       "generos": ["Drama", "Biografia"],
//       "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
//       "instagram": "https://www.instagram.com/venenolaserie/"
//     },
//     {
//       "imagem": "./images/legendary.jpg",
//       "titulo": "Legendary",
//       "ano": "2020",
//       "diretor": "Rik Reinholdtsen",
//       "generos": ["Reality Show", "Competição"],
//       "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
//       "instagram": "https://www.instagram.com/legendarymax/"
//     },
//   ]

//   let imagem = document.querySelector('#imagem')
//   let titulo = document.querySelector('#titulo')
//   let ano = document.querySelector('#ano')
//   let diretor = document.querySelector('#diretor')
//   let generos = document.querySelector('#generos')
//   let elenco = document.querySelector('#elenco')

//   let sessaoConteudos = document.querySelector('.conteudos')
  
//   const url = 'teste.json'

//   function pegarDados(i) {
//     fetch(url)
//     .then( response => response.json() )
//     .then( dados => {
//         if(dados.erro) {
//             console.log("Erro ao acessar o JSON")
//             return
//         }

//         let quantidadeSeriados = (dados.series.lenght)
//         console.log("Quant. de Seriados " + quantidadeSeriados)
//         atribuirDados2(dados, i)

//     })
//   }

//   function atribuirDados(dados, i) {
//     imagem.setAttribute('src', "images/"+dados.series[i].imagem)
//     titulo.textContent = dados.series[i].titulo
//     ano.textContent = dados.series[i].ano
//     diretor.textContent = dados.series[i].diretor
//     generos.textContent = dados.series[i].generos
//     elenco.textContent = dados.series[i].elenco

//   }

// let imagemFoto = document.getElementsByClassName('imagem')
// let tituloSeries = document.getElementsByClassName('titulo')
// let anoSeries = document.getElementsByClassName('ano')
// let diretorSeries = document.getElementsByClassName('diretor')
// let generosSeries = document.getElementsByClassName('generos')
// let elencoSeries = document.getElementsByClassName('elenco')
// let instagramSeries = document.getElementsByClassName('instagram')

// function atribuirDados2(dados, i) {
//     imagemFoto[i].setAttribute('src', "images/"+dados.series[i].imagem)
//     tituloSeries[i].innerText = dados.series[i].titulo
//     anoSeries[i].innerText = dados.series[i].ano
//     diretorSeries[i].innerText = dados.series[i].diretor
//     generosSeries[i].innerText = dados.series[i].generos
//     elencoSeries[i].innerText = dados.series[i].elenco
//     instagramSeries[i].setAttribute('href', series[i].instagram)

// }

// function desenharCards(id) {

//     let cards = document.createElement("article")
//     cards.setAttribute('class', 'card')
//     sectionConteudos.appendChild(cards)

//     let imagem = document.createElement("img")
//     cards.appendChild(imagem)
//     imagem.setAttribute('class', 'imagem')
//     imagem.setAttribute('src', './images/Foto.jpg')

//     let titulo = document.createElement("h2")
//     titulo.setAttribute('class', 'titulo')
//     cards.appendChild(titulo)
//     titulo.textContent = "titulo"

//     let ano = document.createElement("h3")
//     ano.setAttribute('class', 'ano')
//     cards.appendChild(ano)
//     ano.textContent = "ano"

//     let diretor = document.createAttribute("h3")
//     diretor.setAttribute('class', 'diretor')
//     cards.appendChild(diretor)
//     diretor.textContent = "diretor"

//     let generos = document.createElement("h3")
//     generos.setAttribute('class', 'generos')
//     carta.appendChild(generos)
//     generos.textContent = "generos"

//     let elenco = document.createElement("h3")
//     elenco.setAttribute('class', 'elenco')
//     cards.appendChild(elenco)
//     elenco.textContent = "elenco"

//     let instagram = document.createElement("a")
//     instagram.setAttribute('class', 'instagram')
//     cards.appendChild(instagram)
//     instagram.innerHTML = ("instagram")

//     pegarDados(id)
    

// }

// pegarDados(0)
// pegarDados(1)
// pegarDados(2)
// pegarDados(3)
// pegarDados(4)

//tentar depois

