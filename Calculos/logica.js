function soma(){
    var numero1 = document.getElementById("n1").valueAsNumber 
    var numero2 = document.getElementById("n2").valueAsNumber
    var resposta = document.getElementById("respSoma")
    resposta.textContent = numero1 + numero2
}

function sub(){
    var num1 = parseFloat(document.getElementById("n3").value)
    var num2 = parseFloat(document.getElementById("n4").value)
    document.getElementById("respSub").textContent = num1 - num2
}

function multi(){
    var number1 = parseFloat(document.getElementById("n5").value)
    var number2 = parseFloat(document.getElementById("n6").value)
    document.getElementById("respMulti").textContent = number1 * number2
}

function div(){
    var a = parseFloat(document.getElementById("n7").value)
    var b = parseFloat(document.getElementById("n8").value)
    var resp = document.getElementById("respDiv")

    if(b !== 0){
        resp.innerHTML = (a / b).toFixed(2)
    }else{
        resp.innerHTML = "Não se divide por 0"
    }
}