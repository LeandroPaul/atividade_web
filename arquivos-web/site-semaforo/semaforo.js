function semaforo(event){
    const botao = event.target.id
    const img = document.querySelector("img")

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
            setInterval(mudaCor, 1000)
    }
}

function mudaCor(){
    cores = ['vermelho','amarelo','verde']
     acende(cor)
}
