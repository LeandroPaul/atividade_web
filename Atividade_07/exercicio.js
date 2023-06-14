function addPlayer() {
  var selecionarPosicao = document.getElementById("position");
  var nomeInput = document.getElementById("name");
  var numeroInput = document.getElementById("number");

  var pos = selecionarPosicao.value;
  var nome = nomeInput.value;
  var num = numeroInput.value;

  if (confirm("Deseja escalar o jogador " + nome + " na posição " + pos + " com o número " + num + "?")) {
    var equipe = document.getElementById("team-list");
    var jogadorDaEquipe = document.createElement("li");
    jogadorDaEquipe.textContent = "Posição: " + pos + ", Nome: " + nome + ", Número: " + num;
    equipe.appendChild(jogadorDaEquipe);

    nomeInput.value = "";
    numeroInput.value = "";
  }
}

function removePlayer() {
  var numeroInput = document.getElementById("numberToRemove");
  var numeroParaRemover = numeroInput.value;

  if (confirm("Deseja remover o jogador com o número " + numeroParaRemover + "?")) {
    var lista = document.getElementById("team-list");
    var listaJogadores = lista.getElementsByTagName("li");

    for (var i = 0; i < listaJogadores.length; i++) {
      var item = listaJogadores[i];
      var numeroJogador = item.textContent.split("Número: ")[1];

      if (numeroJogador == numeroParaRemover) {
        lista.removeChild(item);
        break;
      }
    }

    numeroInput.value = "";
  }
}