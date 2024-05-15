$(document).ready(function () {
  //get url params
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  //ready payload to be sent
  const data = JSON.stringify({ id: id });
  //fetch product
  let xhr = new XMLHttpRequest();

  let product;
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      product = JSON.parse(this.responseText);

      displayProduct();

      let cartBtn = $(".add-btn");

      cartBtn.click(function () {
        addProductToCart(product.id);
      });
    }
  };

  xhr.open("POST", "api/products/fetch_id.php", true);
  xhr.send(data);

  const container = $(".product");
  //display product
  function displayProduct() {
    let image = $("<img>").attr("src", product.location);
    let details = $("<div>").addClass("product-details");
    let links = $("<div>").addClass("links");
    let all = $("<a>").text("Techwear / ").attr("href", `products.php`);
    let type = $("<a>")
      .text(product.type + " /")
      .attr("href", `products.php?type=${product.type}`);
    let name = $("<h3>").text(product.name);
    let subDetails = $("<div>").addClass("sub-details");
    let price = $("<span>").text("₱" + product.price);
    let quantity = $("<span>").text("Stock: " + product.quantity);
    let description = $("<p>").text(product.description);
    let cartBtn = $("<button>").addClass("add-btn").text("Add to cart");

    if (product.quantity == 0) {
      cartBtn
        .prop("disabled", true)
        .css("pointer-events", "none")
        .css("opacity", "0.5");
    }

    links.append([all, type]);

    subDetails.append([price, quantity]);

    details.append([links, name, subDetails, description, cartBtn]);

    container.append(image);
    container.append(details);
  }

  function addProductToCart(productId) {
    //checks if user is logged in or not
    let userReq = new XMLHttpRequest();

    userReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let userData = JSON.parse(this.responseText);

        if (userData.loggedIn == "false") {
          toastr.warning("You need to login first.", "Warning", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
            // Redirect
            onHidden: function () {
              window.location.href = "login.php";
            },
          });
          return;
        }

        if (userData.loggedIn == "true") {
          let fetchCartsData = JSON.stringify(userData);

          let fetchCartsReq = new XMLHttpRequest();
          fetchCartsReq.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              let carts = JSON.parse(this.responseText);

              let cartExists = false;

              carts.forEach((cart) => {
                if (cart.product_id == productId) {
                  toastr.error("Product already in cart", "Error", {
                    timeOut: 2000,
                    preventDuplicates: true,
                    positionClass: "toast-bottom-left",
                  });

                  cartExists = true;
                }
              });

              if (!cartExists) {
                let cartData = JSON.stringify({
                  userId: userData.id,
                  productId: productId,
                });

                let addCartReq = new XMLHttpRequest();

                addCartReq.onreadystatechange = function () {
                  if (this.readyState == 4 && this.status == 200) {
                    let cartData = JSON.parse(this.responseText);
                    toastr.success(cartData.message, "Success", {
                      timeOut: 2000,
                      preventDuplicates: true,
                      positionClass: "toast-bottom-left",
                    });
                  }
                };

                addCartReq.open("POST", "api/carts/add.php", true);
                addCartReq.send(cartData);
              }
            }
          };

          fetchCartsReq.open("POST", "api/carts/fetch_cart.php", true);
          fetchCartsReq.send(fetchCartsData);
        }
      }
    };

    userReq.open("GET", "utils/check_user.php", true);
    userReq.send();
  }
});
