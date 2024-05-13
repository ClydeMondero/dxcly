<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $orderId = $data['id'];

    //delete the order from the orders table
    $stmt = $pdo->prepare('DELETE FROM orders WHERE order_id = ?');
    $stmt->execute([$orderId]);

    //return success message in JSON format
    echo json_encode(['message' => 'Order removed successfully']);
} catch (Exception $e) {
    echo json_encode(['error' => $e]);
}
