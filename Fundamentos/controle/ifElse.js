const imprimirResultado = function(nota){
   // console.log(typeof(nota))

   if(typeof(nota) == 'number'){ 
    if(nota>=7){
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}else{
    console.log("Valor invalido ")
}


}

imprimirResultado(10)
//imprimirResultado("10")
imprimirResultado('a')