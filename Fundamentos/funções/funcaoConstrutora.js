function Carro(velocidadeMaxima= 200, delta =5){
    //atributo privado
    let velocidadeAtual = 0
    //metodo publico
    this.acelera = function(){
        if(velocidadeAtual +delta <= velocidadeMaxima){
            velocidadeAtual +=delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelera()
console.log(uno.getVelocidadeAtual())

const ferrari= new Carro(350,20)
ferrari.acelera()
ferrari.acelera()
ferrari.acelera()
console.log(ferrari.getVelocidadeAtual())