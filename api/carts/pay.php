<?php
require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $cart_id = $data['id'];

    $stmt = $pdo->prepare('
            UPDATE carts
            SET status = ?, received_date = NOW()
            WHERE cart_id = ?
        ');
    $stmt->execute([
        'To Receive',
        $cart_id
    ]);

    echo json_encode(['message' => 'Payment Successful', 'success' => true]);
} catch (Exception $e) {
    echo json_encode(['message' => $e, "success" => false]);
}
