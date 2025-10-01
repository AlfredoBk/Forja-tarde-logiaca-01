function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respostaSoma")
    resposta.textContent = numero1 + numero2

     
    // console.log(numero1, numero2)
}
function sub(){
    var numero1 = document.getElementById("nl1").valueAsNumber
    var numero2 = document.getElementById("nl2").valueAsNumber
    var resposta = document.getElementById("respostaSub")
    resposta.textContent = numero1 - numero2
}