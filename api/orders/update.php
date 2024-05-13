<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $operation = $data['operation'];
    $order_id = $data['order_id'];

    //insert the data into the cart table
    if ($operation === 'increase') {
        $stmt = $pdo->prepare('UPDATE orders SET order_quantity = order_quantity + 1 WHERE order_id = ?');
    } elseif ($operation === 'decrease') {
        $stmt = $pdo->prepare('UPDATE orders SET order_quantity = order_quantity - 1 WHERE order_id = ? AND order_quantity > 0');
    }
    $stmt->execute([$order_id]);

    //fetch new quantity
    $stmt = $pdo->prepare('SELECT order_quantity FROM orders WHERE order_id = ?');
    $stmt->execute([$order_id]);
    $quantity = $stmt->fetchColumn();

    //return the data in JSON format
    echo json_encode(['quantity' => $quantity]);
} catch (Exception $e) {
    echo json_encode(['error' => $e]);
}
