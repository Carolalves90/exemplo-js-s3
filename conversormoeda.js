//Crie uma função que irá converter uma quantia de real para dolar utilizando a cotação do dia.

function conversorMoeda (valorReal){
    const valorDolar = 4.68
    const resultado = valorReal / valorDolar
    return `${resultado.toFixed(2)} dólares`
}

console.log(conversorMoeda(5))