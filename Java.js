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



let botoesInferiores = document.querySelectorAll("#btn");
botoesInferiores.forEach(function(botao) {
    botao.disabled = true;
});



let botaoAcaoLaranja = document.getElementsByClassName("botaoAcaoLaranja")[0];
let btnLaranja1 = document.getElementsByClassName("btnLaranja")[0];
let btnLaranja2 = document.getElementsByClassName("btnLaranja")[1];
let botaoAcaoVerde = document.getElementsByClassName("botaoAcaoVerde")[0];
let btnVerde1 = document.getElementsByClassName("btnVerde")[0];
let btnVerde2 = document.getElementsByClassName("btnVerde")[1];

// Botão Verde;
function desabilitarLaranja() {
    btnVerde1.disabled = false;
    btnVerde2.disabled = false;

    botaoAcaoLaranja.disabled = true;
    btnLaranja1.disabled = true;
    btnLaranja2.disabled = true;
}

// Botão Laranja;
function desabilitarVerde() {
    botaoAcaoVerde.disabled = true;
    btnVerde1.disabled = true;
    btnVerde2.disabled = true;

    btnLaranja1.disabled = false;
    btnLaranja2.disabled = false;
}

function Reiniciar() {
    botaoAcaoVerde.disabled = false;
    btnVerde1.disabled = true;
    btnVerde2.disabled = true;

    botaoAcaoLaranja.disabled = false;
    btnLaranja1.disabled = true;
    btnLaranja2.disabled = true;
}

function Desbloquear() {
    botaoAcaoVerde.disabled = true;
    btnVerde1.disabled = false;
    btnVerde2.disabled = false;

    botaoAcaoLaranja.disabled = true;
    btnLaranja1.disabled = false;
    btnLaranja2.disabled = false;
}