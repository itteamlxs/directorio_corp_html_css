<?php
session_start();
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Preparar la consulta
    $stmt = $conn->prepare("SELECT id, password, nivel FROM usuarios WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    // Verificar si el usuario existe
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id, $hashed_password, $nivel);
        $stmt->fetch();

        // Verificar la contraseña hasheada
        if (password_verify($password, $hashed_password)) {
            $_SESSION['user_id'] = $id;
            $_SESSION['username'] = $username;
            $_SESSION['nivel'] = $nivel;
            
            // Redirigir al usuario a la página principal
            header("Location: dashboard.php");
            exit();
        } else {
            echo '<script type="text/javascript">';
            echo 'alert("Contraseña incorrecta");';
            echo 'window.location.href = "index.php";';
            echo '</script>';
            exit();
        }
    } else {
        echo '<script type="text/javascript">';
        echo 'alert("Usuario no encontrado.");';
        echo 'window.location.href = "index.php";';
        echo '</script>';
        exit();
    }

    $stmt->close();
}

$conn->close();
?>
