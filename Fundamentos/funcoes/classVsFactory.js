class pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome ${this.nome}`)
    }
}


const p1 = new pessoa("Jhon")

p1.falar()


const Pessoa =   (nome)=>{
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}


const p2 = Pessoa('João')
p2.falar()