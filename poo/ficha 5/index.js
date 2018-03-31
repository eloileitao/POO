//classe para representar um retangulo
function funcA()
{
class retangulo
{
    constructor(largura=1,altura=2)
    {
        this.altura=altura
        this.largura=largura
        this._cor="branco"
    }
    get largura(){
        return this._largura
    }
    set largura(newValue)
    {
        this._largura=newValue
    }
    get altura(){
        return this._altura
    }
    set altura(newValue)
    {
        this._altura=newValue
    }
    get cor()
    {
        return this._cor
    }
    getArea(){
        return this.largura*this.altura
    }
    getPerimetro(){
        return 2*this.largura+2*this.altura
    }
}

let myRet= new retangulo(2,3)

//
let myRet2= new retangulo()
console.log(myRet.largura)
myRet.largura=5
console.log(myRet.largura)
console.log(myRet.getArea())
console.log(myRet.getPerimetro())
console.log(myRet2.getArea())

//

//chama o getter
console.log(myRet.largura)
//chama o setter
myRet.largura=2

}

function funcB()
{
//Classe para representar um ciclo
class Circulo{
    //criar o construtor
    constructor(raio){
        this.raio=raio
    }
    //criar o get raio
    get raio()
    {
        return this._raio
    } 
    //criar o set
    set raio(newRaio)
    {
       
       this._raio=newRaio
    }
    //Metodo para calcular a area
    getArea()
    {
        return this.raio*this.raio*Math.PI
    }
    //metodo para calcular o perimetro
    getPerimetro()
    {
        return this.raio*Math.PI*2
    }
    //aumentar raio
    aumentarRaio()
    {
        //guardar o novo valor do raio
      return this._raio= this.raio*percentagem/100
    }
}
let myCircle=new Circulo(5)
let resp=prompt("Deseja atribuir um novo valor de raio?").toLowerCase()

if(resp=="sim")
{
    myCircle.raio=prompt("Insira um valor:")
}

console.log("Area: "+myCircle.getArea()+"\n"+"Perimetro: "+myCircle.getPerimetro())
//definir o valor percentagem para aumentar o raio
let percentagem = 30
let resp2=prompt("Deseja aumentar o valor de raio?").toLowerCase()
if(resp2=="sim")
{
    percentagem=prompt("Insira uma percentagem a aumentar:")
    myCircle.aumentarRaio()
    
}
 //Imprimir o novo valor de raio
 console.log(myCircle.raio)





}
function funcC()
{
    //constantes
    const VELOCIDADE={
        BAIXA:1,
        MEDIA:2,
        ALTA:3
    }
    //Classe ventoinha
    class Ventoinha
    {
       //Construtor
       constructor(raio){
           this.velocidade= VELOCIDADE.BAIXA
           this.ligada=false}
       //propriedade: velocidade(get e set)
       get velocidade(){
           return this._velocidade
       }   
       set velocidade(novaVelocidade){
           this._velocidade=novaVelocidade

       }  
       //propriedade: ligada(get e set)
       get ligada(){
           return this._ligada
       }   
       set ligada(novaLigada){
           this._ligada=novaLigada
       }
       //resposta consoante as condições
       toString(){
       if(this.ligada)
       {
           return `A ventoinha está ligada com a velocidade ${this.velocidade}`
       }
       else{
           return "A ventoinha está desligada"
       }
       }
    }
    //criar duas novas instancias da classe ventoinha
    let minhaVentoinha1= new Ventoinha()
    let minhaVentoinha2= new Ventoinha()
    //mostrar dados da ventoinha1
    //Vai ao get e depois passa pela função "ToString"
    console.log(minhaVentoinha1.toString())
    //Ligar e aumentar a velocidade da segunda ventoinha
    //vai ao set
    minhaVentoinha2.ligada=true
    minhaVentoinha2.velocidade=VELOCIDADE.ALTA
    //mostrar dados da ventoinha2
    console.log(minhaVentoinha2.toString())
}
function funcE()
{

////Classe para representar um pais
class pais
{
    constructor(nome, area, populacao){
        this.nome=nome
        this.area=area
        this.populacao=populacao
    }
    //propriedade NOME
    get nome(){
        return this._nome
    }
    set nome(newNome){
        this._nome=newNome
    }
     //propriedade AREA
     get area(){
        return this._area
    }
    set area(newArea){
        this._area=newArea
    }
    //metodo ver qual o maior pais
    static getnomePaismaiorArea(){
        let maior=0
        let maiornome=""
       
        for(let i=0;i<paises.length;i++)
        {
            
            if(paises[i].area>maior)
            {
              maior=paises[i].area
              maiornome=paises[i].nome
            }
        }
        return maiornome
    }
}
let paises=[]
let myPais=new pais("Portugal",400000,50000)
let myPais1=new pais("espanha",410000,50000)
let myPais2=new pais("frança",420000,50000)
let myPais3=new pais("egipto",500000000,50000)
let myPais4=new pais("china",490000,50000)
paises.push(myPais,myPais1,myPais2,myPais3,myPais4)
console.log(pais.getnomePaismaiorArea())
}