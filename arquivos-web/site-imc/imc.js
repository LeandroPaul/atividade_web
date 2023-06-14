
var nomeInput = document.getElementById("nome")
var alturaInput = document.getElementById("altura")
var pesoInput = document.getElementById("peso")

function imc(){
var nome = nomeInput.value
var altura = alturaInput.value
var peso = pesoInput.value
var calculo = peso/(altura*altura)
    document.getElementById("resultado").textContent = "teste"+calculo.toFixed(2)
}

