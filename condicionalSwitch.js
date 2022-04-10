function resultadoFesta(mes) {
switch (mes) {
    case 'fevereiro':
        return 'É carnaval'
        break
    case 'junho':
        return 'É São João'
        break
    case 'dezembro':
        return 'É Natal'
        break
    default: 
        return 'NÃO É FESTA'
    }
}

console.log(resultadoFesta('abril'))