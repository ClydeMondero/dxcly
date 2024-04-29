<?php
session_start();

if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true) {
    echo json_encode(['message' => 'User logged in']);
} else {
    echo json_encode(['message' => 'User not logged in']);
    header('Location: pages/login.php');
}
