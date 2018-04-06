
window.onload = function() {
    init()    
}
function init(){
    //obter as referencias dos elementos que iremos utilizar
    let txtEmail=document.getElementById("txtEmail")
    let txtPass=document.getElementById("txtPass")
    let frmAut=document.getElementById("frmAut")
    let butao_submeter=document.getElementById("submeter")
    let butao_limpar=document.getElementById("limpar")
    //adicionar um ouvinte de eventos para o sbmit
    
    frmAut.addEventListener("submit",function(event){
        alert(txtEmail.value+"#"+txtPass.value)
        event.preventDefault()
    })
    frmAut.addEventListener("reset",function(event){
        txtEmail.focus()
        
    })
    //adicionar um ouvinte de eventos para o limpar
    /*
    butao_limpar.addEventListener("click",function(){
        txtEmail.value=""
        txtPass.value=""
    })*/

}
