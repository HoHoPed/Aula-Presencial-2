const readline = require ("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

});

rl.question("Digite seu nome ", (nome) => {
rl.question("Digite sua idade ", (idade) =>{
    
        console.log(`Obrigado: ${nome}`);
        console.log(`Você tem: ${idade} anos`);

    rl.close
})
})

