function funcA()
{
    //pedir a string e gravala
    let string = prompt("Insira uma palavra:")
    //Contar os seus caracteres
    let cont=string.length
    //Imprimir os resultados
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML =cont

}
function funcB()
{
    //pedir o nome
    let nome=prompt("Insira o nome:")
    //pedir apelido
    let apelido=prompt("Insira o apelido:")
    //resultado
    let completo= apelido+", "+nome
   //Imprimir os resultados
   let myTextArea = document.querySelector("#txtResults")
   myTextArea.innerHTML =completo

}
function funcC()
{
    let cont=0
    //pedir uma string e guarda-la 
    let palavra=prompt("Insira uma palavra:")
    //fazer a contagem de vogais
    for(let i=0;i<palavra.length;i++)
    {
        if(palavra[i]=="A"||palavra[i]=="e"||palavra[i]=="E"||palavra[i]=="i"||palavra[i]=="I"||palavra[i]=="o"||palavra[i]=="O"||palavra[i]=="u"||palavra[i]=="U")
        {
          cont++
        }
    }
    //Imprimir os resultados
   let myTextArea = document.querySelector("#txtResults")
   myTextArea.innerHTML =cont
}
function funcD()
{
    //pedir a string
    let texto=prompt("Insira uma frase:")
    texto=texto+" "
    let count=0
    //vamos percorrer a frase sempre que encontremos um caracter diferente de " " e que a seguir tenhamos " " contamos mais uma palavra
    for(let i=0;i<texto.length;i++)
    {
       if(texto[i]!=" " && texto[i+1]==" ")
       {
          count++ 
       }
    }
     //Imprimir os resultados
   let myTextArea = document.querySelector("#txtResults")
   myTextArea.innerHTML =count
}
function funcE()
{
    //pedir e guardar a string
    let string=prompt("Insira o texto:")
    let inversa=""
    //guardar a string ao contrario
    for(let i=string.length-1;i>=0;i--)
    {
        inversa=inversa+string[i]
    }
    //Imprimir os resultados
   let myTextArea = document.querySelector("#txtResults")
   myTextArea.innerHTML =inversa

}
function funcF()
{
    //pedir a string
    let string=prompt("Insira a string:")
    //pedir o caracter
    let carater=prompt("Insira o caracter a remover:")
    //tamanho da string
    let comp=string.length
    //remover o carater
  
     string=string.replace((new RegExp(carater,"g")),"")
    //Imprimir os resultados
   let myTextArea = document.querySelector("#txtResults")
   myTextArea.innerHTML =string
}
function funcG()
{
    let horas=0
    let minutos=0
    let segundos=0
    //pedir segundos
   let segundos_dados =parseInt(prompt("Insira os segundos:"))
   //
   if (segundos_dados >= 3600)
      { horas = segundos_dados / 3600 }
   if (segundos_dados - 3600 * horas >= 60)
      { minutos = (segundos_dados - 3600 * horas) / 60 }
   if (segundos_dados - 3600 * horas - 60 * minutos > 0)
      { segundos = (segundos_dados - 3600 * horas - 60 * minutos) }
      //resposta
      let resp= horas+":"+minutos+":"+segundos
       //Imprimir os resultados
   let myTextArea = document.querySelector("#txtResults")
   myTextArea.innerHTML =resp
    
}
function funcH()
{

}
