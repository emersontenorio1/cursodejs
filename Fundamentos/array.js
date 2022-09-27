const valores = [7.7,6.3,9.2,8.5]

console.log(valores[0], valores[2])
console.log(valores[4])

valores [4] = 10
console.log(valores)

console.log(valores.length)


valores.push({id:3}, false, null, 'teste')
console.log(valores)
valores.pop('test')
console.log(valores)

delete valores[0]
console.log(valores)


console.log(typeof valores)