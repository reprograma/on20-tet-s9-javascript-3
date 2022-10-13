// on17

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

const imagem = document.getElementById('imagem')
const titulo = document.getElementById('titulo')
const ano = document.getElementById('ano')
const diretor = document.getElementById('diretor')
const genero = document.getElementById('genero')
const elenco = document.getElementById('elenco')
const instagram = document.getElementById('instagram')
const select = document.getElementById('select')
const principal = document.getElementById('principal')
const lista = document.getElementById('lista')

function mostrarTodos() {
  
  json.forEach(element => {
    let li = document.createElement('li')
    
    li.classList.add('card')
    let imgElement = document.createElement('img')
    imgElement.setAttribute('src',  element.imagem)

    let TituloElement = document.createElement('h2')
    TituloElement.innerText =  element.titulo
    
    li.append(imgElement, TituloElement);
    lista.appendChild(li)
  
  });
}

mostrarTodos()

function criarOptions() {
  json.forEach(element => {
    // preencher as opçoes do select
    const option = document.createElement('option')
    option.value = element.titulo
    option.innerText = element.titulo
    select.appendChild(option)
})
}

preencherDados = () => {

  const opcaoSelecionada = select.options[select.selectedIndex].text
  console.log(opcaoSelecionada);

  json.forEach(element => {

    if (opcaoSelecionada === element.titulo) {
      principal.style.display = "flex"
      // preencher as informaçoes no card
          imagem.setAttribute('src', element.imagem)
          titulo.innerText = element.titulo
          ano.innerHTML = element.ano
          diretor.innerHTML = element.diretor
          genero.innerHTML = element.generos.join(' | ')
          elenco.innerHTML = element.elenco.join(' - ')
          instagram.setAttribute('href', element.instagram )
      
    }
  });
}

criarOptions() 
// por algum motivo no meu navegador o addEventListener não esta funcionando.
// select.addEventListener('change', preencherDados())

/* 

O exercício consiste em usar JavaScript para popular os campos corretamente com os dados do arquivo data.json (ou do objeto JSON) um site de informações sobre séries protagonizadas por mulheres trans e travestis, neste caso a página exibe 5 séries, em 5 cards diferentes em uma só página;

Importante:

1. Crie seu próprio layout usando HTML e CSS nos arquivos já criados nesta pasta;
2. Repare que este Json é uma matriz, logo é possível usar métodos de array para acessar seu conteúdo;
3. Entregue este exercício da maneira que conseguir, use o exemplo da sala para guiar nesta construção;

*/
