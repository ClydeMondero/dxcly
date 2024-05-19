$(document).ready(function () {
  $(".dashboard-container").hide();

  fetchOrders();
});

let orderObjects = [];

function fetchOrders() {
  let orderReq = new XMLHttpRequest();

  orderReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let orders = JSON.parse(this.responseText);

      //create a new array of order objects
      orderObjects = orders.map((order) => ({
        id: order.cart_id,
        full_name: "",
        product_name: "",
        product_price: 0,
        quantity: order.cart_quantity,
        status: order.status,
        total_price: 0,
      }));

      let fullName;
      orders.forEach((order, index) => {
        let buyerReq = new XMLHttpRequest();

        buyerReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            let buyer = JSON.parse(this.responseText);

            orderObjects[index].full_name = buyer.full_name;

            let productReq = new XMLHttpRequest();

            productReq.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                let product = JSON.parse(this.responseText);

                orderObjects[index].product_name = product.name;
                orderObjects[index].product_price = product.price;
                orderObjects[index].total_price =
                  product.price * order.cart_quantity;

                displayOrders();

                // //filter
                // $("#filter").change(function () {
                //   let filter = $(this).val();
                //   let filteredOrders;

                //   switch (filter) {
                //     case "To Pay":
                //       filteredOrders = orderObjects.filter((order) => {
                //         return order.status == "To Pay";
                //       });

                //       displayOrders(filteredOrders);
                //       break;
                //     case "To Receive":
                //       filteredOrders = orderObjects.filter((order) => {
                //         return order.status == "To Receive";
                //       });

                //       displayOrders(filteredOrders);
                //       break;
                //     case "Completed":
                //       filteredOrders = orderObjects.filter((order) => {
                //         return order.status == "Completed";
                //       });

                //       displayOrders(filteredOrders);
                //       break;
                //     default:
                //       displayOrders(orderObjects);
                //   }
                // });
              }
            };

            productReq.open("POST", "api/products/fetch_id.php", true);
            productReq.send(JSON.stringify({ id: order.product_id }));
          }
        };

        buyerReq.open("POST", "api/users/fetch_id.php", true);
        buyerReq.send(JSON.stringify({ id: order.user_id }));
      });
    }
  };

  orderReq.open("GET", "api/carts/fetch_all_orders.php", true);
  orderReq.send();
}

function displayOrders() {
  $("#orders-body").empty();

  let searchVal = $("#search").val().toLowerCase();

  let filterTerm = $("#filter").val();

  orderObjects.forEach((order) => {
    if (
      order.full_name.toLowerCase().includes(searchVal) ||
      order.product_name.toLowerCase().includes(searchVal) ||
      !searchVal
    ) {
      if (filterTerm == order.status || !filterTerm) {
        let orderTableRow = $("<tr></tr>");
        orderTableRow.append($("<td></td>").text(order.id));
        orderTableRow.append($("<td></td>").text(order.full_name));
        orderTableRow.append($("<td></td>").text(order.product_name));
        orderTableRow.append($("<td></td>").text(order.product_price));
        orderTableRow.append($("<td></td>").text(order.quantity));
        orderTableRow.append($("<td></td>").text(order.total_price));
        orderTableRow.append($("<td></td>").text(order.status));
        $("#orders-body").append(orderTableRow);
      }
    }
  });
}
