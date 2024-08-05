<?php
session_start();

if (!isset($_SESSION['user_id']) || $_SESSION['nivel'] != 0) {
    header("Location: index.html");
    exit();
}

echo "Bienvenido, usuario " . $_SESSION['username'] . "!";
?>
<a href="logout.php">Cerrar sesión</a>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coo15 Archivo</title>

    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/politics.css">
</head>
<body>
    <div class="container">

        <!-- Agrega más documentos según sea necesario -->

        <div class="document" onclick="openPopup('documents/ejemplo.pdf#toolbar=0')">
            <div class="document-icon">
                <img src="images/pdf.png" alt="PDF Icon">
            </div>
            
            <!--<div class="document-name" data-fullname="Manual de iniciación del SEO - Cooperativa 15 de Septiembre">
                #si activamos esta linea, el css lanzara un pequenio hover con el nombre del documento. sobre en contenedor
            -->

            <div class="document-name">
                Manual de iniciacion del SEO - Cooperativa 15 de Septiembre
            </div>
        </div>
        <!-- Agrega más documentos según sean necesarios -->

    </div>

    <div class="popup" id="popup">
        <div class="popup-content">
            <iframe src="" width="100%" height="100%"></iframe>
            <button onclick="closePopup()">Cerrar</button>
        </div>
    </div>

    <script src="js/script.js"></script>
    <script src="js/script/politcs.js"></script>

</body>
</html>