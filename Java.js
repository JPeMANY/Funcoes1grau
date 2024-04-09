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



let botoesInferiores = document.querySelectorAll("#btn");
botoesInferiores.forEach(function(botao) {
    botao.disabled = true;
});



function desabilitarLaranja() {
    document.getElementsByClassName("botaoAcaoLaranja")[0].disabled = true;
    document.getElementsByClassName("btnLaranja")[0].disabled = true;
    document.getElementsByClassName("btnLaranja")[1].disabled = true;
    document.getElementsByClassName("btnVerde")[0].disabled = false;
    document.getElementsByClassName("btnVerde")[1].disabled = false;
}

function desabilitarVerde() {
    document.getElementsByClassName("botaoAcaoVerde")[0].disabled = true;
    document.getElementsByClassName("btnVerde")[0].disabled = true;
    document.getElementsByClassName("btnVerde")[1].disabled = true;
    document.getElementsByClassName("btnLaranja")[0].disabled = false;
    document.getElementsByClassName("btnLaranja")[1].disabled = false;
}

function Reiniciar() {
    document.getElementsByClassName("botaoAcaoLaranja")[0].disabled = false;
    document.getElementsByClassName("btnVerde")[0].disabled = false;
    document.getElementsByClassName("btnVerde")[1].disabled = false;
    document.getElementsByClassName("botaoAcaoVerde")[0].disabled = false;
    document.getElementsByClassName("btnLaranja")[0].disabled = false;
    document.getElementsByClassName("btnLaranja")[1].disabled = false;
}