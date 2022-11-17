const json = [
    {
      "imagem": "./images/pose.jpg",
      "título": "Pose",
      "ano": "2018",
      "diretor": "Ryan Murphy",
      "gênero": ["Drama"],
      "elenco": ["Dominique Jackson", "Indya Moore", "Mj Rodriguez", "Angelica Ross", "Hailie Sahar"], 
      "instagram": "https://www.instagram.com/poseonfx/"
    },
    {
      "imagem": "./images/manhas.jpg",
      "título": "Manhãs de Setembro",
      "ano": "2021",
      "diretor": "Luis Pinheiro",
      "gênero": ["Drama"],
      "elenco": ["Liniker", "Linn da Quebrada"], 
      "instagram": "https://www.instagram.com/explore/tags/manhasdesetembroserie/"
    },
    {
      "imagem": "./images/euphoria.jpg",
      "título": "Euphoria",
      "ano": "2019",
      "diretor": "Sam Levinson",
      "gênero": ["Drama"],
      "elenco": ["Hunter Schafer", "Ron Leshem", "Daphna Levin"], 
      "instagram": "https://www.instagram.com/euphoria/"
    },
    {
      "imagem": "./images/veneno.jpeg",
      "título": "Veneno",
      "ano": "2020",
      "diretor": "Javier Ambrossi",
      "gênero": ["Drama", "Biografia"],
      "elenco": ["Daniela Santiago", "Jedet Sánchez", "Isabel Torres", "Lola Rodríguez", "Paca La Piraña"], 
      "instagram": "https://www.instagram.com/venenolaserie/"
    },
    {
      "imagem": "./images/legendary.jpg",
      "título": "Legendary",
      "ano": "2020",
      "diretor": "Rik Reinholdtsen",
      "gênero": ["Reality Show", "Competição"],
      "elenco": ["Leiomy Maldonado", "Megan Thee Stallion", "Dashaun Wesley"], 
      "instagram": "https://www.instagram.com/legendarymax/"
    },
  ]

const imagem = document.getElementById('imagem')
const título = document.getElementById('titulo')
const ano = document.getElementById('ano')
const diretor = document.getElementById('diretor')
const gênero = document.getElementById('gênero')
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

    let TítuloElement = document.createElement('h2')
    TítuloElement.innerText =  element.titulo

    li.append(imgElement, TítuloElement);
    lista.appendChild(li)

  });
}

mostrarTodos()

function criarOptions() {
  json.forEach(element => {
    // preencher opções do select
    const option = document.createElement('option')
    option.value = element.título
    option.innerText = element.título
    select.appendChild(option)
})
}

preencherDados = () => {

  const opcaoSelecionada = select.options[select.selectedIndex].text
  console.log(opcaoSelecionada);

  json.forEach(element => {

    if (opcaoSelecionada === element.título) {
      principal.style.display = "flex"
      // preencher infos, no card
          imagem.setAttribute('src', element.imagem)
          título.innerText = element.título
          ano.innerHTML = element.ano
          diretor.innerHTML = element.diretor
          gênero.innerHTML = element.gêneros.join(' | ')
          elenco.innerHTML = element.elenco.join(' - ')
          instagram.setAttribute('href', element.instagram )

    }
  });
}

criarOptions()