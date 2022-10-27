// Estrutura Condicional - if/else 
//o if ele precisa ter uma condição e com ela uma ação a ser realizada cao essa condição ela for verdadeira, caso que não, segue o fluxo.  
// o else ele pode aparecer mais é quando algo mais específo aconteça


const horario = prompt ('digite um horario:')

// if(horario >= 0 && horario < 6 ){
//     alert('é dia')
// } else{
//     alert ('é noite')
// }

// juntar 2 funções entra o e && ; ou || 

// Se quiser colocar algo mais mais definido, pode usar o elseif 

if(horario >= 0 && horario < 6 ){
    alert('é madrugada ')
} else if (horario >= 6 && horario < 12){
    alert ('é manha')
} else if(horario >= 12 && horario < 18){
alert ('é de tarde')
} else if ( horario > 18 && horario < 24){
    alert ('é noite')
} else {
    alert ('horario invalido ')
}

// toFixed pode ajudar acrescentar as casa decimais.

//operador ternario - nao pode utilizar em casos mais complexos, apenas simples com if/else 

// horario < 12 ? alert ('dia') : alert ('noite')

