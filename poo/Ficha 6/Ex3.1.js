let filmes = []
class Filme {
    constructor(titulo,ano,genero){
        this.titulo=titulo
        this.ano=ano
        this.genero=genero
    }
    //propriedade titulo
    ///set
    set titulo(newtitulo)
    {
      this._titulo=newtitulo
    }
    //get
    get titulo()
    {
        return this._titulo
    }
     //propriedade ano
    ///set
    set ano(newano)
    {
      this._ano=newano
    }
    //get
    get ano()
    {
        return this._ano
    }
     //propriedade genero
    ///set
    set genero(newgenero)
    {
      this._genero=newgenero
    }
    //get
    get genero()
    {
        return this._genero
    }
}
window.onload = function() {
    //guardar as referencias dos elementos correspondentes aos campos a preencher
    let frmFilmes = document.getElementById("frmFilmes")
    let txtTitulo = document.getElementById("txtTitulo")
    let txtAno = document.getElementById("txtAno")
    let sltGenero = document.getElementById("sltGenero")
    //adicionar um ouvinte de eventos para o butao sbmit do form
    frmFilmes.addEventListener("submit",function(event){
         //criar um novo filme
        let novoFilme= new Filme(txtTitulo.value , txtAno.value , sltGenero.value)
        //adicionar o filme ao array de filmes(dar push)
        filmes.push(novoFilme)
        //vamos atualizar agora a tabela
        atualizaTabela()
          // Previne do form não ser submetido (isso faria com que a página fizesse um refresh)
          event.preventDefault()
    })
   
}
// Função que atualiza a tabela com os dados de todos os filmes no array
function atualizaTabela() {
    let tblFilmes = document.getElementById("tblFilmes")
    let str = "<thead class='thead-dark'><tr><th>TÍTULO</th><th>ANO</th><th>GÉNERO</th><th>ACÕES</th></tr></thead><tbody>"
    let botao_remove='<input class="remove" type="button" value="remove">'
   
    for (let i = 0; i < filmes.length; i++) {
        str += "<tr>"        
        str += "<td>" + filmes[i].titulo + "</td>"
        str += "<td>" + filmes[i].ano + "</td>"
        str += "<td>" + filmes[i].genero + "</td>"
        str += "<td>"+botao_remove+"</td>"
        str +="</tr>"
    }
    str += "</tbody>"
    tblFilmes.innerHTML = str

    // Obtem todos os <td> da tabela (coluna com o ícone de remoção)
    let tdRemove = document.getElementsByClassName("remove")
    // Para cada um deles adiciona um listener para o evento clique
    for (let i = 0; i < tdRemove.length; i++) {
        tdRemove[i].addEventListener("click", function() {
            // Ao clicar num determinado filme, remove-o do array
            filmes.splice(i, 1)
            // Atualiza de novo a tabela
            atualizaTabela()
        })        
    }
}