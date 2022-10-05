let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)


isAtivo=0
console.log(!!isAtivo)


console.log("Os Verdadeiros")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"testo")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = Infinity))
console.log(!!(isAtivo = true))
console.log(!!(isAtivo = 33))
console.log("Os Falsos")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo=false))
console.log("para finalizar")
console.log(!!('' || null || 0 || 'epa' ||'123'))


nome = ''

console.log(nome || 'Desconhecido')