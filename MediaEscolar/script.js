function media(){
    var nota1 = parseFloat(document.getElementById("n1").value)
    var nota2 = parseFloat(document.getElementById("n2").value)
    var nota3 = parseFloat(document.getElementById("n3").value)
    var nota4 = parseFloat(document.getElementById("n4").value)
    var nota5 = parseFloat(document.getElementById("n5").value)

    var media = document.getElementById("resposta")
    var conta = (nota1 + nota2 + nota3 + nota4 + nota5) / 5

 if(conta >= 7){
 media.textContent = conta.toFixed(2) + " - " + "PASSOU DE ANO"
 media.style.color = "green"
 }else{
    
    media.textContent = conta.toFixed(2) + " - " + "VOCÊ REPROVOU DE ANO"
     media.style.color = "red"
 }
 

}