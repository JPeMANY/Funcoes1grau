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
    console.log("Som de apito!");
};



let botoesInferiores = document.querySelectorAll(".btn");
botoesInferiores.forEach(function(botao) {
    botao.disabled = true;
});



let botaoId;
function disableButton(buttonId) {
    document.getElementsByClassName(buttonId)[0].disabled = true;
}


function enableButton(buttonId) {
    document.getElementsByClassName(buttonId)[0].disabled = false;
}
