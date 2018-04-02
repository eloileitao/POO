window.onload = function() {
    init()    
}
function init(){
    let btnTodas= document.getElementById("btnTodas")
    let btnCampus1= document.getElementById("btnCampus1")
    let btnCampus2= document.getElementById("btnCampus2")
    let btnCampus3= document.getElementById("btnCampus3")
//butao todas
    btnTodas.addEventListener("click",function(){
    let elementos=document.getElementsByTagName("input")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }
})

//butao campus I
btnCampus1.addEventListener("click",function(){
    let elementos=document.getElementsByClassName("campus1")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }
    let nao_elementos1=document.getElementsByClasseName("campus2")
    for(let i=0;i<nao_elementos1.length;i++)
    {
        nao_elementos1[i].style.backgroundColor="white"
    }
    let nao_elementos2=document.getElementsByClasseName("campus3")
    for(let i=0;i<nao_elementos2.length;i++)
    {
        nao_elementos2[i].style.backgroundColor="white"
    }

})
//butao campus II
btnCampus2.addEventListener("click",function(){
    let elementos=document.getElementsByClassName("campus2")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }
       let nao_elementos1=document.getElementsByClasseName("campus1")
       for(let i=0;i<nao_elementos1.length;i++)
       {
           nao_elementos1[i].style.backgroundColor="white"
       }
       let nao_elementos2=document.getElementsByClasseName("campus3")
       for(let i=0;i<nao_elementos2.length;i++)
       {
           nao_elementos2[i].style.backgroundColor="white"
       }

})
//butao campus III
btnCampus3.addEventListener("click",function(){
    let elementos=document.getElementsByClassName("campus3")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }
       let nao_elementos1=document.getElementsByClasseName("campus2")
       for(let i=0;i<nao_elementos1.length;i++)
       {
           nao_elementos1[i].style.backgroundColor="white"
       }
       let nao_elementos2=document.getElementsByClasseName("campus1")
       for(let i=0;i<nao_elementos2.length;i++)
       {
           nao_elementos2[i].style.backgroundColor="white"
       }

})
}
