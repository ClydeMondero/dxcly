<?php
require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $cart_id = $data['id'];


    $stmt = $pdo->prepare('
            UPDATE carts
            SET status = ?
            WHERE cart_id = ?
        ');
    $stmt->execute([
        'Completed',
        $cart_id
    ]);

    echo json_encode(['message' => 'Thank you for your ordering from us', 'success' => true]);
} catch (Exception $e) {
    echo json_encode(['message' => $e, "success" => false]);
}
