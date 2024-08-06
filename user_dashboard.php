<?php
session_start();

// Verificar si el usuario está logueado y tiene el nivel adecuado
if (!isset($_SESSION['user_id']) || $_SESSION['nivel'] != 0) {
    header("Location: index.html");
    exit();
}

// Mensaje de bienvenida
$welcomeMessage = "¡Bienvenido, " . htmlspecialchars($_SESSION['username']) . "!";
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"="width=device-width, initial-scale=1.0">
    <title>Coo15 Archivo</title>

    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/politics.css">
    <style>
        /* Estilos embebidos para la barra de navegación */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333;
            padding: 1rem;
            color: white;
        }

        .navbar .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        .navbar a {
            color: white;
            text-decoration: none;
            margin-left: 1rem;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }

        .navbar a:hover {
            background-color: #555;
        }
    </style>
</head>
<body>
    <header>
        <div class="navbar">
            <div class="logo"><img src="images/#" width="180"></div>
            <!--<h3 class="title">Archivero Coop 15</h3>-->
            <div>
                <span><?php echo $welcomeMessage; ?></span>
                <a href="logout.php">Cerrar sesión</a>
            </div>
        </div>
    </header>
    
    <div class="container">
        <!-- Agrega más documentos según sea necesario -->
        <div class="document" onclick="openPopup('documents/ejemplo.pdf#toolbar=0')">
            <div class="document-icon">
                <img src="images/pdf.png" alt="PDF Icon">
            </div>
            <div class="document-name">
                Manual de iniciacion del SEO
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
    <script src="js/politics.js"></script>
</body>
</html>
