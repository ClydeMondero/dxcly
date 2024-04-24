<?php
require_once 'db.php';

//Set the content type to JSON
header('Content-type: application/json');

//handle HTTP methods
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        //Fetch all users
        $stmt = $pdo->query('SELECT * from users');
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($result);
        break;
    case 'POST':
        //Add a new user
        $data = json_decode(file_get_contents('php://input'), true);
        $username = $data['username'];
        $password = $data['password'];
        $account_type = $data['account_type'];

        $stmt = $pdo->prepare('INSERT INTO users (username, password, account_type) VALUES (?, ?, ?)');
        $stmt->execute([$username, $password, $account_type]);

        echo json_encode(['message' => 'User added successfully']);
        break;
    case 'PATCH':
        //Update a user
        $data = json_decode(file_get_contents('php://input'), true);

        $id = $data['id'];
        $username = $data['username'];
        $password = $data['password'];
        $account_type = $data['account_type'];

        $stmt = $pdo->prepare('UPDATE users SET username=?, password=?, account_type=? WHERE id=?');
        $stmt->execute([$username, $password, $account_type, $id]);

        echo json_encode(['message' => 'User updated successfully']);
        break;
    case 'DELETE':
        //Removes a user
        $data = json_decode(file_get_contents('php://input'), true);

        $id = $data['id'];

        $stmt = $pdo->prepare('DELETE FROM users WHERE id=?');
        $stmt->execute([$id]);

        echo json_encode(['message' => 'User deleted successfully']);
        break;
    default:
        //Invalid method
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
