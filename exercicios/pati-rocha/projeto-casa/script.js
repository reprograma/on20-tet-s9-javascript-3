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

/*O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;
1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;
*/
const main = document.getElementById('main');
const mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'séries estreladas por mulheres trans e travestis';
main.appendChild(mainTitle)
const instagram = document.createElement('a');

function criarCards (json) {
  json.forEach((serie) => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    main.appendChild(ul);   

    const img = document.createElement('img');    
    img.setAttribute('src', serie.imagem);
    li.appendChild(img);
    ul.appendChild(li);

    const titleCard = document.createElement('li');
    titleCard.innerHTML = `<h2>${serie.titulo}</h2>` ;
    ul.appendChild(titleCard);

    const year = document.createElement('li');
    year.innerText = serie.ano;
    ul.appendChild(year);

    const director = document.createElement('li');
    director.innerText = serie.diretor;
    ul.appendChild(director);

    const genres = document.createElement('li');
    genres.innerText = serie.generos.join(' - ');
    ul.appendChild(genres);

    const cast = document.createElement('li');
    cast.innerText = serie.elenco.join(' - ');
    ul.appendChild(cast);

    const instagram = document.createElement('li');
    instagram.setAttribute('href', serie.instagram);
    ul.appendChild(instagram);
  })
}
criarCards(json);



  

