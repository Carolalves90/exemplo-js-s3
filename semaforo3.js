function informaTransito(corFarol){
    switch(corFarol){
        case 'vermelha':
            return 'PARE'
        case 'amarela':
            return 'ATENÇÃO'
        case 'verde':
            return 'SIGA'
        default:
            return 'Em Manutenção'
    }
}

console.log(informaTransito('preto'))