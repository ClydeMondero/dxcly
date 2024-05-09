<?php
require_once '../db.php';

//Set the content type to JSON
header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $fullName = $data['full_name'];
    $address = $data['address'];
    $email = $data['email'];
    $contactNumber = $data['contact_number'];
    $username = $data['username'];
    $password = $data['password'];
    $account_type = 'buyer';

    $stmt = $pdo->prepare('INSERT INTO users (full_name, address, email, contact_number, username, password, account_type) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$fullName, $address, $email, $contactNumber, $username, $password, $account_type]);

    echo json_encode(['message' => 'Sign up successful', 'user' => $data]);
} catch (Exception $e) {
    echo $e;
    echo json_encode(['message' => 'Something went wrong.']);
}
