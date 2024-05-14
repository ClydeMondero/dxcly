<!-- Header -->
<html>

<head>
    <link rel="stylesheet" href="css/header.css">
</head>

<body>

    <div class="header">
        <div class="top">
            <span class="text-email">any questions? info@dxcly.com</span>
            <span class="text-shipping">FREE SHIPPING</span>
        </div>
        <div class="bottom">
            <div class="left">
                <span class="logo"><a href="index.php">DXCLY</a></span>
            </div>
            <div class="center">
                <span><a href="index.php">Home</a>
                    <hr />
                </span>
                <span>
                    <a href="products.php">Techwear</a>
                    <hr />
                </span>
                <span class="dropdown-container">
                    Clothes
                    <hr />
                    <div class="dropdown">
                        <span><a href="products.php?type=Jackets">Jackets</a></span>
                        <span><a href="products.php?type=Hoodies">Hoodies</a></span>
                        <span><a href="products.php?type=Vest">Vest</a></span>
                        <span><a href="products.php?type=Pants">Pants</a></span>
                        <span><a href="products.php?type=Shirts">Shirts</a></span>
                        <span><a href="products.php?type=Cloaks">Cloaks</a></span>
                        <span><a href="products.php?type=Shorts">Shorts</a></span>
                    </div>
                </span>
                <span>
                    <span><a href="products.php?type=Footwear">Footwear</a></span>
                    <hr />
                </span>
                <span class="dropdown-container">
                    Accessories
                    <hr />
                    <div class="dropdown">
                        <span><a href="products.php?type=Hats">Hats</a></span>
                        <span><a href="products.php?type=Masks">Masks</a></span>
                        <span><a href="products.php?type=Belts">Belts</a></span>
                        <span><a href="products.php?type=Gloves">Gloves</a></span>
                        <span><a href="products.php?type=Backpacks">Backpacks</a></span>
                    </div>
                </span>
            </div>

            <div class="right">
                <span class="material-symbols-outlined"> search </span>
                <span id="cart-btn" class="material-symbols-outlined"> shopping_bag </span>
                <a class="pfp" href="utils/redirect.php">
                    <img id="profile-picture" src="assets/default-pfp.png" alt="">
                    <span id="username">Username</span>
                </a>
            </div>

            <!-- Cart -->
            <div class="cart-container">
                <div class="cart">
                    <div class="cart-top">
                        <h2>Cart</h3>
                            <span id="close-btn" class="material-symbols-outlined"> close </span>
                    </div>
                    <hr>
                    <div class="orders">
                        <span class="cart-empty">Your cart is currently empty</span>
                    </div>
                    <hr>
                    <div class="cart-bottom">
                        <div class="total-container">
                            <span>SubTotal</span>
                            <span id="total">₱0.00</span>
                        </div>
                        <button id="checkout-btn">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/header.js"></script>
</body>

</html>