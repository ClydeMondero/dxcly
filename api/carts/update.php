<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $operation = $data['operation'];
    $cart_id = $data['cart_id'];
    $quantity = $data['product_quantity'];

    //insert the data into the cart table
    if ($operation === 'increase') {
        $stmt = $pdo->prepare('UPDATE carts SET cart_quantity = cart_quantity + 1 WHERE cart_id = ? AND cart_quantity < ? ');

        $stmt->execute([$cart_id, $quantity]);
    } elseif ($operation === 'decrease') {
        $stmt = $pdo->prepare('UPDATE carts SET cart_quantity = cart_quantity - 1 WHERE cart_id = ? AND cart_quantity > 1 ');

        $stmt->execute([$cart_id]);
    }

    //return the data in JSON format
    echo json_encode(['success' => 'true']);
} catch (Exception $e) {
    echo json_encode(['error' => $e, 'success' => 'false']);
}
