<?php

require_once '../db.php';

header('Content-type: application/json');

try {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    $password = $data['password'];
    $current_password = $pdo->query("SELECT password FROM users WHERE id = '$id'")->fetch()['password'];

    //check if the password is not equal to the current password
    if ($password != $current_password) {
        //update the password
        $stmt = $pdo->prepare('UPDATE users SET password = ? WHERE id = ?');
        $stmt->execute([$password, $id]);

        //check if the query succeeded or not
        if ($stmt->rowCount() > 0) {
            //return the data in JSON format
            echo json_encode(['message' => 'Password updated successfully', 'success' => true]);
        } else {
            echo json_encode(['message' => 'Password not updated', 'success' => false]);
        }
    } else {
        echo json_encode(['message' => 'Password is the same as the current password', 'success' => false]);
    }
} catch (Exception $e) {
    echo json_encode(['error' => $e]);
}
