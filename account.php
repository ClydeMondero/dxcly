<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/account.css" />
    <link rel="icon" href="assets/skull.png" sizes="32x32" type="image/png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <title>DXCLY: Account</title>
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <?php include  "templates/header.php"; ?>

    <div class="content">
        <!-- Account -->
        <div class="account-container">
            <div class="account">
                <h2>
                    My Account
                </h2>
                <button id="logout-button">Sign Out</button>
            </div>
        </div>
    </div>

    <?php include  "templates/footer.php"; ?>

    <script src="js/account.js"></script>
</body>

</html>