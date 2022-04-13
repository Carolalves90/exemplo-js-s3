//Crie uma função que calcula 5% de desconto retornando o valor do desconto.

function descontoDeCincoPorCento (valor){
    const resultado = valor * (5/100)
    return `Seu desconto é de ${resultado} reais`
}

console.log(descontoDeCincoPorCento(500))