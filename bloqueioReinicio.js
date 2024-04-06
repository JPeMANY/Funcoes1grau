window.addEventListener('beforeunload', function (e) {
    var message = 'Tem certeza que deseja sair? Os dados não salvos serão perdidos.';
    e.returnValue = message;
    return message;
});