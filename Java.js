let ContadorVerde = document.getElementById("verde");
let ContadorLaranja = document.getElementById("laranja");

ContadorVerde.textContent = 0;
ContadorLaranja.textContent = 0;

function maisVerde() {
    ContadorVerde.textContent = parseInt(ContadorVerde.textContent) + 1;
}

function menosVerde() {
    ContadorVerde.textContent = parseInt(ContadorVerde.textContent) - 1;
}

function maisLaranja() {
    ContadorLaranja.textContent = parseInt(ContadorLaranja.textContent) + 1;
}

function menosLaranja() {
    ContadorLaranja.textContent = parseInt(ContadorLaranja.textContent) - 1;
}


window.addEventListener('beforeunload', function (e) {
    var message = 'Deseja reiniciar? Os dados serão perdidos.';
    e.returnValue = message;
    return message;
});

// Função para inicializar os contadores a partir dos parâmetros da URL ou definir como zero se não houver parâmetros
function inicializarContadores() {
    // Obtem os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    // Verifica se há parâmetros para os contadores
    ContadorVerde.textContent = params.get('contadorVerde') || 0;
    ContadorLaranja.textContent = params.get('contadorLaranja') || 0;
}

// Função para atualizar o contador e atualizar a URL com os novos valores dos contadores
function atualizarContador(elemento, incremento) {
    elemento.textContent = parseInt(elemento.textContent) + incremento;
    // Obtém os valores atualizados dos contadores
    const novoContadorVerde = ContadorVerde.textContent;
    const novoContadorLaranja = ContadorLaranja.textContent;
    // Atualiza a URL com os novos valores dos contadores
    history.replaceState(null, null, `?contadorVerde=${novoContadorVerde}&contadorLaranja=${novoContadorLaranja}`);
}

// Chamada para inicializar os contadores quando a página é carregada
window.onload = inicializarContadores;
