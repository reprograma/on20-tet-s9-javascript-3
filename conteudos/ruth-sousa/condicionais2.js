const horario = prompt ('Digite um horario')

// if/alse

if(horario >=  0 && horario < 6) {//{}= escopo
    alert('é madrugada')
} else if(horario >=  6 && horario < 12){
    alert('é manhã')
} else if(horario >= 12 && horario < 18){
    alert('é tarde')
} else if(horario > 18 && horario < 24){// e=&& ou=||
    alert('é noite')
} else {
    alert('horario invalido')
}

// operador ternário

horario < 12 ? alert('dia') : alert('noite')

// switch/case

const região = prompt('digite a região:')

switch (regiao){
    case 'nordeste':
        alert('possui 9 estados')
        break
    case 'norde':
        alert('possui 7 estados')
        break
    case 'centro-oeste':
        alert('possui 3 estados e o DF')
        break
    case 'sudeste':
        alert('possui 4 estados')
        break
    case 'sul':
        alert('possui 3 estados')
        break
    default:
        alert('Não existe essa região no Brasil')
}        
