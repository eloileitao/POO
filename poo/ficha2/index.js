function funcA()
{
    let num=parseInt(prompt("insira o numero de numeros"))
    let array
    for(let i=0;i<num;i++)
    {
        let valor=(prompt("insira um elemento do array"))
        valor=valor+valor
    }
let media=valor/num
    // Apresentação dos resultados
    let myTextArea = document.querySelector("#txtResults")
    myTextArea.innerHTML = media
    
}