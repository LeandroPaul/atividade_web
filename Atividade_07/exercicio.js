function addPlayer() {
  var positionSelect = document.getElementById("position");
  var nameInput = document.getElementById("name");
  var numberInput = document.getElementById("number");

  var position = positionSelect.value;
  var name = nameInput.value;
  var number = numberInput.value;

  if (confirm("Deseja escalar o jogador " + name + " na posição " + position + " com o número " + number + "?")) {
    var teamList = document.getElementById("team-list");
    var newPlayerItem = document.createElement("li");
    newPlayerItem.textContent = "Posição: " + position + ", Nome: " + name + ", Número: " + number;
    teamList.appendChild(newPlayerItem);

    nameInput.value = "";
    numberInput.value = "";
  }
}

function removePlayer() {
  var numberToRemoveInput = document.getElementById("numberToRemove");
  var numberToRemove = numberToRemoveInput.value;

  if (confirm("Deseja remover o jogador com o número " + numberToRemove + "?")) {
    var teamList = document.getElementById("team-list");
    var playerItems = teamList.getElementsByTagName("li");

    for (var i = 0; i < playerItems.length; i++) {
      var item = playerItems[i];
      var playerNumber = item.textContent.split("Número: ")[1];

      if (playerNumber == numberToRemove) {
        teamList.removeChild(item);
        break;
      }
    }

    numberToRemoveInput.value = "";
  }
}