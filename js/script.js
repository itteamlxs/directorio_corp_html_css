function openPopup(pdfFile) {
    var popup = document.getElementById('popup');
    var iframe = popup.querySelector('iframe');
    iframe.setAttribute('src', pdfFile);
    popup.style.display = 'flex';
}

function closePopup() {
    var popup = document.getElementById('popup');
    var iframe = popup.querySelector('iframe');
    iframe.setAttribute('src', ''); // Limpiar el src para evitar problemas de memoria
    popup.style.display = 'none';
}


// configuraciones basicas de privacidad

// Deshabilitar el clic derecho del mouse
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Deshabilitar la tecla F12
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
    }
});


// Lanza un mensaje de web_push de alert
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    document.body.appendChild(notification);

    // Forzar un reflow para que la transición de opacidad se aplique
    requestAnimationFrame(() => {
        notification.classList.add('show');
    });

    setTimeout(() => {
        notification.classList.remove('show');
        notification.addEventListener('transitionend', () => {
            notification.remove();
        }, { once: true });
    }, 2000); // El mensaje desaparecerá después de 2 segundos
}

// Deshabilitar el clic derecho del mouse y mostrar un mensaje
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    showNotification('Acción no permitida'); //Mensaje del web_push
});

// Deshabilitar la tecla F12 y mostrar un mensaje
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
        showNotification('Acción no permitida');
    }
});