function calcIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var resposta = document.getElementById("res")

    if (isNaN(peso) || isNaN(altura)) {
        resposta.textContent = "Digite apenas números."
        document.getElementById("msg").textContent = "Calculo usam números";
    }
    var imc = (peso / (altura * altura)).toFixed(2)
    resposta.textContent = imc
    imc = parseFloat(imc)

   if (imc > 40) {
        document.getElementById("msg").textContent = "Obesidade grau 3";
    }
    else if (imc >= 35 && imc < 39.9) {
        document.getElementById("msg").textContent = "Obesidade grau 2";
    }
    else if (imc >= 30 && imc < 34.9) {
        document.getElementById("msg").textContent = "Obesidade grau 1";
    }
    else if (imc >= 25 && imc < 29.9) {
        document.getElementById("msg").textContent = "Sobrepeso";
    }
    else if (imc >= 18.5 && imc < 24.9) {
        document.getElementById("msg").textContent = "Peso adecuado";
    }
}