function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Construir el objeto de datos a enviar
    var datos = {
        content: `Nuevo mensaje de contacto:
        Nombre: ${nombre}
        Email: ${email}
        Mensaje: ${mensaje}`
    };

    // URL del webhook de Discord
    var webhookURL = 'TOKEN_CONTACTO_DISCORD';

    // Realizar la solicitud HTTP (POST) al webhook
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Mensaje enviado con éxito:', data);
        // Puedes agregar aquí alguna acción adicional si lo deseas
    })
    .catch(error => {
        console.error('Error al enviar el mensaje:', error);
        // Puedes manejar el error de alguna manera si lo deseas
    });
}