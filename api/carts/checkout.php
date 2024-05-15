<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $selectedCarts = $data['selected_carts'];

    foreach ($selectedCarts as $cart_id) {
        $stmt = $pdo->prepare('
            UPDATE carts
            SET status = ?, ordered_date = ? 
            WHERE cart_id = ?
        ');
        $stmt->execute([
            'Pending',
            date('Y-m-d H:i:s'),
            $cart_id
        ]);
    }

    echo json_encode(['message' => 'Order created successfully', 'success' => true]);
} catch (Exception $e) {
    echo json_encode(['message' => $e, "success" => false]);
}
