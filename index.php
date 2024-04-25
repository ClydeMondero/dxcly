<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="css/index.css" />
  <link rel="icon" href="assets/skull.png" sizes="32x32" type="image/png">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <title>DXCLY:Techwear</title>
</head>

<body>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <?php include  "templates/header.php"; ?>

  <!-- Hero -->
  <div class="hero">
    <div class="hero-overlay">
    </div>
    <img src="assets/hero.jpg" alt="" />
    <div class="hero-container">
      <span>Techwear</span>
      <p>
        Techwear refers to clothing made from technical fabrics like,
        GORE-TEX, Primaloft nylon, Polartec fleece, designed to allow for
        water-resistance, breathability, windproof and comfort. Techwear can
        also describe a specific aesthetic inspired by cyberpunk culture and
        urban fashion.
      </p>
    </div>
  </div>

  <!-- Gender -->
  <div class="gender">
    <div class="female">
      <img src="assets/women.jpg" alt="" />
      <button>All Women's</button>
    </div>
    <div class="male">
      <img src="assets/men.jpg" alt="" />
      <button>All Mens's</button>
    </div>
  </div>

  <!-- Essentials-->
  <div class="essentials">
    <span>Techware Essentials</span>
    <button>View Essentials</button>
    <div class="essentials-products"></div>
  </div>

  <!-- Testimonial -->
  <div class="testimonial">
    <img src="assets/testimonial.jpg" alt="" />
    <div class="testimony">
      <h4>Innovative and Futuristic</h4>
      <h3>Techwear Fashion</h3>
      <div class="testimony-content">
        <p>
          Made of special fabrics, techwear or urban techwear is a garment that
          is halfway between urban fashion and futuristic design. These highly
          functional garments combine technology and fashion for design and pure
          clothing practiced in all circumstances.
        </p>
        <p>
          Both resistant and comfortable, this range of clothing inspired by the
          military look but also cyberpunk appeals to both men and women.
          Waterproof trench coats, waterproof sneakers or seamless tee-shirts,
          useful clothes and designs.
        </p>
        <p>
          Made of special fabrics, techwear or urban techwear is a garment that
          is halfway between urban fashion and futuristic design. These highly
          functional garments combine technology and fashion for design and pure
          clothing practiced in all circumstances. Both resistant and
          comfortable, this range of clothing inspired by the military look but
          also cyberpunk appeals to both men and women. Waterproof trench coats,
          waterproof sneakers or seamless tee-shirts, useful clothes and
          designs. Shop the latest techwear trends and create the techwear look
          that suits you. Military, cyberpunk or ninja techwear inspired by
          Japanese culture, find the style that suits you among the many
          references available on our site.

      </div>
      </p>
    </div>
  </div>


  <!-- Services -->
  <div class="services">
    <div class="service">
      <span class="material-icons">
        local_shipping
      </span>
      <h4>FREE SHIPPING</h4>
    </div>
    <div class="service">
      <span class="material-icons">
        paid
      </span>
      <h4>SECURE PAYMENT</h4>
    </div>
    <div class="service">
      <span class="material-icons">
        thumb_up
      </span>
      <h4>EASY RETURNS</h4>
    </div>
    <div class="service">
      <span class="material-icons">
        verified
      </span>
      <h4>7/7 SUPPORT</h4>
    </div>
  </div>

  <?php include "templates/footer.php"; ?>

  <script src="js/endpoints.js"></script>
  <script src="js/index.js"></script>
</body>

</html>