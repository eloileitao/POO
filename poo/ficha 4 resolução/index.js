//classe para representar um carro
class Carro{
    constructor(marca,matricula, cor, deposito,tipo)
    {
        this.marca=marca
        this.cor=cor
        this.deposito=deposito
        this.tipo=tipo
    }
    //cores disponiveis
    
    //propriedade marca
    get marca(){
        return this._marca

    }
    set marca(novaMarca){
        this._marca=novaMarca
        
    }
     //propriedade marca
     get cor(){
        return this._cor

    }
    set cor(novaCor){
        //verificar se a cor esta no array
        //se estiver entao altera-se a cor do carro 
        let msg=""
        if(cores.idexof(novaCor)!=-1){
           return this._cor=novaCor
        }
        //se nao diz-se que nao é possivel alterar a cor do carro e mantem-se a cor atual
        else{
             msg="Cor indisponivel"
             return msg
        }
       
        
    }
    
    
}
let cores=["vermelho","branco","preto","cinzento"]
let carros=[]
let carro1= new Carro("ferrari","vermelho",100,"gasoleo")
let carro2= new Carro("porche","branco",60,"gasolina")
carros.push(carro1,carro1)
//marca do carro1 e cor
Console.log(`Marca: ${carro1.marca} Cor:${carro1.cor}`)
//alterar a cor do carro1
carro1.cor="branco"
Console.log(`Marca: ${carro1.marca} Cor:${carro1.cor}`)


