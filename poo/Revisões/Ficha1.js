
let numerico=[ 7, 3, 6, 12, 5]
parseInt(numerico)
let strings=["Vermelho","Verde","Branco","Preto"]
function funcA(){
    console.log("Ola Mundo!")
}
function funcB(){
    let nome="Eloi"
    console.log("Ola "+nome+"!")
}
function funcC(){
    let lado1= parseInt(prompt("Insira um lado do retangulo:"))
    let lado2=parseInt(prompt("Insira o valor do outro lado do retangulo"))
    let area= lado1*lado2
    console.log(`Area:${area}` )

}
//Obter a media
function funcD(){

function media() {
    let total=0
    for(let i=0;i<numerico.length;i++)
    {
        total+=numerico[i]
    }
    let resultado=total/numerico.length
    return resultado
}
console.log(media())
}
////função de obter o maior
function funcF() {
    function maior() {
    let maior=0
    for(let i=0;i<numerico.length;i++)
    {
        if(numerico[i]>maior)
        {
            maior=numerico[i]
        }
    }
    return maior
        
    }
    console.log(maior())
}
///função de obter o menor
function funcE() {
    function menor() {
        numerico.sort(function(a, b){return a - b})
        let menor=numerico[0]
        return menor
    }
   console.log(menor()) 
}
//remover um elemento do array
function funcG()
{
    function remove() {
        let str="Branco"
        for(let i=0;i<strings.length;i++)
        {
            if(strings[i]==str)
            {
                strings.splice(i,1)
            }
        }
        return strings
        
    }
    console.log(remove())
}
//concat
function funcH()
{
    function concat() {
     let str=""
     for(let i=0;i<strings.length;i++)
     {
      str+=strings[i]+","
     }
     return str
     
    }
    console.log(concat())
}