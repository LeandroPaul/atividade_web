
var nomeInput = document.getElementById("nome")
var alturaInput = document.getElementById("altura")
var pesoInput = document.getElementById("peso")

function imc(){
var nome = nomeInput.value
var altura = alturaInput.value
var peso = pesoInput.value
var calculo = peso/(altura*altura)

if (calculo>=18.5 && calculo<=24.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(2) + " . Parabéns está dentro do intervalo normal"
}

else if (calculo<18.5){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(2) + " . Diagnóstico: você está abaixo do peso!"
}

else if (calculo>24.9 && calculo<=29.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(2) + " . Diagnóstico: você está com sobrepeso!"
}

else if (calculo>=30 && calculo<=34.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(2) + " . Diagnóstico: obesidade classe I !"
}

else if (calculo>=35 && calculo<=39.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(2) + " . Diagnóstico: obesidade classe II !"
}

else {
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(2) + " . Diagnóstico: obesidade classe III !"
}
    
}

