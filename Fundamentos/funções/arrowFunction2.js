/*function Pessoa(){
    this.idade = 0

    const self =  this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this),1000)

}*/



function Pessoa() {
this.idade = 0

    setInterval(()=>{
      this.idade++
      console.log(this.idade)
    },1000)
} 

let pessoa = () =>{
     this.idade = 0

    setInterval(()=>{
      this.idade++
      console.log(this.idade)
    },1000)
}

new Pessoa
new pessoa