function funcA(){
    console.log("Ola mundo!")
}
function funcB(){
    let nome="Eloi"
    console.log("Ola "+nome)
}
function funcC(){
    let num1=2
    let num2=3
    console.log(num1*num2)
}
function funcD(){
   let num1=3
   let num2=4
   let operador="*"
   switch(operador)
   {
       case "+":console.log(num1+num2);break
       case "-":console.log(num1-num2);break
       case "*":console.log(num1*num2);break
       case "/":console.log(num1/num2);break
   }
}
function funcE()
{
    //peso/altura^2
    let num1= prompt("Indique o seu peso em kg:")

    let num2= prompt("Indique a sua altura em m:")

    let IMC= num1/(num2*num2)
     
         if(IMC<18.5){console.log("Abaixo do peso")}
         else if(IMC>=18.5 && IMC<=24.9){console.log("Peso Normal")}
         else if(IMC>24.9 && IMC<=29.9){console.log("Sobrepeso")}
         else if(IMC>29.9 && IMC<=34.9){console.log("Obesidade de grau I")}
         else if(IMC>34.9 && IMC<=39.9){console.log("Obesidade de grau II")}
         else if(IMC<=40){console.log("Obesidade de grau III ou Morbida")}

   

   
}
function funcF()
{
   let num=prompt("Indique o numero de vezes que pretende repetir a palavra:")
   let nome=prompt("Indique a palavra:")
   for(let i=0;i<num;i++)
   {
       console.log(nome)
   } 
}
function funcG()
{
    let num1=prompt("Indique o numero incial:")
    let num2=prompt("Indique o numero final:")
    for(let i=num1;i<num2;i++)
    {
        console.log(i)
    }  
}
function funcH()
{
    let num=prompt("Indique o numero que pretende obter a tabuada:")
    for(let i=1;i<11;i++)
    {
        console.log(num*i)
    }
}
function funcI()
{
    let num1=parseInt(prompt("Indique o primeiro numero do intervalo:"))
    let num2=parseInt(prompt("Indique o ultimo numero do intervalo:"))
    let soma=0
    for(let i=num1;i<num2+1;i++)
    {
        if(i%3==0)
        {
            soma=soma+i
        }
    }
    console.log(soma)
}
function funcJ()
{
   let num1=parseInt(prompt("Indique um numero:"))
   if(num1==2||num1==3||num1==5||num1==7)
   {
       console.log("O numero inserido é primo");
   } 
   else
   {
    if(num1%2!=0 && num1%3!=0 && num1%5!=0 && num1%7!=0)
    {
        console.log("O numero inserido é primo")
    }
    else
    {
        console.log("O numero inserido nao é primo")
    }
   } 

}
function funcK()
{
    let num1=prompt("Indique um numero:")
    
    if(num1==0)
    {
        console.log("O fatorial de num1 é: 1")
    }
    if(num1==1)
    {
        console.log("O fatorial de num1 é: 1")
    }
    else
    {
     let fatorial=1
     for(let i=num1;i>0;i--)
    {
      fatorial=fatorial*i
    }
    console.log("O fatorial de " + num1 + " é: "+fatorial)
    }
}
function funcL()
{
let num1=prompt("Insira um numero:");
let soma=0
for(let i=1;i<num1;i++)
{
    if(num1%i==0)
    {
        soma=soma+i;
    }
}
if(soma==num1)
{console.log(num1+" é um numero perfeito")}
else
{console.log(num1+ " não é um numero perfeito")}
}
function funcM()
{
    let ano=prompt("Insira um ano:")
    if((ano%4==0 && ano%100!=0)||ano%400==0)
    {
        console.log(ano+" é um ano bissexto")
    }
    else
    {
        console.log(ano+" não é um ano bissexto")
    }
}
function funcN()
{
    let num2=""
    let num=prompt("Insira um numero de 100 a 999")
    for(let i=num.length -1;i>=0;i--)
    {
      num2= num2+num[i]
    }
    if(num2==num)
    {
        console.log("SIM")
    }
    else
    {
        console.log("NAO")
    }
    /* 
        
        let num   
        num = prompt("Escreva um número")        
        if (num.charAt(0) == num.charAt(2) ) {
        console.log("SIM")
        } else {
        console.log("NÃO")
        }        
        
        */
    
}
function funcO()
{
    let rand=Math.floor((Math.random()*99)+1)
    
    let numero = prompt("Insira um numero de 1 a 100")
   while(numero!=rand)
   {

   
    if(numero<rand)
    {
     console.log("Mais")
     
    }
    if(numero>rand)
    {
      console.log("Menos")
      
    }
     numero = prompt("Insira um numero de 1 a 100")
  }
    if(numero==rand)
    {
        console.log("Acertou!!")
    }
}