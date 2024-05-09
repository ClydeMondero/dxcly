<?php
require_once '../db.php';

//Set the content type to JSON
header('Content-type: application/json');

try {
    session_start();

    if (isset($_SESSION['username']) && isset($_SESSION['logged_in'])) {

        $_SESSION['logged_in'] = false;
        $user = $_SESSION['username'];
        $_SESSION['username'] = '';

        echo json_encode(['message' => 'Logout Successful', 'success' => 'true']);
    } else {
        echo json_encode(['message' => 'No existing session found', 'success' => 'false']);
    }
} catch (Exception $e) {
    echo $e;
    echo json_encode(['message' => 'Logout Failed', 'success' => 'false']);
}