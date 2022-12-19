const notas = [6.7, "emerson", 8]




for (let i in notas) {
    console.log(`Valores ${notas[i]}`)
}


const pessoa = {
    nome : 'Emerson',
    sobrenome: 'Silva',
    idade: 29,
    peso:64
}


for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}