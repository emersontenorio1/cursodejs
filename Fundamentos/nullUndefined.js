let valor // nao inicializada
console.log(valor) // imprime undefined, pois a variavel não foi incializada

valor = null // ausência de valor, foi incializada,no entando não tem valor
console.log(valor)
//console.log(valor.toString()) //erro, pois o metodo toString não consegue ser aplicado em valores null


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)


produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)
produto.preco = null //sem  preço
console.log(!!produto.preco)
console.log(produto)
