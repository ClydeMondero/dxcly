$(document).ready(function () {
  $(".dashboard-container").hide();

  fetchOrders();
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

        let editBtn = $("<span>")
          .text("edit")
          .addClass("material-symbols-outlined")
          .attr("id", "edit-btn")
          .click(function () {
            window.location.href =
              "dashboard.php?page=edit-product&id=" + product.id;
          });

        let deleteBtn = $("<span>")
          .text("delete")
          .addClass("material-symbols-outlined")
          .attr("id", "delete-btn")
          .click(function () {
            deleteProduct(product.id);
          });

        let actions = $("<div>").addClass("actions");

        actions.append([editBtn, deleteBtn]);

        productTableRow.append($("<td></td>").append(actions));

        if (product.quantity == 0) {
          productTableRow.css("opacity", "0.5");
        }

        $("#products-body").append(productTableRow);
      }
    }
  });
}

function deleteProduct(id) {
  let deleteReq = new XMLHttpRequest();

  deleteReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let deleteRes = JSON.parse(this.responseText);

      if (deleteRes.success == true) {
        toastr.success(deleteRes.message, "Success", {
          timeOut: 2000,
          preventDuplicates: true,
          positionClass: "toast-bottom-left",
          // Redirect
          onHidden: function () {
            fetchOrders();
          },
        });
      } else {
        toastr.error(deleteRes.message, "Failed", {
          timeOut: 2000,
          preventDuplicates: true,
          positionClass: "toast-bottom-left",
        });
      }
    }
  };

  deleteReq.open("DELETE", "api/products/delete.php", true);
  deleteReq.send(JSON.stringify({ id: id }));
}
