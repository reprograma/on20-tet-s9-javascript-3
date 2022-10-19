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
  ];


let mostrar = document.getElementById('mostrar');

for(let contador = 0; contador < series.length; contador++) {
  mostrar.insertAdjacentHTML('beforeend', `<div><img class="imagem1" src="${series[contador].imagem}" alt=""><ul><li>Título: ${series[contador].titulo}</li><li>Ano: ${series[contador].ano}</li><li>Diretor: ${series[contador].diretor}</li><li>Gêneros: ${series[contador].generos}</li><li>Elenco: ${series[contador].elenco}</li><li> <a href="${series[contador].instagram}" target="_blank">instagram</a></li></ul></div>`);
}