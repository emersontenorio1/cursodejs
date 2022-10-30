console.log(Math.ceil(6.1))
console.log(Math.pow(10,20))


const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)


function Obj(nome){
    this.nome =nome
}


const emerson = new Obj

emerson.nome = "emerso"
console.log(emerson)

const emerson2 = emerson.nome
console.log(emerson2)
emerson2.nome = 'teste'
console.log(emerson2.nome)



console.log(emerson)