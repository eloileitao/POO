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
    
    function propriedades() 
    {
        for(let i in student)
    {
      resp_i=resp_i+"\n"+"- "+ i
    }
     //apresentação do resultado
     show("i)"+"\n"+resp_i)
        
    }
    function remove()
     {
         //eliminar a propriedade "grade" do objeto
    delete student.grade
    for(let i in student)
     {
       resp_ii=resp_ii+"\n"+"- "+ i
     }
      //apresentação do resultado
    show("\n"+"ii)"+"\n"+resp_ii)
        
    }
    function tamanho()
     {
          let tamanho=0
        for(let i in student)
        {
            tamanho++
        }
        
       
       
        //apresentação do resultado da alinea iii)
        show("\n"+"iii)"+"\n"+tamanho)
        
    }
    //alinea i)
    propriedades()
   //alinea ii)
    remove()
   //alinea iii
    tamanho()

}
function funcB()
{
    //objeto
    let grades=[
        {
            name:"Rui",
            grade: 8
        },
        {
            name:"Ana",
            grade: 8
           
        },
        {
            name:"Carla",
            grade: 14
        }
    ]
    function novo_objeto()
     {
     let txt=""
     let nome=prompt("Insira o nome:")
     let nota=parseInt(prompt("Insira a nota:"))
     let novo=
     {
       name:nome,
       grade:nota
     }
     grades.push(novo)
     for (let x in grades)
      {
        txt +=" "+grades[x].name+": "+grades[x].grade+"\n"
      } 
        show("\n"+"i)"+"\n"+txt)
        
    }
    function media_notas() 
    { 
        let soma=0
        let count=0
        for(let i in grades)
        {
          soma=soma+grades[i].grade
          count++
        }
        
        let media= soma/count
        show("\n"+"ii)"+"\n"+media)
    }
    function nota_positiva() {
        let txt=""
        for (let i in grades)
        {
            if(grades[i].grade>=10)
            {
                txt+=" "+grades[i].name+"\n"
            }
        }
        show("\n"+"iii)"+"\n"+txt)
    }
    //i)
    novo_objeto()
    //ii)
    media_notas()
    //iii)
    nota_positiva()

}

function funcC()
{
    let txt="car1"+"\n"
    //função construtora
    function car(marca,matricula,cor,dep_atual,combus)
    {
      this.marca=marca
      this.matricula=matricula
      this.cor=cor
      this.dep_atual=dep_atual
      this.combus=combus
    }
    function mudar_cor()
    {
      car1.cor=nova_cor
    }
    //criação de dois objetos 
    let car1= new car("Ford","91-GH-15","Verde",40,"Gasoleo")
    let car2=new car("Opel","23-AB-23","branco",50,"Gasolina")
    for(let i in car1)
    {
        txt+= i+" "+car1[i]+"\n"
    }
    show("\n"+"i)"+"\n"+txt)
    //pedir para o utilizador indicar o carro e a cor  (imaginemos que ele diria :"car1" e ."laranja")
    let nova_cor="laranja"
    //invocar função
    mudar_cor()
    //Imprimir as novas alterações
    let txt2="car1"+"\n"
    for(let i in car1)
    {
        txt2+= i+" "+car1[i]+"\n"
    }
    
    show("\n"+"ii)"+"\n"+txt2)
}
function funcD()
 {
      //função volume
      function Volume()
      {
         return (this.raio)*(this.raio)*(this.altura)*Math.PI
      }
     //função construtora
     function Cylinder(h,r)
     {
         this.altura=h,
         this.raio=r,
         this.volume=volume
         
     }
     
    
      //primeiro comando
      let cyl= new Cylinder(7,4)
      let resultado="volume = "+ cyl.Volume().toFixed(4) 
      show(resultado)
    
}
function funcE() 
{
    //função construtora
    function Circle(r)
    {
        this.raio=r,
        this.area=area,
        this.perimetro=perimetro

    }
    //função area
    function area() 
    {
       return (this.raio)*(this.raio)*Math.PI
    }
    //função perimetro
    function perimetro()
    {
      return (this.raio)*2*Math.PI  
    }
    let c = new Circle(parseInt(prompt("Insira um raio:")))
    console.log('Area =', c.area().toFixed(2))
    console.log('perimeter =', c.perimetro().toFixed(2))
    
}
function funcF()
 {
     function initEnd(palavra)
     {
         let comp=palavra.lenght-1
      
      return palavra[0]+palavra[comp]

     }
     console.log("dog".initEnd()) 
    
}