function getInteiroAleatorioEntre(min, max){
    const valor = Math.random()* (max - min)+ min;
    return Math.floor(valor);

}

let opcao

do{
    opcao = getInteiroAleatorioEntre(-1,100)
    console.log(`Opção escolhida foi ${opcao}.`)
}while(opcao != -1)


console.log("Até a próxima")