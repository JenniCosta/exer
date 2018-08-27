const fs = require('fs');

fs.writeFile('teste.txt','Hello', function(error){
   if(erro){
       console.log('não foi possivel gravar o arquivo');
       console.log(erro);
   } else{
       console.log('O arquivo foi gravado!');
   }
}
) 
console.log ('oii');