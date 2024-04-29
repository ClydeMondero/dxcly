<?php
require_once '../db.php';

//Set the content type to JSON
header('Content-type: application/json');

//handle HTTP methods
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        //Login
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $username = $data['username'];
            $password = $data['password'];

            $stmt = $pdo->query('SELECT * from users');
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            session_start();

            foreach ($result as $user) {
                if ($user['username'] === $username && $user['password'] === $password) {
                    $_SESSION['username'] = $username;
                    $_SESSION['logged_in'] = true;

                    echo json_encode(['message' => 'Login Successful']);
                    return;
                }
            }

            echo json_encode(['message' => 'Login Failed']);
        } catch (Exception $e) {
            echo $e;
            echo json_encode(['message' => 'Something went wrong.']);
        }
        break;
    case 'POST':
        //Sign up 
        try {
            $data = json_decode(file_get_contents('php://input'), true);
            $fullName = $data['full_name'];
            $address = $data['address'];
            $email = $data['email'];
            $contactNumber = $data['contact_number'];
            $username = $data['username'];
            $password = $data['password'];
            $account_type = 'buyer';

            $stmt = $pdo->prepare('INSERT INTO users (full_name, address, email, contact_number, username, password, account_type) VALUES (?, ?, ?, ?, ?, ?, ?)');
            $stmt->execute([$fullName, $address, $email, $contactNumber, $username, $password, $account_type]);

            echo json_encode(['message' => 'Sign up successful', 'user' => $data]);
        } catch (Exception $e) {
            echo $e;
            echo json_encode(['message' => 'Something went wrong.']);
        }
        break;
    case 'DELETE':
        //Logout
        try {
            session_start();

            if (isset($_SESSION['username']) && isset($_SESSION['logged_in'])) {

                $_SESSION['logged_in'] = false;
                $user = $_SESSION['username'];
                $_SESSION['username'] = '';

                echo json_encode(['message' => 'Logout Successful', 'user' => $user]);
            } else {
                echo json_encode(['message' => 'No existing session found']);
            }
        } catch (Exception $e) {
            echo $e;
            echo json_encode(['message' => 'Logout Failed']);
        }
        break;
}
