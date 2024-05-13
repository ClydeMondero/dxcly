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
    let userReq = new XMLHttpRequest();

    userReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let ordersReq = new XMLHttpRequest();

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
        } else {
          $(".cart-container").toggleClass("open");
          $(".cart").toggleClass("open");
          $("body").css("overflow", "hidden");

          ordersReq.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
              let orders = JSON.parse(this.responseText);

              displayOrders(orders, userData);
            }
          };

          ordersReq.open("POST", "api/orders/fetch.php", true);
          userData = JSON.stringify(userData);
          ordersReq.send(userData);
        }
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

  function displayOrders(orders, user) {
    if (orders.length == 0) {
      $(".cart-empty").show();
      return;
    }

    let container = $(".orders");

    container.empty();

    let subTotal = 0;

    $.each(orders, function (index, order) {
      const productId = JSON.stringify({ id: order.product_id });

      //fetch product
      let productReq = new XMLHttpRequest();

      productReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let product = JSON.parse(this.responseText);

          let orderElement = $("<div>").addClass("order");

          let checkbox = $("<input>")
            .attr({ type: "checkbox", id: "selected-order" })
            .prop("checked", true);

          let imageContainer = $("<a>")
            .addClass("image-container")
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
            .text("-")
            .click(() => {
              updateQuantity("decrease", order, user);
            });
          let orderQuantity = $("<span>").text(order.order_quantity);
          let increaseQuantity = $("<button>")
            .attr("id", "increase-quantity")
            .text("+")
            .click(() => {
              updateQuantity("increase", order, user);
            });
          imageContainer.append(orderImage);

          quantityContainer.append([
            decreaseQuantity,
            orderQuantity,
            increaseQuantity,
          ]);

          orderDetails.append([orderName, orderPrice, quantityContainer]);

          orderElement.append([checkbox, imageContainer, orderDetails]);
          container.append(orderElement);

          let total = 0;
          total = product.price * order.order_quantity;

          if (checkbox.prop("checked")) {
            subTotal += total;
            $("#total").text("₱ " + subTotal.toLocaleString("en-US"));
          }

          checkbox.on("change", function () {
            if ($(this).prop("checked")) {
              subTotal += total;
              $("#total").text("₱ " + subTotal.toLocaleString("en-US"));
            } else {
              subTotal -= total;
              $("#total").text("₱ " + subTotal.toLocaleString("en-US"));
            }
          });
        }
      };

      productReq.open("POST", "api/products/fetch_id.php", false);
      productReq.send(productId);
    });
  }

  function updateQuantity(operation, order, user) {
    let updateData = JSON.stringify({
      operation: operation,
      order_id: order.order_id,
      order_quantity: order.order_quantity,
    });

    let updateReq = new XMLHttpRequest();

    updateReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let newQuantity = JSON.parse(this.responseText).quantity;

        if (newQuantity == 0) {
          let removeReq = new XMLHttpRequest();

          removeReq.open("DELETE", "api/orders/remove.php", true);
          removeReq.send(JSON.stringify({ id: order.order_id }));
        }

        let ordersReq = new XMLHttpRequest();

        ordersReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            let orders = JSON.parse(this.responseText);

            displayOrders(orders, user);
          }
        };

        ordersReq.open("POST", "api/orders/fetch.php", true);
        ordersReq.send(user);
      }
    };

    updateReq.open("POST", "api/orders/update.php", true);
    updateReq.send(updateData);
  }
});
