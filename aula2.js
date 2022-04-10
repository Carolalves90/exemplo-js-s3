function verificaDiaAula(diaDaSemana){
    switch(diaDaSemana){
        case 'quarta':
            return 'é dia de revisão'
        case 'sábado':
            return 'é dia de aula'
        case 'terça':
        case 'quinta':
            return 'é dia de monitoria'
        default:
            return 'não tem aula'
    }
}

console.log(verificaDiaAula('quinta'))