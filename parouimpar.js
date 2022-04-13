//Crie uma função que determina se um número é par ou impar.

function determninaParOuImpar(numero){
    if (numero % 2 == 0){
        return 'Par'
    } else if (numero % 2 != 0) {
        return 'impar'
    }
}

console.log(determninaParOuImpar(3))