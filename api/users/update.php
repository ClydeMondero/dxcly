<?php

require_once '../db.php';

session_start();

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $_SESSION['id'];
    $name = $data['name'];
    $username = $data['username'];
    $email = $data['email'];
    $contact = $data['contact'];
    $address = $data['address'];
    $method = $data['method'];
    $location = $data['location'];

    //update the data in the users table
    $stmt = $pdo->prepare('UPDATE users SET full_name = ?, username = ?, email = ?, contact_number = ?, address = ?, payment_method = ?, profile_picture = ? WHERE id = ?');
    $stmt->execute([$name, $username, $email, $contact, $address, $method, $location, $id]);

    //return the data in JSON format
    echo json_encode(['message' => 'User data updated successfully', "success" => "true"]);
} catch (Exception $e) {
    echo json_encode(['message' => $e]);
}
