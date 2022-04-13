//Crie uma função que determina se um número é par ou impar.

function parImpar (numero){
    if (numero % 2 == 0){
        return 'Par'
    } else {
        return 'impar'
    }
}

console.log(parImpar(3))