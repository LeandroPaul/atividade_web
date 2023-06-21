let indiceCor = 0;
let intervalo = null;
function semaforo(event){
    const botao = event.target.id
    const img = document.querySelector("img")
    clearInterval(intervalo)

    acende(botao)
}

function acende(botao){
    switch (botao){
        case 'vermelho':
            img.src = 'img/vermelho.png'
            break
        case 'amarelo':
            img.src = 'img/amarelo.png'
            break
        case 'verde':
            img.src = 'img/verde.png'
            break
        case 'automatico':
            intervalo = setInterval(mudaCor, 1000);
            break
    }
}

function mudaCor(){
    cores = ['vermelho','amarelo','verde']
    cor = cores[indiceCor]
    acende(cor)
    indiceCor++; // indiceCor = indiceCor + 1 

    if (indiceCor>2){
        indiceCor = 0;
    }
}
