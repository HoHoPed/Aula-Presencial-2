const { exit } = require("process");
const readline = require ("readline");

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout

});


rl.question("Quantos alunos ", (alunos) => {   
    
    //const zero = (alunos === 0)
    //const impar = (alunos % 2 === 1)
    //const par = (alunos == 2,4,6,8,10,12,14,16,18,20)
    //const par = (alunos % 2 == 0)
 
for(let index = 0; index < alunos.length; index++){
    const atual = alunos[index]
    
    if (alunos == 0) {
        console.log(`Nenhum aluno matriculado ${alunos}`)

}

    else if (atual % 2 === 0) {
        console.log(`A quantidade de alunos é par ${alunos}`)

    }

    else 
        console.log(`A quantidade de alunos é impar ${alunos}`)
}})