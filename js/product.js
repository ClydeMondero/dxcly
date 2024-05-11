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
    let cartBtn = $("<button>").text("Add to cart");

    links.append([all, type]);

    subDetails.append([price, quantity]);

    details.append([links, name, subDetails, description, cartBtn]);

    container.append(image);
    container.append(details);
  }
});
