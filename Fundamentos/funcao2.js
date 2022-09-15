// amarzenar um  função dentro de uma constante


const imprimirSoma = function(a,b){

console.log(a+b)

}


imprimirSoma(2,5)

// armazenando uma funcao arrow em variavel


const soma = (a, b) =>{
    return a+b
}


console.log(soma(4,5))



//retorno implicito

const subtracao =(a,b) => a-b

console.log(subtracao(2,5))