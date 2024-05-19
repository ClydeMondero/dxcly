<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/dashboard.css" />
    <link rel="icon" href="assets/skull.png" sizes="32x32" type="image/png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css" integrity="sha512-6S2HWzVFxruDlZxI3sXOZZ4/eJ8AcxkQH1+JjSe/ONCEqR9L4Ysq5JdT5ipqtzU7WHalNwzwBv+iE51gNHJNqQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DXCLY: Admin Dashboard</title>
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js" integrity="sha512-lbwH47l/tPXJYG9AcFNoJaTMhGvYWhVM9YI43CT+uteTRRaiLCui8snIgyAN8XWgNjNhCqlAUdzZptso6OCoFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <?php
    session_start();

    //blocks buyer from accessing the admin dashboard page
    if (isset($_SESSION['account_type']) && $_SESSION['account_type'] == "buyer") {
        header("Location: index.php");
    }
    ?>

    <?php include 'templates/header_admin.php' ?>

    <div class="container">
        <?php
        if (isset($_GET['page'])) {
            $page = $_GET['page'];

            switch ($page) {
                case 'users':
                    include 'templates/users.php';
                    break;
                case 'products':
                    include 'templates/products.php';
                    break;
                case 'orders':
                    include 'templates/orders.php';
                    break;
            }
        }
        ?>
        <h2>Dashboard</h2>

        <input type="date" id="date">

        <div class="boxes">
            <div class="box">
                <span>Number of Users</span>
                <span id="users">4</span>
            </div>
            <div class="box">
                <span>Monthly Sales</span>
                <span id="monthly-sales">3,499</span>
            </div>
            <div class="box">
                <span>Daily Sales</span>
                <span id="daily-sales">4</span>
            </div>
            <div class="box">
                <span>Completed Orders</span>
                <span id="orders">4</span>
            </div>
        </div>
    </div>


    <script src="js/dashboard.js"></script>
</body>

</html>