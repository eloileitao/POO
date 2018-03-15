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
    let strings=["Vermelho", "Verde", "Branco", "Preto"]
    let maior=0
    let maior_string=""
    for(let i=0;i<strings.length;i++)
    {
        if(maior<strings[i].length)
        {
            maior=strings[i].length
            maior_string=strings[i]
        }
    }
    //apresentação do resultado
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML =maior_string

}
function funcH()
{
    let strings=["Vermelho", "Verde", "Verde", "Branco", "Preto"]
    let Verde="Verde"
    let contador=0
    for(let i=0;i<strings.length;i++)
    {
        if(Verde==strings[i])
        {
            contador++
        }
    }
     //apresentação do resultado
     let myTextArea = document.querySelector("#txtResults")
     myTextArea.innerHTML =contador
}
function funcI()
{
   //array password e confirmação
   let  password=[]
   let result=null
   for(let i=0;i<2;i++)
   {
       if(i==0)
       {
       password[i]=prompt("Insira a sua password")
       }
       if(i==1)
       {
           password[i]=prompt("Insira agora a confirmação")
       }
   }
   if(password[0]!=password[1])
   {
    result=0
   }
   else
   {
       result=1
   }
    //apresentação do resultado
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML =result
}
function funcJ()
{
    let strings=["Vermelho", "Verde", "Verde", "Branco", "Preto"]
    let valor=3
    
     //apresentação do resultado
     let myTextArea = document.querySelector("#txtResults")
     myTextArea.innerHTML =strings[valor]


}
function funcK()
{
 //pedir valor
 let valor=prompt("Insira um valor numerico:")
 let valores_positivos=[]
 for (let i=0;i<valor;i++)
 {
   valores_positivos[i]=i+1
 }
 //apresentação do resultado
 let myTextArea = document.querySelector("#txtResults")
 myTextArea.innerHTML =valores_positivos
}
function funcL()
{
    let array=[]
    let novo_array=[]
    //pedir o numero de elementos do array
    let elem=parseInt(prompt("Insira o numero de elementos:"))
    //pedir os elementos do array(Com pelo menos um negativo para depois se retirar)
    for(let i=0;i<elem;i++)
    {
      array[i]=parseInt(prompt("Insira um elemento do array"))
    }
    for(let i=0;i<elem;i++)
    {
        if(array[i]<0)
        {
            array.splice(i,1)
        }  
    }
     //apresentação do resultado
     let myTextArea = document.querySelector("#txtResults")
     myTextArea.innerHTML =array
    
}
function funcM()
{
    //array
    let um=[7, 3, 6, 2, 5]
    let dois=[]
    //novo array
    for(let i=0;i<um.length;i++)
    {
    dois.push(um[i]+1)
    }
    //apresentação do resultado
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML =dois


}
function funcN()
{
    let maior
    let menor
    let menor_array=[]
    let maior_array=[]
    //array1
    let array1=[1,0,2,3,4]
    //array2
    let array2=[3,5,6,7,8,13]
    //obtem se o lenght do maior array
    if(array1.length>array2.length)
    {
    maior=array1.length
    menor=array2.length
    maior_array=array1
    menor_array=array2
    }
    else
    {
        maior=array2.length
        menor=array1.length
        menor_array=array1
        maior_array=array2
    }
    //ve se a diferença entre os dois 

    let diferença =maior-menor
    //adicionar ao array menor zeros para ter o mesmo numero de elewmentos
    for(let i=0;i<diferença;i++)
    {
        menor_array.push(0);
    }
    //arraysoma
    let array_soma=[]
    for(let i=0;i<array2.length;i++)
    {
     array_soma[i]=menor_array[i]+maior_array[i]
    }
    //apresentação do resultado
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML =array_soma

}