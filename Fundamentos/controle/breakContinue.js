function getInteiroAleatorioEntre(min, max){
    const valor = Math.random()* (max - min)+ min;
    return Math.floor(valor);

}

const nuns= [
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,),
    getInteiroAleatorioEntre(1,10,), 
    getInteiroAleatorioEntre(1,10,), 
    ]


    for(let x in nuns) {
       
        if(nuns[x] == 5){ 
            break
        }
        console.log(`${x} = ${nuns[x]}`)
    }

console.log("___________________________________________________")

    for(let y in nuns) {
       
        if(nuns[y] == 5){ 
            continue
        }
        console.log(`${y} = ${nuns[y]}`)
    }


    externo: for (a in nuns){
    for (b in nuns){
        if(a == 2 &&  b == 3 )break externo
        console.log(`Par = ${a}, ${b}`)

    }
}