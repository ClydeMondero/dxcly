<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $userId = $data['id'];

    //fetch data from the products table
    $stmt = $pdo->prepare('SELECT product_id, order_quantity FROM orders WHERE user_id = ?');
    $stmt->execute([$userId]);
    $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);

    //return the data in JSON format
    echo json_encode($orders);
} catch (Exception $e) {
    echo json_encode(['error' => $e]);
}
