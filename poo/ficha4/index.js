let show = function(value) {
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML += value + "\n"
}

function funcA()
{
    let resp_i=""
    let resp_ii=""
    //Objeto
    let student=
    {
        nome:"David Silvar",
        course:"POO",
        grade: 12
    }
    //alinea i)
    for(let i in student)
    {
      resp_i=resp_i+"\n"+"- "+ i
    }
    //apresentação do resultado
    show("i)"+"\n"+resp_i)
     //alinea iii
   let tamanho=0
   for(let i in student)
   {
       tamanho++
   }
   //alinea ii)
   //eliminar a propriedade "grade" do objeto
   delete student.grade
   for(let i in student)
    {
      resp_ii=resp_ii+"\n"+"- "+ i
    }
     //apresentação do resultado
   show("\n"+"ii)"+"\n"+resp_ii)
  
   //apresentação do resultado da alinea iii)
   show("\n"+"iii)"+"\n"+tamanho)

}