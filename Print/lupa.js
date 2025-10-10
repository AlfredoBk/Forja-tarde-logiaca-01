function Dados(){
var nome = document.getElementById("nome").value
    var idade = parseFloat(document.getElementById("idade").value)
var printNome = document.getElementById("printNome")
var printIdade = document.getElementById("printIdade")
 
printNome.textContent = nome
printNome.style.color = "Green"
printIdade.textContent = idade
printIdade.style.color = "red"
}

