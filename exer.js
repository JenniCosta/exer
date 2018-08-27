// function getRandomArbitary(min, max){
//    return Math.random()* (0-60) + min;
    
//     console.log 
// }

// const fs = require('fs');



const fs = require ('fs')

let jogador =[]

 let y = Math.floor(Math.random() * 60) + 1;
 let sorteio=[ Math.floor(Math.random() * 60), Math.floor(Math.random()* 60),  Math.floor(Math.random()* 60), Math.floor(Math.random()* 60), Math.floor(Math.random()* 60), Math.floor(Math.random()* 60)]

// if (acertos === 6) {
//   console.log("Você ganhou! Todos os números estão corretos!");
// } else {
//   console.log("Você acertou", acertos, "numeros.");
// }

fs.writeFile('teste.txt',sorteio, function(erro){
    if(erro){
        console.log('não foi possivel gravar o arquivo');
        console.log(erro);
    } else{
        console.log('O arquivo foi gravado!');
    }
 }
 )