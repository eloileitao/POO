function funcA()
{/*let numbers = [7, 3, 6, 12, 5]*/
    //pedir para inserir o numero de elementos do array
    let num=parseInt(prompt("Insira o numero de elementos:"))
    //declarar o array
    let numbers=[]
    let total = 0
    //gravar no array os seus elementos
    for(let i=0; i<num; i++) {
        numbers[i]=parseInt(prompt("Insira um elemento:"))
    }
    //calcular o total
    for(let i=0;i<num;i++)
    {
        total=total+numbers[i]
    }
    //calcular a media
    let average = total / num

    // Apresentação dos resultados
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML = average
}
function funcB()
{
    let numbers = [7, 3, 6, 12, 5]
    let menor=20
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]<menor)
        {
            menor=numbers[i]
        }
    }
    // Apresentação dos resultados
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML = menor

}
function funcC()
{
    //array numerico
    let numbers = [7, 3, 6, 12, 5]
    //valor numerico a remover : 3 
    let array=""
     //impressão do array sem o numero 3
    numbers.splice(1,1)
    for(let i=0;i<numbers.length;i++)
    {
      array=array+" "+numbers[i]
    }
    let myTextArea = document.querySelector("#txtResults")
        myTextArea.innerHTML = array
}
function funcD()
{
//array 1
let um=[7, 3, 6, 2, 5]
//array 2
let dois=[1, 2, 4]
//junção dos dois arrays
let string = um.concat(dois);
//apresentação do resultado
let myTextArea = document.querySelector("#txtResults")
myTextArea.innerHTML = string

}
function funcE()
{
  //array de strings
  let strings=["Vermelho", "Verde", "Branco", "Preto"]
  //gravar num outro array os elementos do array atrings mas de forma ordenada
  let stringord= strings.sort()
  //apresentação do resultado
let myTextArea = document.querySelector("#txtResults")
myTextArea.innerHTML = stringord


}
function funcF()
{
    //array de strings
    let strings=["Vermelho", "Verde", "Branco", "Preto"]
    //gravar num outro array os elementos do array atrings mas de forma inversa
    let string_reversed= strings.sort()
     string_reversed=string_reversed.reverse()
    //apresentação do resultado
let myTextArea = document.querySelector("#txtResults")
myTextArea.innerHTML = string_reversed

}
function funcG()
{
    
}