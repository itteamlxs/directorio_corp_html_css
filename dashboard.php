<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: index.html");
    exit();
}

if ($_SESSION['nivel'] == 1) {
    header("Location: admin_dashboard.php");
    exit();
} else {
    header("Location: user_dashboard.php");
    exit();
}
?>
