const horario = Number(prompt('Digite um horário:'))

// if/else

if(horario >= 0 && horario < 6) {
  alert('é madruga')
} else if(horario >= 6 && horario < 12) {
  alert('é manhã')
} else if(horario >= 12 && horario < 18) {
  alert('é tarde')
} else if(horario > 18 && horario < 24) {
  alert('é noite')
} else {
  alert('horário inválido')
}

// operador ternáro

// horario < 12 ? alert('dia') : alert('noite')

// const regiao = prompt('Digite a região:')

// switch/case

// switch (regiao) {
//   case 'nordeste':
//     alert('possui 9 estados')
//     break
//   case 'norte':
//     alert('possui 7 estados')
//     break
//   case 'centro-oeste':
//     alert('possui 3 estados e o DF')
//     break
//   case 'sudeste':
//     alert('possui 4 estados')
//     break
//   case 'sul':
//     alert('possui 3 estados')
//     break
//   default:
//     alert('região não existe no Brasil') 
// }

