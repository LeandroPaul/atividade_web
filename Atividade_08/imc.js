
var nomeInput = document.getElementById("nome")
var alturaInput = document.getElementById("altura")
var pesoInput = document.getElementById("peso")

function imc(){
var nome = nomeInput.value
var altura = alturaInput.value
var peso = pesoInput.value
var calculo = peso/(altura*altura)

if (calculo>=18.5 && calculo<=24.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(1) + " e você está com peso ideal. Parabéns !!!"
}

else if (calculo<18.5){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(1) + ". Você está abaixo do peso!"
}

else if (calculo>24.9 && calculo<=29.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(1) + ". Você está com sobrepeso!"
}

else if (calculo>=30 && calculo<=34.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(1) + ". Obesidade classe I !"
}

else if (calculo>=35 && calculo<=39.9){
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(1) + ". Obesidade classe II !"
}

else {
    document.getElementById("resultado").textContent = nome+" seu IMC é "+calculo.toFixed(1) + ". Obesidade classe III !"
}
    
}

