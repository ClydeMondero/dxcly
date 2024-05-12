$(document).ready(function () {
  let dropdown = $(".dropdown");
  let dropdownContainer = $(".dropdown-container");

  dropdown.hide();

  dropdownContainer.hover(
    (event) => {
      let hoveredDropdown = $(event.target).find(".dropdown");
      hoveredDropdown.show();
    },
    (event) => {
      let hoveredDropdown = $(event.target).find(".dropdown");
      hoveredDropdown.hide();
    }
  );

  dropdown.mouseleave(() => {
    dropdown.hide();
  });

  // Select the spans
  var emailSpan = $(".text-email");
  var shippingSpan = $(".text-shipping");

  // Hide the shipping span initially
  shippingSpan.hide();

  // Set the interval to switch between spans every 3 seconds
  setInterval(function () {
    if (emailSpan.is(":visible")) {
      shippingSpan.css("right", "0");
      shippingSpan.show();
      shippingSpan.animate({ right: "48%" });

      emailSpan.animate({ left: -10 }, () => {
        emailSpan.hide();
        emailSpan.css("left", "");
      });
    } else {
      emailSpan.css("right", "0");
      emailSpan.show();
      emailSpan.animate({ right: "43%" });

      shippingSpan.animate({ left: -5 }, () => {
        shippingSpan.hide();
        shippingSpan.css("left", "");
        emailSpan.show();
      });
    }
  }, 4000); // 3 seconds interval

  //cart
  $("#cart-btn").click(function () {
    $(".cart-container").toggleClass("open");
    $(".cart").toggleClass("open");
    $("body").css("overflow", "hidden");

    let userReq = new XMLHttpRequest();

    userReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let ordersReq = new XMLHttpRequest();

        let data = JSON.parse(this.responseText);

        ordersReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            let orders = JSON.parse(this.responseText);

            displayOrders(orders);
          }
        };

        if (data.loggedIn == "false") {
          window.location.href = "login.php";
        }

        ordersReq.open("POST", "api/orders/fetch.php", true);
        data = JSON.stringify(data);
        ordersReq.send(data);
      }
    };

    userReq.open("POST", "utils/check_user.php", true);
    userReq.send();
  });

  $("#close-btn").click(function () {
    $(".cart-container").toggleClass("open");
    $(".cart").toggleClass("open");
    $("body").css("overflow", "scroll");
  });

  function displayOrders(orders) {
    if (orders.length == 0) {
      $(".cart-empty").show();
      return;
    }

    let container = $(".orders");

    container.empty();

    $.each(orders, function (index, order) {
      const productId = JSON.stringify({ id: order.product_id });

      //fetch product
      let productReq = new XMLHttpRequest();

      productReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let product = JSON.parse(this.responseText);

          let orderElement = $("<a>")
            .addClass("order")
            .attr("href", "product.php?id=" + product.id);
          let orderImage = $("<img>").attr("src", product.location);

          let orderDetails = $("<div>").addClass("order-details");
          let orderName = $("<h4>").text(product.name);
          let orderPrice = $("<span>").text(
            "₱ " + product.price.toLocaleString("en-US")
          );

          let quantityContainer = $("<div>").addClass("quantity-container");
          let decreaseQuantity = $("<button>")
            .attr("id", "decrease-quantity")
            .text("-");
          let orderQuantity = $("<span>").text(order.order_quantity);
          let increaseQuantity = $("<button>")
            .attr("id", "increase-quantity")
            .text("+");

          quantityContainer.append([
            decreaseQuantity,
            orderQuantity,
            increaseQuantity,
          ]);

          orderDetails.append([orderName, orderPrice, quantityContainer]);

          orderElement.append([orderImage, orderDetails]);
          container.append(orderElement);

          //TODO:Increase and decrease quantity
        }
      };

      productReq.open("POST", "api/products/fetch_id.php", true);
      productReq.send(productId);
    });
  }
});
