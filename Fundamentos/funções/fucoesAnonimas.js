const soma =(x,y)=>{

    return x + y

}


const imprimirResutado = (a,b,operacao=soma)=>{
    console.log(operacao(a,b))
}


imprimirResutado(3,4)
imprimirResutado(3,4, soma)
imprimirResutado(3,4 ,function(x,y){
    return x - y
})
imprimirResutado(3,4, (x,y)=> x*y)

const pessoa = {
    falar: () => {
        console.log('Opa')
    }
}

pessoa.falar()