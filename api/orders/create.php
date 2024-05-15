
<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $total = $data['total'];

    //insert the data into the cart table
    $stmt = $pdo->prepare('INSERT INTO orders (total) VALUES ( ?)');
    $stmt->execute([$total]);
    $orderId = $pdo->lastInsertId();

    //return the data in JSON format
    echo json_encode(['message' => 'Products checked out successfully', 'success' => true, 'orderId' => $orderId]);
} catch (Exception $e) {
    echo json_encode(['error' => $e, 'success' => true]);
}
