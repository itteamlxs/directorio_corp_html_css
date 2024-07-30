function openPopup(pdfFile) {
    var popup = document.getElementById('popup');
    var embed = popup.querySelector('embed');
    embed.setAttribute('src', pdfFile);
    popup.style.display = 'flex';
}

function closePopup() {
    var popup = document.getElementById('popup');
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




/*

    //Muestra en hover el nombre completo del archivo

    document.addEventListener('DOMContentLoaded', function() {
    const documentNames = document.querySelectorAll('.document-name');

    documentNames.forEach(docName => {
        docName.addEventListener('mouseenter', function(event) {
            const tooltipText = event.target.getAttribute('data-fullname');
            if (!tooltipText) return;

            // Crear el elemento del tooltip
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.innerText = tooltipText;
            
            // Agregar el tooltip al body
            document.body.appendChild(tooltip);

            // Posicionar el tooltip
            const rect = event.target.getBoundingClientRect();
            tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
            tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
        });

        docName.addEventListener('mouseleave', function() {
            // Eliminar el tooltip
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});

*/
