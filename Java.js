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


// Função para inicializar os contadores a partir dos cookies ou definir como zero se não houver cookie
function inicializarContadores() {
    // Verifica se há cookies para os contadores
    ContadorVerde.textContent = getCookie('contadorVerde') || 0;
    ContadorLaranja.textContent = getCookie('contadorLaranja') || 0;
}

// Função para atualizar o contador e armazenar o novo valor em um cookie
function atualizarContador(elemento, incremento) {
    elemento.textContent = parseInt(elemento.textContent) + incremento;
    // Salva o novo valor em um cookie
    setCookie(elemento.id, elemento.textContent, 365);
}

// Função para criar um cookie
function setCookie(nome, valor, dias) {
    var data = new Date();
    data.setTime(data.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expires = "expires=" + data.toUTCString();
    document.cookie = nome + "=" + valor + ";" + expires + ";path=/";
}

// Função para obter o valor de um cookie
function getCookie(nome) {
    var name = nome + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}

// Chamada para inicializar os contadores quando a página é carregada
window.onload = inicializarContadores;