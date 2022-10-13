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
];

/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/

const tvShowList = document.querySelector('.tv-show-list');

for (const tvShow of json) {
  const listItem = document.createElement('li');
  listItem.className = 'tv-show';

  const imageLink = createImageWithLink(tvShow);

  const textContainer = createTextContent(tvShow);

  listItem.appendChild(imageLink);
  listItem.appendChild(textContainer);

  tvShowList.appendChild(listItem);
}

function createTextContent(tvShow) {
  const textContainer = document.createElement('div');
  textContainer.className = 'text-container';

  const title = createTitle(tvShow.titulo);
  const ano = createAno(tvShow.ano);
  const diretor = createDiretor(tvShow.diretor);
  const listaGeneros = createListaGeneros(tvShow.generos);
  const listaElenco = createListaElenco(tvShow.elenco);

  textContainer.appendChild(title);
  textContainer.appendChild(ano);
  textContainer.appendChild(listaGeneros);
  textContainer.appendChild(diretor);
  textContainer.appendChild(listaElenco);

  return textContainer;
}

function createListaElenco(showElenco) {
  const listaElencoContainer = document.createElement('div');
  listaElencoContainer.className = 'list-elenco-container';

  const listaElencoDescriptor = document.createElement('span');
  listaElencoDescriptor.className = 'list-elenco-descriptor';
  listaElencoDescriptor.innerText = 'Elenco';

  const listaElenco = document.createElement('ul');
  listaElenco.className = 'list-elenco';
  for (const elenco of showElenco) {
    const itemElenco = document.createElement('li');
    itemElenco.innerText = elenco;
    listaElenco.appendChild(itemElenco);
  }

  listaElencoContainer.appendChild(listaElencoDescriptor);
  listaElencoContainer.appendChild(listaElenco);

  return listaElencoContainer;
}

function createListaGeneros(showGeneros) {
  const listaGeneros = document.createElement('ul');
  listaGeneros.className = 'list-generos';
  for (const genero of showGeneros) {
    const itemGenero = document.createElement('li');
    itemGenero.innerText = genero;
    listaGeneros.appendChild(itemGenero);
  }
  return listaGeneros;
}

function createDiretor(showDiretor) {
  const diretor = document.createElement('p');
  const diretorDescriptor = document.createElement('span');
  const diretorName = document.createElement('span');

  diretor.className = 'director';
  diretorDescriptor.textContent = 'Direção';
  diretorDescriptor.className = 'director-descriptor';
  diretorName.innerText = showDiretor;
  diretorName.className = 'director-name';

  diretor.appendChild(diretorDescriptor);
  diretor.appendChild(diretorName);

  return diretor;
}

function createAno(showAno) {
  const ano = document.createElement('span');
  ano.className = 'year';
  ano.innerText = showAno;
  return ano;
}

function createTitle(showTitulo) {
  const title = document.createElement('h2');
  title.className = 'show-title';
  title.innerText = showTitulo;
  return title;
}

function createImageWithLink({ instagram, imagem }) {
  const imageLink = document.createElement('a');
  imageLink.className = 'image-link';
  imageLink.href = instagram;
  imageLink.target = '_blank';
  const image = document.createElement('img');
  image.src = imagem;
  imageLink.appendChild(image);
  return imageLink;
}
