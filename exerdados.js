const fs= require('fs');

let comandos = process.argv[2];
// let tarefa = process.argv[3];

if(comandos === 'inserir'){
    fs.writeFile('exer.json',comandos,function jaAdicionada(){
        if(jaAdicionada){
            console.log ('ja Adicionada');
            // console.log (jaAdicionada);
            return;
        }
        Console.log('Foram adicionadas')
    })
}


