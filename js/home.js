$(document).ready(function () {
  let lastScrollTop = 0;
  let header = $(".header");
  let audio = $(".background-music");

  audio[0].volume = 0.2;

  $(window).scroll(function (event) {
    let st = $(this).scrollTop();
    if (st > lastScrollTop) {
      // Scroll down
      header.css("height", "10vh"); // Set the minimized height
      header.css("justify-content", "center");

      audio[0].play();
    } else {
      // Scroll up
      header.css("height", "18vh"); // Set the original height
      header.css("justify-content", "end");

      audio[0].pause();
    }
    lastScrollTop = st;
  });
});

function isInView(elem) {
  return $(elem).offset().top - $(window).scrollTop() < $(elem).height();
}

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

            $(event.target).attr("src", "images/" + src + ".jpg");
          }
        );
      },
    });
  },
});
