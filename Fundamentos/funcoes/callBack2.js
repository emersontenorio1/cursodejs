const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0 ]

//sem callback
let notasBaixas = []

for (let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}

const imprimir = (notas) =>{
    console.log(`AS notas baixas são ${notas}`)
}

notasBaixas.forEach(imprimir)

//com callbak

const notasBaixasdois = [] = notas.filter(function(nota){
    return nota<7
})
//console.log(notasBaixasdois)
notasBaixasdois.forEach(imprimir)


const notasBaixastres = [] = notas.filter(nota => nota<7)