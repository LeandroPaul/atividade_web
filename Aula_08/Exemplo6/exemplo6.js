function usarTemaEscuro(){
    document.body.style.backgroundColor = "#000000"
    document.body.style.color = "#f1f5f9"
    document.body.style.fontSize = "24px"
}

function usarTemaClaro(){
    document.body.style.backgroundColor = "#FFFFFF"
    document.body.style.color = "#000000"
    document.body.style.fontSize = "24px"
}

function trocaTema(){
    //document.body.classList.toggle('escuro')
    if (document.body.classList.contains('claro')){
        document.body.classList.remove('claro')
        document.body.classList.add('escuro')
    }
    else{
        document.body.classList.remove('escuro')
        document.body.classList.add('claro')
    }
}

function medio(){
    root = document.querySelector(":root")
    root.style.setProperty("--corDeFundo", "gray")
    document.body.classList.toggle('medio')
}