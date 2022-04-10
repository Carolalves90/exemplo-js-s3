//Utilizando os conceitos que estudamos, vamos criar um programa que funcionará como um sinal de transito.

function fluxoDeTransito(farol){
    if(farol == 'verde'){
        return 'Siga'
    } else if (farol == 'amarelo'){
        return 'Atenção'
    } else if (farol == 'vermelho'){
        return 'Pare'
    }
} 

console.log(fluxoDeTransito('vermelho'))
