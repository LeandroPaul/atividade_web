function mouseEnterEvent(){
    window.alert("Passou o mouse.")
}

function changeEvent(){
    window.alert("Valor alterado.")
}

function focusEvento(){
    window.alert("Recebeu foco.")
    document.getElementById("onFocus").setAttribute('disabled',"")
}
function blurEvento(){
    window.alert("Perdeu o foco.")
}
function inputEvent(){
    window.alert("Digitou")
}
function detecta(event){
    let tecla=event.key;
    if (tecla=="a")
    alert('Digitei a')
    if (tecla=="e")
    alert('Digitei e')
    if (tecla=="i")
    alert('Digitei i')
    if (tecla=="o")
    alert('Digitei o')
    if (tecla=="u")
    alert('Digitei u')
    if (tecla == "End")
    alert('Você apertou End.')
}