// Deshabilitar el clic derecho del mouse en el popup-content
document.addEventListener('DOMContentLoaded', function() {
    const popupContent = document.querySelector('.popup-content');
    
    if (popupContent) {
        // Deshabilitar el clic derecho del mouse en el popup-content
        popupContent.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            alert('El clic derecho está deshabilitado en el visor PDF.');
        });

        // Deshabilitar la tecla F12 en el popup-content
        document.addEventListener('keydown', function(event) {
            if (event.key === 'F12') {
                event.preventDefault();
                alert('La tecla F12 está deshabilitada en el visor PDF.');
            }
        });
    }
});
