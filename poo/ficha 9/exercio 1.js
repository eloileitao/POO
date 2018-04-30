class Personalidades{
    constructor(nome, data, nacionalidade, obra, foto ) {
       
        this.nome = nome
        this.data = data
        this.nacionalidade = nacionalidade
        this.obra= obra
        this.foto=foto
    }
    //PROPRIEDADES nome
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome
    }
    //PROPRIEDADES data
    get data() {
        return this._data
    }

    set data(novoData) {
        this._data = novoData
    }
    //PROPRIEDADES nacionalidade
    get nacionalidade() {
        return this._nacionalidade
    }

    set nacionalidade(novoNacionalidade) {
        this._nacionalidade = novoNacionalidade
    }
    //PROPRIEDADES obra
    get obra() {
        return this._obra
    }

    set obra(novoObra) {
        this._obra = novoObra
    }
    //PROPRIEDADES foto
    get foto() {
        return this._foto
    }

    set foto(novoFoto) {
        this._foto = novoFoto
    }
}

let personalidades=[]

window.onload = function() {
    init()    
}
function init()
{
  //obter todas as referencias
  persoForm=document.getElementById("perso.form")
  nomeTxt=document.getElementById("Nome.txt")
  dataTxt=document.getElementById("Data.txt")
  nacionalidadeTxt=document.getElementById("Nacionalidade.txt")
  obraTxt=document.getElementById("Obra.txt")
  fotoTxt=document.getElementById("foto.txt")
  //adicionar um ouvinte de eventos ao form quando acontece o sbmite
  persoForm.addEventListener("submit",function(event){
  //verificar a data 

  //caso a validação esteja cumprida criamos o objeto:
  let novaPerso=new Personalidades(nomeTxt.value,dataTxt.value,nacionalidadeTxt.value,obraTxt.value,fotoTxt.value)
  //Adicionar o objeto ao array:
  personalidades.push(novaPerso)
  console.log(personalidades)
  atualizaTabela()
  // Previne do form não ser submetido (isso faria com que a página fizesse um refresh)
   event.preventDefault()
})


}
//Atualizar a tabela
function atualizaTabela() {
    let tblPerso = document.getElementById("tblPerso")
    let str = "<thead class='thead-dark'><tr><th>NOME</th><th>DATA</th><th>NACIONALIDADE</th><th>OBRA</th><th>FOTO</th><th>ACÕES</th></tr></thead><tbody>"
    let botao_remove='<input class="remove" type="button" value="remove">'
   
    for (let i = 0; i < personalidades.length; i++) {
        str += "<tr>"        
        str += "<td>" + personalidades[i].nome + "</td>"
        str += "<td>" + personalidades[i].data + "</td>"
        str += "<td>" + personalidades[i].nacionalidade + "</td>"
        str += "<td>" + personalidades[i].obra + "</td>"
        str += "<td>" + personalidades[i].foto + "</td>"
        str += "<td>"+botao_remove+"</td>"
        str +="</tr>"
    }
    str += "</tbody>"
    tblPerso.innerHTML = str}