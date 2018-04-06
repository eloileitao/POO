window.onload =function()
{
    let password1=document.getElementById("password1")
    let password2=document.getElementById("password2")
    let butao_registar=document.getElementById("butao_submeter")
    let frmRegisto=document.getElementById("frmRegisto")
    let validate=true
    //adicionar um leitor de eventos
    
   
    
       frmRegisto.addEventListener("submit",function(event){
        
       if(password1.value!=password2.value) {validate=false}
       if(validate==true)
       {
        console.log("a")
         alert("Registo efetuado com sucesso!!")
       }
       else
       {
        console.log("b")
           alert("As passwords nao correspondem!!")
           event.preventDefault()
       }
       }) 
       
        
       
       
    
}