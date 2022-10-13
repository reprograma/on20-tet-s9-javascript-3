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

const listseries = document.querySelector("#list-series");

fillSeries = (seriado) => {
  // variável que cria um novo card
  let card = document.createElement('div');

  //inclusão de classe no card
  card.classList.add("card");
  //inclusão do card no section
  listseries.appendChild(card);

  // criação e inclusão de poster no card
  let poster = document.createElement('img');
  poster.setAttribute('src', seriado.imagem);
  poster.setAttribute('alt', "pôster da serie");
  poster.classList.add('poster');
  let posterbox = document.createElement('div');

  //poster box criado para padronizar as imagens
  posterbox.classList.add('poster-box');
  posterbox.appendChild(poster);
  card.appendChild(posterbox);

  //criação e inclusão de título no card
  let title = document.createElement('h2');
  title.innerHTML = seriado.titulo;
  card.appendChild(title); 

  //criação e inclusão de ano no card
  let year = document.createElement('p');
  year.innerHTML= `Ano: ${seriado.ano}`;
  year.classList.add('year');
  card.appendChild(year);

  //criação e inclusão do diretor no card
  let director = document.createElement('p');
  director.innerHTML= `Diretor: ${seriado.diretor}`;
  director.classList.add('director');
  card.appendChild(director);

  //criação e inclusão do gêneros no card
  let genres = document.createElement('p');
  genres.innerHTML= `Gênero: ${seriado.generos}`;
  genres.classList.add('genres');
  card.appendChild(genres);
  
  //criação e inclusão do elenco no card
  let cast = document.createElement('p');
  cast.innerHTML= `Elenco: ${seriado.elenco}`;
  cast.classList.add('cast');
  card.appendChild(cast);
  
  //inclusão do icone e adição de classe
  let icone = document.createElement('i');
  icone.classList.add('fab');
  icone.classList.add('fa-instagram');
  
  //criação e inclusão do instagram no card
  let instagram = document.createElement('a');
  instagram.setAttribute('href', seriado.instagram);
  instagram.setAttribute('target', '_blank');
  instagram.appendChild(icone);
  card.appendChild(instagram);
}


//laço de repetição para mostrar todas as linhas do array.
series.forEach(linhaSerie => {
  fillSeries(linhaSerie)
});


