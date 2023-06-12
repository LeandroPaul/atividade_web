function mostrar(){
    input = document.querySelector("#entrada")
    if (input.getAttribute("type") === "password"){
        input.setAttribute("type", "text")
        document.querySelector("#btMostra").innerText = "Ocultar senha"

    }

    else{
        input.setAttribute("type", "password")
        btMostra = document.querySelector("#btMostra")
        btMostra.innerText = "Mostrar senha"
    }

    //window.alert(input.getAttribute("type"))
}

function mudaPlaceholder(){
    input = document.querySelector('#entrada')
    input.setAttribute("placeholder", "Informe a senha")
    btPlace = document.querySelector("#btPlace")
    btPlace.setAttribute("disabled", " ")

}