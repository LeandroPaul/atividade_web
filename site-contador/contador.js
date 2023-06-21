
function atualizaTempo(tempo){
    tempoSegundos = tempo % 60
    tempoDias = Math.floor(tempo / (60*60*24))
    tempoHoras = Math.floor(tempo % (60*60*24)/3600)
    tempoMinutos = Math.floor((tempo % (60*60))/60)
    
    
    
    segundos = document.getElementById('segundos')
    segundos.textContent = tempoSegundos
    minutos = document.getElementById('minutos')
    minutos.textContent = tempoMinutos
    horas = document.getElementById('horas')
    horas.textContent = tempoHoras
    dia = document.getElementById('dias')
    dia.textContent = tempoDias
}  

function contar(){
    
    if (tempo < 1){
        clearInterval(intervalo)
        tempo = 0
    }
    atualizaTempo(tempo)
    tempo--
}
const dataEvento = new Date('2023-06-23 21:30:00')
const dataHoje = Date.now()
difData = Math.floor((dataEvento - dataHoje)/1000)
tempo = difData
intervalo = setInterval(contar,1000)