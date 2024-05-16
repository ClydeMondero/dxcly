<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/register.css" />
    <link rel="icon" href="assets/skull.png" sizes="32x32" type="image/png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css" integrity="sha512-6S2HWzVFxruDlZxI3sXOZZ4/eJ8AcxkQH1+JjSe/ONCEqR9L4Ysq5JdT5ipqtzU7WHalNwzwBv+iE51gNHJNqQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>DXCLY: Register</title>
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js" integrity="sha512-lbwH47l/tPXJYG9AcFNoJaTMhGvYWhVM9YI43CT+uteTRRaiLCui8snIgyAN8XWgNjNhCqlAUdzZptso6OCoFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <?php include  "templates/header.php"; ?>

    <div class="content">
        <!-- Register -->
        <div class="register-container">
            <div class="register">
                <h2>Register</h2>
                <div class="details">
                    <div class="personal-details">
                        <h3>Personal Details</h2>
                            <div class="input">
                                <label for="name">Full Name</label>
                                <input type="text" id="name">
                            </div>
                            <div class="input">
                                <label for="username">Username</label>
                                <input type="text" id="user-name">
                            </div>

                            <div class="input">
                                <label for="contact">Contact Number</label>
                                <input type="phone" id="contact">
                            </div>

                            <div class="input">
                                <label for="address">Address</label>
                                <input type="text" id="address">
                            </div>
                    </div>
                    <div class="account-details">
                        <h3>Account Details</h2>
                            <div class="input">
                                <label for="email">Email</label>
                                <input type="email" id="email">
                            </div>
                            <div class="input">
                                <label for="password">Password</label>
                                <input type="password" id="password">
                            </div>

                            <div class="input">
                                <label for="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password">
                            </div>
                    </div>
                </div>
                <button id="register-button">Sign Up</button>
                <a href="login.php" class="login"><span>Login to a existing account</span></a>
            </div>
        </div>
    </div>

    <?php include  "templates/footer.php"; ?>

    <script src="js/register.js"></script>
</body>

</html>