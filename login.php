<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/login.css" />
    <link rel="icon" href="assets/skull.png" sizes="32x32" type="image/png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css" integrity="sha512-6S2HWzVFxruDlZxI3sXOZZ4/eJ8AcxkQH1+JjSe/ONCEqR9L4Ysq5JdT5ipqtzU7WHalNwzwBv+iE51gNHJNqQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>DXCLY: Login</title>
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js" integrity="sha512-lbwH47l/tPXJYG9AcFNoJaTMhGvYWhVM9YI43CT+uteTRRaiLCui8snIgyAN8XWgNjNhCqlAUdzZptso6OCoFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <?php include  "templates/header.php"; ?>

    <div class="content">
        <!-- Login -->
        <div class="login-container">
            <div class="login">
                <h2>Login</h2>
                <div class="input">
                    <label for="email">Email</label>
                    <input type="email" id="email">
                </div>
                <div class="input">
                    <div class="input-password">
                        <label for="password">Password</label>
                        <span>Forget Password?</span>
                    </div>
                    <input type="password" id="password">
                </div>
                <button id="login-button">Sign In</button>
                <a href="register.php" class="create"><span>Create Account</span></a>
            </div>
        </div>
    </div>

    <?php include  "templates/footer.php"; ?>

    <script src="js/login.js"></script>
</body>

</html>