//Vamos criar uma função que calcula o IMC de uma pessoa, dado a altura em m e a massa em kg.

function calculaImc(peso, altura){
    const alturaAoQuadrado = Math.pow(altura,2)
    const valorIMC = peso/ alturaAoQuadrado

    return `O resultado é ${valorIMC.toFixed(2)}`
}

console.log(calculaImc(53,1.58))
