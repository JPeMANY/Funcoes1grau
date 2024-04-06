let ContadorVerde = document.getElementById("verde");
let ContadorLaranja = document.getElementById("laranja");

ContadorVerde.innerHTML = 0;
ContadorLaranja.innerHTML = 0;

function maisVerde() {
    ContadorVerde.innerHTML ++;
}

function menosVerde() {
    ContadorVerde.innerHTML --;
}

function maisLaranja() {
    ContadorLaranja.innerHTML ++;
}

function menosLaranja() {
    ContadorLaranja.innerHTML --;
}


function apito() {
    let audio = document.getElementById('player');
    audio.play();
};

// Função para desabilitar o botão
function disableButton() {
    document.getElementById("botaoAcaoLarabja").disabled = true;
}

// Função para habilitar o botão
function enableButton(buttonId) {
    document.getElementById(buttonId).disabled = false;
}
