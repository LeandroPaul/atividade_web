function addPlayer() {
    var selecionarPosicao = document.getElementById("position");
    var nomeInput = document.getElementById("name");
    var numeroInput = document.getElementById("number");
  
    var posicao = selecionarPosicao.value;
    var nome = nomeInput.value;
    var numero = numeroInput.value;
  
    if (confirm("Deseja escalar o jogador " + nome + " na posição " + posicao + " com o número " + numero + "?")) {
      var teamList = document.getElementById("team-list");
      var itemDalista = document.createElement("li");
      itemDalista.textContent = "Jogador: " + nome + ", número " + numero + " - " + posicao;
      teamList.appendChild(itemDalista);
  
      nomeInput.value = "";
      numeroInput.value = "";
    }
  }
  
  function removePlayer() {
    var numberToRemoveInput = document.getElementById("numberToRemove");
    var numberToRemove = numberToRemoveInput.value;
  
    if (confirm("Deseja remover o jogador com o número " + numberToRemove + "?")) {
      var teamList = document.getElementById("team-list");
      var jogadores = teamList.getElementsByTagName("li");
  
      for (var i = 0; i < jogadores.length; i++) {
        var item = jogadores[i];
        var numeroDojogador = item.textContent.split("Número: ")[1];
  
        if (numeroDojogador == numberToRemove) {
          teamList.removeChild(item);
          break;
        }
      }
  
      numberToRemoveInput.value = "";
    }
  }

