let gameId = 0
//definir a classe
class Jogos{
    constructor( nome, genero, plataforma, capa)
    {
        this._id=Jogos.getLastId() + 1
        this.nome=nome
        this.genero=genero
        this.plataforma=plataforma
        this.capa=capa
    }
//propriedades id
get id() {
    return this._id
}

//propriedades nome
get nome() {
    return this._nome
}

set nome(novoNome) {
    this._nome = novoNome
}
//propriedades genero
get genero(){
    return this._genero
}
set genero(novoGenero){
    this._genero=novoGenero
}
//propriedades plataforma
get plataforma() {
    return this._plataforma
}

set plataforma(novoPLataforma) {
    this._plataforma = novoPLataforma
}
//propriedades capa
get capa() {
    return this._capa
}

set capa(novoCapa) {
    this._capa = novoCapa
}
// Get the last ID
static getLastId() {
    let lastId = 0
    if (jogos.length > 0) {
        lastId =jogos[jogos.length-1].id
    }        
    return lastId
}
}
//defenir o array de jogos
let jogos=[]










window.onload = function() {
    init()    
}
function init()
{
    //buscar todas as referencias
    let nameGame= document.getElementById("nameGame")
    let genderGame= document.getElementById("genderGame")
    let capaGame= document.getElementById("capaGame")
    let formGames=document.getElementById("formGames")
    let nodesPlatform = document.getElementsByClassName("form-check-input ml-3")
    let modalGameName = document.getElementById("modalGameName")
    let modalGameGenre = document.getElementById("modalGameGenre")
    let modalGamePlatforms = document.getElementById("modalGamePlatforms")
    let modalGameCover = document.getElementById("modalGameCover")
    let tblGames = document.getElementById("tblGames")
    let btnRemoveAll = document.getElementById("btnRemoveAll")
    let btnFilter = document.getElementById("btnFilter")
    let nomeFiltro=document.getElementById("nomeFiltro")
    let generoFiltro=document.getElementById("generoFiltro")
    let urlFiltro=document.getElementById("urlFiltro")
    let btnFiltro=document.getElementById("btnFiltro")
   

   //Butao submit
   formGames.addEventListener("submit",function(event){
       //efetuar as validações
       //plataformas
       let plataformas=[]
       let strError = ""
                
       for (let i = 0; i < nodesPlatform.length; i++) {
           if (nodesPlatform[i].checked == true) {                
               plataformas.push(nodesPlatform[i].value)
           }            
       }
       //validar o campo plataformas
       if(plataformas.length == 0) {
        strError = "Por favor, selecione pelo menos uma plataforma!"
        
    }
    
    if(strError == "") {
        // Verify if this is a new game or the update of an existent game
        if(gameId == 0) 
        {
          
            // Create a new instance of Game            
            let newGame = new Jogos(nameGame.value, genderGame.value, plataformas, capaGame.value) 
        
          
            // Push the new object to the array
            jogos.push(newGame)  
            console.log(nameGame.value)
            console.log(genderGame.value)
            console.log(plataformas)
            console.log(capaGame.value)
            console.log(newGame.id)  
          
                    
        } 
        else 
        {
            for (let i = 0; i < jogos.length; i++)
             {
                if(jogos[i].id == gameId) 
                {
                    jogos[i].nome = nameGame.value
                    jogos[i].genero = genderGame.value
                    jogos[i].plataforma = plataformas
                    jogos[i].capa = capaGame.value
                }                  
            }
            gameId = 0
            }

            // 4. Atualizar a tabela
            renderTable()
            // 5. Limpar Formulario
            formGames.reset()
        } else {
            alert(strError)         
        }       
        event.preventDefault();
    })


    // Adicionar um listener para o butao "Remover tudo"
    btnRemoveAll.addEventListener("click", function() {
        jogos = []        
        renderTable()        
        genderGame.innerHTML = ""
    })

    // Adicionar um listener para o butao "Filtrar por genero"
     btnFiltro.addEventListener("click", function() {        
        renderTable(generoFiltro.value,nomeFiltro.value,urlFiltro.value)
        generoFiltro.value=""
        nomeFiltro.value=""
        urlFiltro.value=""

    })

    //Funções para autalizar a tabela, editar, ver e remover

    // Função para atualizar os objetos da tabela
function renderTable(genero = "", nome="", capa="") {
    
    let strHtml = "<thead class='thead-dark'><tr>" +
    "<th class='w-2'>#</th>" +
    "<th class='w-50'>Nome</th>" +
    "<th class='w-20'>Genero</th>" +
    "<th class='w-20'>Platformas</th>"+  
    "<th class='w-8'>Ações</th>" +              
    "</tr>" + 
    "</thead><tbody>"

    for (var i = 0; i < jogos.length; i++) {
        if ((genero==jogos[i].genero || genero=="")&&(nome==jogos[i].nome || nome=="")&&(capa==jogos[i].capa || capa=="")) {
            strHtml += "<tr>" +
            "<td>" + jogos[i].id + "</td>" +
            "<td>" + jogos[i].nome + "</td>" +
            "<td>" + jogos[i].genero + "</td>" +
            "<td>" + jogos[i].plataforma + "</td>" +
            "<td>" +
                "<a id='" + jogos[i].id + "' class='edit'><i class='fas fa-edit'></i></a> " +
                "<a id='" + jogos[i].id + "' class='remove'><i class='fas fa-trash-alt'></i></a> " +
                "<a id='" + jogos[i].id + "' class='view' data-toggle='modal' data-target='#gameModal'><i class='fas fa-eye'></i></a>" +
            "</td>" +                         
            "</tr>" 
        }        
    }
    strHtml += "</tbody>"
    tblGames.innerHTML = strHtml

     // Guardar todos os links de remove da tabela
     let tdRemove = document.getElementsByClassName("remove")
     // iterar sobre os links e adicionar um listener
     for (let i = 0; i < tdRemove.length; i++) {
         tdRemove[i].addEventListener("click", function() {
             //Ao clicar num jogo remover o jogo pelo Id
             let gameId = tdRemove[i].getAttribute("id")
             removeGameById(gameId)
             renderTable()
         })        
     }
 
     // Guardar todos os links de view da tabela
     let tdView = document.getElementsByClassName("view")
     // iterar sobre os links e adicionar um listener
     for (let i = 0; i < tdView.length; i++) {
         tdView[i].addEventListener("click", function() {
             // Ao clicar num jogo vizualizar a respetiva modal
             let gameId = tdView[i].getAttribute("id")
             viewGameById(gameId)                
         })        
     }
 
     // Guardar todos os links de edit da tabela
     let tdEdit = document.getElementsByClassName("edit")
     // iterar sobre os links e adicionar um listener
     for (let i = 0; i < tdEdit.length; i++) {
         tdEdit[i].addEventListener("click", function() {
             //  Ao clicar num jogo editalo no formulario
             let gameId = tdEdit[i].getAttribute("id")
             console.log(gameId)
             editGameById(gameId)                
         })        
     }
 }
 
 // Remove game based on its ID
 function removeGameById(id) {
     for (let i = 0; i < jogos.length; i++) {
         if(jogos[i].id == id) {
             jogos.splice(i, 1)
         }                  
     }
 }
 
 // View game based on its ID
 function viewGameById(id) {        
     for (let i = 0; i < jogos.length; i++) {
         if(jogos[i].id == id) {
             modalGameName.innerHTML= jogos[i].nome                
             modalGameGenre.innerHTML = jogos[i].genero
             modalGamePlatforms.innerHTML =  jogos[i].plataforma
             modalGameCover.setAttribute("src", jogos[i].capa)                
         }                  
     }
 }

// Edit game based on its ID
function editGameById(id) {    
    // Update global variable
    gameId = id
    // Iterate from all the games and fill the form with the games data
    for (let i = 0; i < jogos.length; i++) {
        if(jogos[i].id == id) {
            nameGame.value = jogos[i].nome
            genderGame.value = jogos[i].genero
            capaGame.value = jogos[i].capa                
            // Check the boxes that belongs to the array games.plataforms
            for (let j = 0; j < nodesPlatform.length; j++) {                
                if (jogos[i].plataforma.indexOf(
                    nodesPlatform[j].getAttribute("value")) != -1) {                
                    nodesPlatform[j].checked = true
                }  else {
                    nodesPlatform[j].checked = false
                }          
            }
       
        }                  
    }
}

}