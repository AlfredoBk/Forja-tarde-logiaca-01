function Dados(){ 
    var nomB = document.getElementById("nomB").value
    var bixo = document.getElementById("bixo").value
    var idade = parseFloat(document.getElementById("idade").value)
    var raza = document.getElementById("raza").value
    var nc = document.getElementById("nc").value

    var printNome = document.getElementById("printNome")
     var printTipo = document.getElementById("printTipo")
      var printIdade = document.getElementById("printIdade")
       var printRaza = document.getElementById("printRaza")
        var printNc = document.getElementById("printNc")

printNome.textContent = nomB
printTipo.textContent = bixo
printIdade.textContent = idade
printRaza.textContent = raza
printNc.textContent = nc
    
}