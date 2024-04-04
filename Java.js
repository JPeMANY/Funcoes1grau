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


// Função para inicializar os contadores a partir do armazenamento local ou definir como zero se não houver valor armazenado
function inicializarContadores() {
    // Verifica se há valores armazenados para os contadores
    if (localStorage.getItem('contadorVerde') !== null) {
        ContadorVerde.textContent = localStorage.getItem('contadorVerde');
    } else {
        ContadorVerde.textContent = 0;
    }
    
    if (localStorage.getItem('contadorLaranja') !== null) {
        ContadorLaranja.textContent = localStorage.getItem('contadorLaranja');
    } else {
        ContadorLaranja.textContent = 0;
    }
}

// Função para atualizar o contador e armazenar o novo valor no localStorage
function atualizarContador(elemento, incremento) {
    elemento.textContent = parseInt(elemento.textContent) + incremento;
    // Salva o novo valor no armazenamento local
    localStorage.setItem(elemento.id, elemento.textContent);
}

// Chamada para inicializar os contadores quando a página é carregada
window.onload = inicializarContadores;
