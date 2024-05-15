$(document).ready(function (e) {
  logoutHandler();

  displayUserData();

  getOrders();
  //TODO: randomize order status
  //TODO: filter orders
  //TODO: return and cancel button

  $("#pfp-input").on("change", function () {
    const [file] = $(this).prop("files");

    if (file) {
      $("#pfp-preview").attr("src", URL.createObjectURL(file));
    }
  });

  updateHandler();
});

function getOrders() {
  let checkUserReq = new XMLHttpRequest();

  checkUserReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let checkUserRes = JSON.parse(this.responseText);

      let ordersReq = new XMLHttpRequest();

      ordersReq.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let orders = JSON.parse(this.responseText);

          displayOrders(orders);
        }
      };

      ordersReq.open("POST", "api/carts/fetch_orders.php", true);
      ordersReq.send(JSON.stringify(checkUserRes));
    }
  };

  checkUserReq.open("GET", "utils/check_user.php", true);
  checkUserReq.send();
}

function displayOrders(orders) {
  let container = $(".orders");

  container.empty();

  if (orders.length == 0) {
    let ordersEmpty = $("<span>")
      .addClass("orders-empty")
      .text("You've not placed any orders yet.");

    container.css("justify-content", "center");

    container.append(ordersEmpty);
    return;
  }

  for (let order of orders) {
    let productId = JSON.stringify({ id: order.product_id });

    let productReq = new XMLHttpRequest();

    productReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let product = JSON.parse(this.responseText);

        let orderElement = $("<div>").addClass("order");
        let imageContainer = $("<a>")
          .addClass("image-container")
          .attr("href", "product.php?id=" + product.id);

        let orderImage = $("<img>").attr("src", product.location);

        let orderDetails = $("<div>").addClass("details");
        let orderName = $("<h4>").text(product.name);

        let total = product.price * order.cart_quantity;

        let orderPrice = $("<span>").text(
          "Price: ₱ " + product.price.toLocaleString("en-US")
        );

        let orderQuantity = $("<span>").text(order.cart_quantity + " pc/s");

        let orderTotal = $("<span>")
          .text("Total: ₱ " + total.toLocaleString("en-US"))
          .addClass("total");

        let pricesContainer = $("<div>").addClass("prices");

        let optionsContainer = $("<div>").addClass("options");

        let orderDate = $("<span>")
          .text("Ordered on: " + formatDate(order.ordered_date))
          .addClass("date");

        let deliveredDate = $("<span>")
          .text("To Receive at: " + formatDate(order.received_date))
          .addClass("date");

        order.status == "To Pay" ? deliveredDate.hide() : deliveredDate.show();

        let orderStatus = $("<span>").text(order.status).addClass("status");

        let orderBtn = $("<button>").addClass("order-btn");

        let nameContainer = $("<div>").addClass("name-container");

        switch (order.status) {
          case "To Pay":
            orderBtn.text("Pay");
            orderBtn.click(() => {
              $(".payment-modal").css("display", "flex");
              $("body").css("overflow", "hidden");

              if ($(".payment-modal").css("display") == "flex") {
                setTimeout(() => {
                  let paymentReq = new XMLHttpRequest();

                  paymentReq.onreadystatechange = function () {
                    if (this.readyState == 4 && this.status == 200) {
                      console.log(this.response);
                      let paymentRes = JSON.parse(this.responseText);

                      if (paymentRes) {
                        toastr.success(paymentRes.message, "Success", {
                          timeOut: 2000,
                          preventDuplicates: true,
                          positionClass: "toast-bottom-left",
                          onHidden: () => {
                            $(".payment-modal").css("display", "none");
                          },
                        });
                      }
                    }
                  };

                  paymentReq.open("POST", "api/carts/pay.php", true);
                  paymentReq.send(JSON.stringify({ id: order.cart_id }));
                }, 1000);

                $(".payment-modal #close-btn").click(() => {
                  $(".payment-modal").css("display", "none");
                });
              }
            });
        }

        imageContainer.append([orderImage]);

        nameContainer.append([orderName, orderStatus]);

        pricesContainer.append([orderPrice, orderQuantity, orderTotal]);

        optionsContainer.append([orderDate, deliveredDate, orderBtn]);

        orderDetails.append([nameContainer, pricesContainer, optionsContainer]);

        orderElement.append([imageContainer, orderDetails]);

        container.append([orderElement]);
      }
    };

    productReq.open("POST", "api/products/fetch_id.php", true);
    productReq.send(productId);
  }
}

function updateHandler() {
  $("#update-btn").click(function () {
    const [file] = $("#pfp-input").prop("files");

    let updateData = JSON.stringify({
      name: $("#name").val(),
      username: $(".details #username").val(),
      email: $("#email").val(),
      contact: $("#contact").val(),
      address: $("#address").val(),
      method: $("#method").val(),
      location: file ? "assets/" + file.name : userData.profile_picture,
    });

    let updateReq = new XMLHttpRequest();

    updateReq.open("UPDATE", "api/users/update.php", true);
    updateReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let updateRes = JSON.parse(this.responseText);

        if (updateRes.success == "true") {
          toastr.success(updateRes.message, "Success", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
            onHidden: uploadPicture,
          });
        }
      }
    };
    updateReq.send(updateData);
  });
}

function uploadPicture() {
  let picture = $("#pfp-input").prop("files")[0];
  let pictureData = new FormData();
  pictureData.append("picture", picture);
  let uploadReq = new XMLHttpRequest();
  uploadReq.open("POST", "utils/upload_image.php", true);
  uploadReq.send(pictureData);
}

let userData;

function displayUserData() {
  let checkUserReq = new XMLHttpRequest();

  checkUserReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let userAuthData = JSON.parse(this.responseText);

      if (userAuthData.loggedIn == "true") {
        let fetchUserReq = new XMLHttpRequest();

        fetchUserReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            userData = JSON.parse(this.responseText);

            $("#name").attr("value", userData.full_name);
            $(".detail #username").attr("value", userData.username);
            $("#email").attr("value", userData.email);
            $("#contact").attr("value", userData.contact_number);
            $("#address").attr("value", userData.address);
            $("#method").val(userData.payment_method);

            $("#method").on("change", function () {
              updateMethodPreview($(this).val());
            });

            updateMethodPreview(userData.payment_method);

            $("#pfp-preview").attr("src", userData.profile_picture);
          }
        };

        fetchUserReq.open("POST", "api/users/fetch_id.php", true);
        fetchUserReq.send(JSON.stringify(userAuthData));
      }
    }
  };

  checkUserReq.open("GET", "utils/check_user.php", true);
  checkUserReq.send();
}

function updateMethodPreview(method) {
  $("#method-preview").show();

  if (method == "GCash") {
    $("#method-preview").attr("src", "assets/gcash.png");
  } else if (method == "Maya") {
    $("#method-preview").attr("src", "assets/maya.png");
  } else if (method == "Card") {
    $("#method-preview").attr("src", "assets/mastercard.png");
  }
}

function logoutHandler() {
  $("#logout-button").click(() => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        if (data.success == "true") {
          window.location.href = "index.php";
        }
      }
    };
    xhr.open("DELETE", "api/auth/logout.php", true);
    xhr.send();
  });
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 1 ? "Today" : diffDays + " days ago";
}
