const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

const template = `Olá ${nome}!`

console.log(concatenacao)
console.log(template)

console.log(`1+1= ${1+1}`)
// função arrow com 1 parametro
const up = texto => texto.toUpperCase()

console.log(up("emerson"))