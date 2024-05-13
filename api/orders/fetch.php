<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $userId = $data['id'];

    //fetch data from the products table
    $stmt = $pdo->prepare('SELECT * FROM orders WHERE user_id = ? ORDER BY order_id ASC');
    $stmt->execute([$userId]);
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //return the data in JSON format
    echo json_encode($orders);
} catch (Exception $e) {
    echo json_encode(['error' => $e]);
}
