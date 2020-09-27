var socket = io();

// on es para escuchar información
socket.on('connect', function() {
    console.log('Conectado al servidor');

});

// emit es para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Federico',
    mensaje: 'Hola Mundo'
}, function(resp) { //tercer parametro para ver si se hizo todo bien
    console.log('respuesta server: ', resp);
});

// escuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);

});