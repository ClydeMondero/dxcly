<?php
$uploadDir = '../assets/';
$uploadedFile = $uploadDir . basename($_FILES['picture']['name']);

if (move_uploaded_file($_FILES['picture']['tmp_name'], $uploadedFile)) {
    echo 'File uploaded successfully.';
} else {
    echo 'Error uploading file.';
}
