window.onload = function() {
    init()    
}
function init(){
//Obter os elementos
let myP = document.getElementById("myP")
let myTxt= document.getElementById("myTxt")
let myBtn=document.getElementById("myBtn")
//alterar o texto do paragrafo
myP.innerHTML="Bem-Vindo à minha pagina!"
//Clique no botao
myBtn.addEventListener("click",function(){
    
    if(myTxt.value=="")
    {myP.innerHTML="Bem-Vindo à minha página!" }
    else
    {myP.innerHTML="Bem-vindo, " + myTxt.value + "!"}
 
})
}