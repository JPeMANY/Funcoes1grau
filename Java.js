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


window.addEventListener('beforeunload', function (e) {
    var message = 'Tem certeza que deseja sair? Os dados não salvos serão perdidos.';
    e.returnValue = message;
    return message;
});

