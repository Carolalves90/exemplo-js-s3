//Crie uma função que recebe uma temperatura em graus celsius retorna o valor convertido em Fahrenheit.

function converterTemperatura(grausCelsius){
    const grausFahrenheit = (grausCelsius * 9/5) + 32
    return `A temperatura convertida é ${grausFahrenheit}ºF`
}

const resultado = converterTemperatura(19)
console.log(resultado)