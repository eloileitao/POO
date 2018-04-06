window.onload = function() {
    init()    
}
function init(){
    let btnTodas= document.getElementById("btnTodas")
    let btnCampus1= document.getElementById("btnCampus1")
    let btnCampus2= document.getElementById("btnCampus2")
    let btnCampus3= document.getElementById("btnCampus3")
//butao todas
let elementos1=document.getElementsByTagName("input")
    btnTodas.addEventListener("click",function(){
    
     for(let i=0;i<elementos1.length;i++)
       {
         elementos1[i].style.backgroundColor="green"
       }
})

//butao campus I
btnCampus1.addEventListener("click",function(){
    
    for(let i=0;i<elementos1.length;i++)
      {
        elementos1[i].style.backgroundColor=null
      }
    let elementos=document.getElementsByClassName("campus1")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }


})
//butao campus II
btnCampus2.addEventListener("click",function(){
  
    for(let i=0;i<elementos1.length;i++)
      {
        elementos1[i].style.backgroundColor=null
      }
    let elementos=document.getElementsByClassName("campus2")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }
      

})
//butao campus III
btnCampus3.addEventListener("click",function(){
   
    for(let i=0;i<elementos1.length;i++)
      {
        elementos1[i].style.backgroundColor=null
      }
    let elementos=document.getElementsByClassName("campus3")
     for(let i=0;i<elementos.length;i++)
       {
         elementos[i].style.backgroundColor="green"
       }
      
})
}
