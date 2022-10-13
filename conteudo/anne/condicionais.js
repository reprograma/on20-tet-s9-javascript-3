 const horario = prompt('DIgite um horário:')
 
 if(horario >= 0 && horario < 6) {
    alert('é madruga')
 }else if (horario >= 6 && horario < 12) {
    alert('é manhã')
 }else if (horario >= 12 && horario < 18) {
    alert('é tarde')
 }else if (horario > 18 && horario < 24) {
    alert('é noite')
 }else {
    alert('horário inválido')
 }

 // operador ternário
 horário < 12 ? alert('dia') : alert('noite')


 const regiao = prompt('Digite a região:')

 // switch/case para casos especificos

 switch (regiao) {
    case 'nordeste':
        alert('possui 9 estados')
        break
    case 'norte':
        alert('possui 7 estados')    
        break
    case 'centro-oeste':
        alert('possui 3 estados')   
        break // para o switch
        default: //default é tipo o else pega tudo q n se encaixa e executa
            alert('nãp existe')
 }