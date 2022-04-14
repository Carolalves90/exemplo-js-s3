//Vamos criar uma calculadora com as 4 operações matemáticas básicas? rs

// a) Deverá ser possível escolher uma operação aritimética em forma de string: 
// 'soma', 'multiplicacao', 'divisao' e 'subtracao'
// b) Deverá ser possível passar 2 números para a operação escolhida
// c) Deverá retornar o resultado e imprimir no console

function calcula(operador, n1, n2){
    let resultado
    if (operador === 'soma'){
        resultado = n1 + n2
        return resultado
    } else if(operador === 'multiplicação'){
        resultado = n1 * n2
        return resultado
    } else if(operador === 'divisão'){
        resultado = n1 / n2
        return resultado
    } else if (operador === 'subtração'){
        resultado = n1 - n2
        return resultado
    } else {
        return `${operador} é invalido`
    }
}

console.log(calcula('porcentagem',3,5))