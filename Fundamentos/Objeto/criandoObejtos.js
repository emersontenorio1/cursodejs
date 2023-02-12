//usando a notação Literal

const obj1= {
    nome: 'emerson',
    Idade: 35
}

console.log(obj1)

//Object em js

console.log(typeof Object, typeof new Object)
const obj2= new Object
console.log(obj2)

// funções construtoras

function produto(nome, preco, desc){
    this.nome = nome
}