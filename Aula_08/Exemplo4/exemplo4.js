

function addPlayer(){
    var nome = document.getElementById("inome");
    var no = nome.value
    if(confirm("Nome: "+no)){
        var nome = document.getElementById("inome");
        var name = nome.value;
        
        name.textContent="Nome";

        nome.value = "";
    }
}
