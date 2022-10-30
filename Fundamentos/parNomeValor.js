// par nome valor

const saudacao = 'Opa' // contexto léxico 1


function exec(){
    const saudacao = "fala" //context léxico 2
    return saudacao
}




const Cliente =  {
    nome:'Pedro',
    Idade:19,
    peso: 90,
    endeco:{
        logradouro: 'Muito legal',
        numero: 10
    }
}

console.log(saudacao)
console.log(exec)
console.log(Cliente)