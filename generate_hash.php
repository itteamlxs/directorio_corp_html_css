<?php
// Contraseña para 'aleon'
$password_admin = 'temporal2024';
$hashed_password_admin = password_hash($password_admin, PASSWORD_DEFAULT);
echo "Contraseña encriptada para aleon: " . $hashed_password_admin . "\n";

// Contraseña para 'user'
$password_user = 'generic2024';
$hashed_password_user = password_hash($password_user, PASSWORD_DEFAULT);
echo "Contraseña encriptada para user: " . $hashed_password_user . "\n";
?>
