$(document).ready(function () {
  let lastScrollTop = 0;
  let header = $(".header");

  $(window).scroll(function (event) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // Scroll down
      header.css("height", "10vh"); // Set the minimized height
      header.css("justify-content", "center");
    } else {
      // Scroll up
      header.css("height", "18vh"); // Set the original height
      header.css("justify-content", "end");
    }
    lastScrollTop = st;
  });
});

$.ajax({
  url: "products.xml",
  dataType: "xml",
  success: function (xmlDoc) {
    $.ajax({
      url: "products.xsl",
      dataType: "xml",
      success: async function (xslDoc) {
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);
        let resultDoc = xsltProcessor.transformToFragment(xmlDoc, document);
        await $(".essentials-products").append(resultDoc);

        $(".product img").hover(
          (event) => {
            let src = $(event.target).attr("src");

            src = src.substring(7); //trims the images/
            src = src.substring(0, src.indexOf(".")); //trims .jpg

            $(event.target).attr("src", "images/" + src + "-focused.jpg");
          },
          (event) => {
            let src = $(event.target).attr("src");
            src = src.substring(7); //trims the images/
            src = src.substring(0, src.indexOf("-")); //trims .jpg
            console.log(src);

            $(event.target).attr("src", "images/" + src + ".jpg");
          }
        );
      },
    });
  },
});
