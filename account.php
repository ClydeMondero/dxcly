<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/account.css" />
    <link rel="icon" href="assets/skull.png" sizes="32x32" type="image/png">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css" integrity="sha512-6S2HWzVFxruDlZxI3sXOZZ4/eJ8AcxkQH1+JjSe/ONCEqR9L4Ysq5JdT5ipqtzU7WHalNwzwBv+iE51gNHJNqQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>DXCLY: Account</title>
</head>

<body>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js" integrity="sha512-lbwH47l/tPXJYG9AcFNoJaTMhGvYWhVM9YI43CT+uteTRRaiLCui8snIgyAN8XWgNjNhCqlAUdzZptso6OCoFQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <?php include  "templates/header.php"; ?>

    <div class="content">
        <!-- Account -->
        <div class="account-container">
            <div class="account">
                <div class="top">
                    <h2>
                        My Account
                    </h2>
                    <button id="logout-button">Sign Out</button>
                </div>
                <div class="bottom">
                    <div class="order-details">
                        <h2>
                            Your Orders
                        </h2>
                        <div class="orders"></div>
                    </div>
                    <div class="account-details">
                        <h2>Account Details</h2>
                        <div class="center">
                            <div class="details">
                                <div class="detail">
                                    <span class="label">Name</span>
                                    <input type=text" id="name" />
                                </div>
                                <div class="detail">
                                    <span class="label">Username</span>
                                    <input type="text" id="username" />
                                </div>
                                <div class="detail">
                                    <span class="label">Email</span>
                                    <input type="email" id="email" />
                                </div>
                                <div class="detail">
                                    <span class="label">Contact Number</span>
                                    <input type="phone" id="contact" />
                                </div>
                                <div class="detail">
                                    <span class="label">Address</span>
                                    <input type="address" id="address" />
                                </div>
                                <div class="method-container">
                                    <span class="label">Default Payment Method</span>
                                    <div class="methods">
                                        <img src="assets/gcash.png" alt="" id="method-preview">
                                        <select id="method">
                                            <option value="Cash on Delivery">
                                                Cash on Delivery
                                            </option>
                                            <option value="GCash">GCash</option>
                                            <option value="Maya">Maya</option>
                                            <option value="Card">Card</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="display-picture">
                                <img id="pfp-preview">
                                <label for="pfp-input">Choose File</label>
                                <input type="file" id="pfp-input" accept="image/*">
                            </div>
                        </div>
                        <button id="update-btn">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>

    <?php include  "templates/footer.php"; ?>

    <script src="js/account.js"></script>
</body>

</html>