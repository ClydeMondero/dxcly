$(document).ready(function () {
  $(".dashboard-container").hide();

  fetchOrders();

  //TODO: Edit
  //TODO: Delete
  //TODO: Filter
  //TODO: Archive
});

let products = [];

function fetchOrders() {
  let productsReq = new XMLHttpRequest();

  productsReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      products = JSON.parse(this.responseText);

      displayProducts();
    }
  };

  productsReq.open("GET", "api/products/fetch.php", true);
  productsReq.send();
}

function displayProducts() {
  $("#products-body").empty();

  let searchVal = $("#search").val().toLowerCase();

  let filterTerm = $("#filter").val();

  products.forEach((product) => {
    if (product.name.toLowerCase().includes(searchVal) || !searchVal) {
      if (filterTerm == product.type.toLowerCase() || !filterTerm) {
        let productTableRow = $("<tr></tr>");
        productTableRow.append($("<td></td>").text(product.id));
        productTableRow.append($("<td></td>").text(product.name));
        productTableRow.append(
          $("<td></td>").append($("<img>").attr("src", product.location))
        );
        productTableRow.append($("<td></td>").text(product.price));
        productTableRow.append($("<td></td>").text(product.type));
        productTableRow.append($("<td></td>").text(product.description));
        productTableRow.append($("<td></td>").text(product.quantity));
        $("#products-body").append(productTableRow);
      }
    }
  });
}
