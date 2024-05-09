$(document).ready(function () {
  //get url params
  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  const container = $(".products-collection");
  let products;

  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //display products

      products = JSON.parse(this.responseText);

      displayProducts();
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

  $(".sort").on("change", function () {
    switch (this.value) {
      case "Ascending":
        products.sort((a, b) => a.price - b.price);
        break;
      case "Descending":
        products.sort((a, b) => b.price - a.price);
    }

    displayProducts();
  });

  $(".search").on("keyup", function () {
    displayProducts();
  });

  function displayProducts() {
    //reset container
    container.empty();

    //set number of results
    let results = 0;

    //get search term
    let searchTerm;
    if ($(".search").val()) {
      searchTerm = $(".search").val();
      searchTerm = searchTerm.toString().toLowerCase();
    }

    $.each(products, function (index, product) {
      let productName = product.name.toLowerCase();

      if (productName.includes(searchTerm) || !searchTerm) {
        let productElement = $("<div>").addClass("product");
        let productImageElement = $("<img>").attr("src", product.location);
        let productNameElement = $("<h6>").text(product.name);
        let productPriceElement = $("<span>").text(product.price);

        productElement.append([
          productImageElement,
          productNameElement,
          productPriceElement,
        ]);

        container.append(productElement);
        results++;
      }
    });

    $(".number-of-products").text(results + " Results");
  }
});
