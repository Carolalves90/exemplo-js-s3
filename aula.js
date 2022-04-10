//Utilizando os conceitos que estudamos, 
//vamos criar um programa que irá nos informar os dias de aula para a nossa turma.

function diasDeAula(dia){
    if(dia == 'segunda'){
        return 'Orientação Educacional'    
    } else if(dia == 'terça' || dia == 'quinta'){
        return 'Aula Monitoria'
    } else if(dia == 'quarta'){
        return 'Aula de Revisão'
    } else if(dia == 'sexta'){
        return 'Entrega de Atividade'
    } else if(dia == 'sabado'){
        return 'Aula Presencial'
    } else {
        console.log(`${dia} não haverá aula`)
    }
}

console.log(diasDeAula('segunda'))