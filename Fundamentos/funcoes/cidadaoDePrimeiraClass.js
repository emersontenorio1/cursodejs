// Função em Js é First-Class Object (Citizens)
// Higher-order function


// criar função de forma literal

function func1(){}

// Armazenar em uma variável
const func2 = function(){}

// Armazenar funções dentro de Array

const array =  [function (a, b){return a+b}, func1,func2]


console.log(array[0](2,3))

//Armazenar em atributo de onjeto
const obj = {}
obj.falar =  function(){return 'Opa'}

console.log(obj.falar())

// Passar função como parametro para outra função

function run(fun){
    fun()
}

run(function(){
    console.log('Executando ...')})


//    run('test') exemplo de erro


//uma função pode retornar ou conter uma função


function soma(a,b){
    return function(c){
        console.log(a + b +c)
    }
}


soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)