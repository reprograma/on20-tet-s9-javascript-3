<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# On20-TodasEmTech-JavaScriptIII

Esta é a 9ª semana da turma online: Todas em Tech 0n20 - Front-end, nesta aula do dia 08/10/2021 teremos os seguintes conteúdos:

  - [1. Estruturas condicionais](#1-estruturas-condicionais)
    - [if/else](#11-ifelse)
    - [switch/case](#12-switchcase)
  - [2. Estruturas de repetição](#2-estruturas-de-repetição)
    - [for](#21-for)
    - [while](#22-while)
    - [for/of](#23-forof)
  - [3. Callbacks](#3-callbacks)
  - [4. Arrays](#4-arrays)
    - [Criando uma array](#41-criando-uma-array)
    - [Acessando elementos da array](#42-acessando-o-valor-de-um-elemento-da-array)
  - [5. Métodos de array](#5-métodos-de-array)
    - [Métodos ded iteração](#51-métodos-de-iteração)
    - [Outros métodos de array](#52-outros-métodos-de-array)
  - [6. Objetos](#6-objetos)
    - [Criando um objeto](#61-criando-um-objeto)
    - [Acessando um objeto](#62-acessando-o-valor-de-uma-propriedade-ou-método-de-objetos-usando)
    - [Desestruturando um objeto](#63-desestruturando-um-objeto)
  - [7. Date Object](#7-objeto-date-e-seus-métodos)
    - [toLocaleDateString()](#71-tolocaledatestring)
  - [8. DOM](#8-dom)
    - [Métodos](#81-métodos-de-manipulação-dom)
    - [Propriedades](#82-propriedades-de-manipulação-dom)
    - [Eventos](#83-eventos)
## Apresentação

### Quem é a professora Lilit?

<img src='./assets/lilit.jpeg' width=500 alt='Selfie da Lilit com cabelos cacheados longos pretos, com o rosto rodeado por bolinhas predominantemente roxas'>

[Lilit Bandeira](https://www.instagram.com/lilitravesti), é uma travesti paraibana residente no São Paulo, trabalho como Software Engineer no Nubank, ex-aluna e professora {reprograma} e professora também no minas programam, estudante de Analise e Desenvolvimento de Sistemas na Mackenzie;

#### Contatos

- [E-mail](devlilitbandeira@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/lilitbandeira)
- [GitHub](https://github.com/lilitbandeira)

### Quem são as monitoras?

<img src='./assets/canary.webp' width=500 alt='personagem riko do anime kuroko no basket, ela tem cabelos castanhos lisos e curtinhos com grampos na franja, olhos castanhos, veste uma roupa colegial estilo japonês, ao fundo as paredes de um ginásio esportivo'>

### Quem são as alunas?

<img src='./assets/fullmetal.png' width=500 alt='3 personagens do anime saint seiya, todas vestem armaduras de amazonas, esquerda para direita temos a primeira com cabelos castanhos e elmo de águia e tem roupas vermelhas sob a armadura, segunda tem cabelos verdes e usa elmo de cobra e roupas verdes sob a armadura, a terceira tem cabelos são loiros e longos e segura um chicote, sob a armadura uma roupa rosa, o fundo da imagem é marrom '>

## Acordos

- Enviar dúvidas no chat com as monitoras;
- Levantar a mão sempre que desejar falar, o que pode ser feito a qualquer momento;
- Manter microfones desligados sempre que alguém estiver falando;
- Manter as câmeras ligadas o máximo de tempo possível;
- Antes de começar, vamos organizar nosso setup.
  * Fork esse [repositório](https://github.com/reprograma/on20-tet-s9-javascript-3) 
  * Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
  * Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
  * Altere as pastas chamadas "nome-aluna" para o seu nome-sobrenome, estes são os únicos locais onde você deve realizar alterações 

# Plan de Aula

## 0. Como um programa funciona?

Entrada, processamento e saída de dados;

### 0.1. Exemplo do caixa eletrônico de um banco.¹

- Entrada de dados;
- Escolha da operação desejada;
- Exibição dos dados ou do status da solicitação;

### 0.2. Fluxos

- Programação sequencial (uma tarefa após a outra);
- Programação condicional (uma verificação a partir do conceito de verdadeiro e falso que determina o que ocorre a seguir);
- Programação de Repetição (instruções que definem um padrão de repetição finito);

> A lógica é sobre organizar pensamentos, colocando-os em ordem e decidindo a partir de deduções as melhores soluções para os problemas encontrados, com a lógica somos capazes de compreender o que é pedido, realizar deduções lógicas, enumerar etapas, analisar outras possibilidades, ensinar ao computador a sua solução, analisar detalhes.

---
## 1. Estruturas condicionais 

São instruções da linguagem baseadas no binário lógico `true` ou `false` (1 ou 0) que nos permite desviar o fluxo do algoritmo de acordo com um teste baseado em condições.

### 1.1. `if/else`

A condicional `if` é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de `else`. _(MDN)_ Podemos encadear vários ifs com `else if`

```js
const horario = 7; // valor esperado entre 0 e 23
```

```js
if (horario < 12) {
  console.log("dia");
} else {
  console.log("noite");
}
```

#### 1.1.1. Reduzindo com condicional ternário

```js
horario < 12 ? console.log("dia") : console.log("noite");
```

#### 1.1.2. Podemos encadear `else if`

```jsx
if (horario >= 0 && horario < 6) { 
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) { 
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 &&  horario < 24) {
    console.log("noite");
} else {
    console.log("horário inválido"); 
}
```

### 1.2. `switch/case`

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case. (MDN) Passamos o break para sair da condicional quando um case é correspondido e sua instrução executada. Caso nenhum case seja correspondido podemos usar a cláusula default (opcional)

```jsx
let regiao = 'centro-oeste'

switch (regiao) {
    case 'nordeste':
        console.log('possui 9 estados');
        break;
    case 'norte':
        console.log('possui 7 estados');
        break;
    case 'centro-oeste':
        console.log('possui 3 estados e DF');
        break;
    case 'sudeste':
        console.log('possui 4 estados');
        break;
    case 'sul':
        console.log('possui 3 estados');
        break;
}
```

---
## 2. Estruturas de repetição

- Podemos chamar também de Loop, laço ou método de iteração. Trata-se de comandos que mantém um trecho de código sendo executado até que uma condição de parada seja satisfeita;
- Sua principal função é possibilitar que possamos repetir um trecho de código sem a necessidade de escrever várias vezes esse trecho, para isso basta ter um ponto de partida e um ponto de chegada para a repetição;

### 2.0. Array para exemplos

  ```js
  const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
  ```

### 2.1. `for`

É uma estrutura de repetição com variável de controle, usada quando se sabe exatamente o ponto de partida e de chegada, o bloco será repetido enquanto a condição for verdadeira, ou seja, para quando a condição retorne false.

```js
  for (expressaoInicial; condicaoDeParada; incremento) {
    código aqui;
  }
```

#### Exemplo

```js
for (let i = 0; i < numeros.lenght; i++) {
  const dobro = numeros[i] * 2;
  console.log(dobro);
}
```

### 2.2. `while`

Tem um funcionamento muito parecido com o do `for`, de executar sua intrução desde que a condição seja verdadeira, é sempre possível substituir o uso do `for` pelo do `while`, sendo o critério obter o código de melhor leitura, o `while` está mais atrelado à condição ser atendida enquanto o `for` é mais usado para iterar com contadores.

```js
  while (condicao) {
    código aqui;
  }
```

#### Exemplo

```js
let i = 0;
while (i < numeros.lenght) {
  const dobro = numeros[i] * 2;
  console.log(dobro);
  i++;
}
  ```

### 2.3. `for/of`

É um laço que percorre objetos iterativos, sendo o mais comum a array, chamando uma função para cada valor deste objeto;

```js
  for (variavel of iteravel) {
    declaração
  }
```

#### Exemplo

```js
for (let numero of numeros) {
  const dobro = numero * 2;
  console.log(dobro);
}
```

---
## 3. Callbacks

Uma função callback é uma função passada a outra função como parâmetro, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação. _(MDN)_ A Callback é chamada no retorno da função externa.

```js
function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function calcular(a, b, callback) {
  return callback(a, b);
}

const num1 = 7;
const num2 = 2;

calcular(num1, num2, somar); // 9
calcular(num1, num2, subtrair); // 5
calcular(num1, num2, multiplicar); // 14
calcular(num1, num2, dividir); // 3.5
```

### 3.1. Deixando a sintaxe reduzida com arrow function

```js
const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

const calcular = (a, b, callback) => callback(a, b);
```

---
## 4. Arrays

### 4.1. Criando uma array:**

```js
const tipos = ["String", "Números", "Booleanos"];
const cidades = new Array("Recife", "São Paulo", "Manaus");
const cursos = "frontend backend".split(" ");
const tecnologias = Array.of("HTML", "CSS", JS);
```

### 4.2. Acessando o valor de um elemento da array

```js
console.log(tipos[1]);
```

---
## 5. Métodos de Array

### 5.0. Array para exemplos

  ```js
  const numeros = [3, 2, 4, 3, 5, 1, 3, 4, 2];
  ```

### 5.1. Métodos de iteração

- `find()`

  ```js
  const encontrarPrimeiro = numeros.find((element) => element == 2);
  console.log(encontrarPrimeiro); // retorno 2
  ```

- `filter()`

  ```js
  const filtrarPor = numeros.filter((element) => element == 3);
  console.log(filtrarPor); // retorno [3, 3, 3]
  ```

- `map()`

  ```js
  const executarTodos = numeros.map((element) => (element = 4));
  console.log(executarTodos); // retorn  [4, 4, 4, 4, 4, 4, 4, 4, 4]
  ```

- `forEach()`

  ```js
  const verTodos = numeros.forEach((element) => console.log(element));
  console.log(verTodos); // retorno  3\n2\n4\n3\n5\n1\n3\n4\n2
  ```

- `reduce()` -> O método reduce() uma callback que será executada para cada elemento da array, resultando num único valor de retorno, esta callback pode receber alguns parâmetros, sendo os mais comuns o `acumulador` e o `valorAtual`

  ```js
  const ReduzirPara = numeros.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual
  );
  console.log(ReduzirPara); // retorno 27
  ```

### 5.2. Outros métodos de array

 - `concat()` -> retorna um novo array contendo todos os arrays ou valores passados como parâmetro. _(MDN)_

  ```js
  const arrayConcatenada = numeros.concat(1, [2, 3], "café");
  console.log(arrayConcatenada); // retorno [3, 2, 4, 3, 5, 1, 3, 4, 2, 1, 4, 5, 2, 'café']
  ```

- `push():` -> adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. _(MDN)_

  ```js
  const adicionaNoFinal = numeros.push(2, 3);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `pop():` -> remove o último elemento de um array e retorna aquele elemento. _(MDN)_

  ```js
  const removeUltimo = numeros.pop();
  console.log(removeUltimo); // retorno 2
  ```

- `shift()` -> remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array. _(MDN)_

  ```js
  const removePrimeiro = numeros.shift();
  console.log(removeUltimo); // retorno 3
  ```

- `unshift()` -> adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado. _(MDN)_

  ```js
  const adicionaNoInicio = numeros.unshift(4, 1);
  console.log(adicionaNoFinal); // retorno 11
  ```

- `slice()` -> retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é necessário) de um array original. O Array original não é modificado. _(MDN)_

  ```js
  const copiaParte = numeros.slice(2, 5);
  console.log(copiaParte); //retorno [4, 3, 5]
  ```

- `splice()` -> altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos. _(MDN)_

  ```js
  const removeEAdiciona = numeros.splice(2, 2, "novo");
  console.log(removeEAdiciona); //retorno [4, 3] -> removidos
  console.log(numeros); // retorno [3, 2, 'novo', 5, 1, 3, 4, 2]
  ```

- `indexOf()` -> retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente. _(MDN)_

  ```js
  const localizaElemento = numeros.indexOf(2);
  console.log(localizaElemento); // retorno 1
  ```

- `includes()` -> determina se um array contém um determinado elemento, retornando true ou false apropriadamente. _(MDN)_

  ```js
  const verificaSeExiste = numeros.includes(4);
  console.log(localizaElemento); // true
  ```

- `join()` -> junta todos os elementos de um array em uma string e retorna esta string. _(MDN)_

  ```js
  const transformaString = numeros.join("-");
  console.log(transformaString); // retorno "3, 2, 4, 3, 5, 1, 3, 4, 2"
  ```

---
## 6. Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). _(MDN)_ Os objetos são formados por chave e valor

### 6.1. Criando um objeto

```js
const aluna = {
  nome: { primeiro: "Gabriela", segundo: "Barbosa" },
  idade: 21,
  cidade: "Palmas",
  interesses: ["música", "animes"],
  saudacao: () => console.log("olá meninas"),
};
```

### 6.2. Acessando o valor de uma propriedade ou método de objetos usando

- Notação de ponto - Digitando o ponto, podemos acessar todos as propriedades e métodos encapsuladas dentro do objeto

```js
console.log(aluna.nome.primeiro);
aluna.saudacao();
```

- Notação de cochetes: Parecido com a maneira que acessamos itens de um array, só que ao invés de usarmos índice (número), usamos a chaves (strings) para acessar o valor de um item

```js
console.log(aluna["nome"]["primeiro"]);
console.log(aluna["idade"]);
console.log(aluna["interesses"][0]);
```

### 6.3. Desestruturando um objeto

```js
const { idade, saudacao } = aluna;
```

---
## 7. Objeto Date e seus métodos

Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC). _(MDN)_

```js
const hoje = new Date();

console.log(hoje); // 2022-10-08T10:56:49.693Z

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(`${dia}/${mes + 1}/${ano}`); // 08/10/2022 🤔
```

### 7.1. `toLocaleDateString()`

Método que retorna uma string com a representação de parte da data baseando-se no idioma. _(MDN)_ Argumentos _locales_ e _options_

```js
const dataFormatada = hoje.toLocaleDateString("pt-BR");
console.log(dataFormatada); // 08/10/2022

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const dataLonga = hoje.toLocaleDateString("pt-BR", options);
console.log(dataLonga); // sábado, 08 de outubro de 2022
```

---
## 8.  DOM

<img src='./assets/dom.png' width=700 alt='árvore de estrutura do DOM'>

DOM é uma sigla que significa Document Object Model. Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do HTML. A forma mais fácil de acessar e manipular o DOM é usando JavaScript.

- document: representa o documento HTML
- element: são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM
- text: é o conteúdo de texto que vai entre os elementos (tags).
- attribute: são os todos atributos para um nó específico. No caso, o attribute href="http:// instagram .com/lilitbandeira" está associado ao elemento, outros exemplos de atributos são o class, o src, o id, entre outros.

O DOM é a representação do objeto do documento HTML e atua como uma interface de programação que permite a manipulação de sua estrutura com o JavaScript ou outras linguagens. Podemos manipular o DOM para realizar alterações na estrutura do HTML, alterar estilos, modificar conteúdos e adicionar diversos eventos.

### 8.1. Métodos de manipulação DOM

O DOM possui muitos métodos, são eles que fazem a ligação entre os nós (elementos) e os eventos.

Seguem alguns dos principais métodos, para a lista completa acesse a [documentação.](https://developer.mozilla.org/en-US/docs/Web/API/Document)

- `getElementById()` -> Retorna o elemento que possui o id passado como argumento;
- `getElementsByClassName()` -> Retorna uma coleção de todos os elementos que possuem a classe passada como argumento;
- `getElementsByTagName()` -> Retorna uma coleção de todos elementos que possuem a tag name informada
- `querySelector()` -> Retorna o primeiro elemento do DOM que possui a .class, #id ou tag passada como argumento;
- `querySelectorAll()` -> Retorna todos os elementos do DOM que possuem a .class, #id ou tag passada como argumento;
- `createElement()` -> Cria um elemento na página;
- `createAttribute()` -> Cria um atributo na página;
- `appendChild()` -> Insere um elemento filho ao final do elemento mãe;
- `removeChild()` -> Remove um elemento filho e retorna o elemento removido;
- `parentNode()` -> Retorna a mãe de um elemento.

### 8.2 Propriedades de manipulação DOM

- `innerText` -> define ou obtém o conteúdo textual "renderizado" de um nó e seus descendentes;
- `innerHTML` -> define ou obtém a sintaxe HTML contida no elemento;
- `value` -> define ou retorna o valor do atributo value de um campo de texto.
- `classList` -> propriedade somente leitura que retorna uma coleção com as classes do elemento;
  - `add()` -> adiciona uma classe ao elemento;
  - `remove()` -> remove uma classe do elemento;
  - `toggle()` -> adiciona uma classe ao elemento caso a classe não exista, caso exista a remove;
  - `contains()` -> Retorna um valor booleano, indicando se um elemento tem o nome da classe especificada;
- `style` -> Acrescenta/modifica um estilo ao elemento;

### 8.3 Eventos

Um eventos é um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. A Grande maiorria dos eventos nascem na interação da usuária com a aplicação, como:

| Evento      | Descrição                                                    |
| ----------- | ------------------------------------------------------------ |
| onBlur      | remove o foco do elemento                                    |
| onChange    | muda o valor do elemento                                     |
| onClick     | o elemento é clicado pela usuária                            |
| onFocus     | o elemento é focado                                          |
| onKeyPress  | a usuária pressiona uma tecla sobre o elemento               |
| onKeyUp     | define ação quando a usuária libera a tecla é pressionada    |
| onLoad      | carrega o elemento por completo                              |
| onMouseOver | define ação quando a usuária passa o mouse sobre o elemento  |
| onMouseOut  | define ação quando a usuária retira o mouse sobre o elemento |
| onSubmit    | define ação ao enviar um formulário                          |

Para manipular evento externo podemos usar `Event listener` que adiciona ou remove um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

> Listener é um objeto que recebe uma notificação quando um evento do tipo especificado ocorre.

`addEventListener` - Adiciona um listener que dispara uma função quando ocorrer determinado evento no elemento.
`removeEventListener` - Remove um listener previamente adicionado em um objeto/elemento e retorna true em caso de sucesso.

```js
elemento.addEventListener('click', function (evento) {
  //ação a ser executada no clique do elemento
  console.log(evento);
});
```

> Usamos o método preventDefault() para cancelar a ação padrão que pertence a um determinado evento.
---

# Exercícios 

## [Exercicio para sala](https://github.com/reprograma/on20-tet-s9-javascript-3/tree/main/exercicios/nome-aluna/para-sala)

## [Exercicio para casa](https://github.com/reprograma/on20-tet-s9-javascript-3/tree/main/exercicios/nome-aluna/projeto-casa)

---
# Referências

```bash
  Livro: Lógica de Programação e Algoritmos com JavaScript
  Autor: Edécio Fernando Lepsen
  Editora: novatec
``` 
## Links úteis 

- [Curso Glaucia](https://www.youtube.com/watch?v=SXBNpzjusgY&list=PLb2HQ45KP0WsFop0pItGSUYl6baYjKEye&ab_channel=GlauciaLemos)
