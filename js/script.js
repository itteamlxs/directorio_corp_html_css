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

// Configuraciones básicas de privacidad

// Deshabilitar el clic derecho del mouse
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    showNotification('Acción no permitida');
});

// Deshabilitar la tecla F12
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
        showNotification('Acción no permitida');
    }
});

// Deshabilitar imprimir y descargar en el visor PDF
document.addEventListener('keydown', function(event) {
    // Ctrl+P para imprimir
    if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        showNotification('Acción no permitida');
    }
    // Ctrl+S para guardar
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
        event.preventDefault();
        showNotification('Acción no permitida');
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
    showNotification('Acción no permitida');
});

// Deshabilitar la tecla F12 y mostrar un mensaje
document.addEventListener('keydown', function(event) {
    if (event.key === 'F12') {
        event.preventDefault();
        showNotification('Acción no permitida');
    }
});
