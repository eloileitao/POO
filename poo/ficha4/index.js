function funcA()
{
    let result=""
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
      result=result+i
    }
    //apresentação do resultado
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML = result
}