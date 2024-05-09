$(document).ready(function () {
  //get url params
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const container = $(".products-collection");

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //display products
      $.each(JSON.parse(this.responseText), function (index, product) {
        let productElement = $("<div>").addClass("product");
        let productImage = $("<img>").attr("src", product.location);
        let productName = $("<h6>").text(product.name);
        let productPrice = $("<span>").text(product.price);

        productElement.append([productImage, productName, productPrice]);

        container.append(productElement);
      });
    }
  };

  if (!type) {
    //fetch all products
    xhr.open("GET", "api/products/fetch.php", true);
    xhr.send();

    $("#title").text("Techwear");
  } else {
    //fetch products by type
    let data = JSON.stringify({ type: type });

    xhr.open("POST", "api/products/fetch_type.php", true);
    xhr.send(data);

    $("#title").text(type);
  }
});
