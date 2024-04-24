$.ajax({
  url: "products.xml",
  dataType: "xml",
  success: function (xmlDoc) {
    $.ajax({
      url: "products.xsl",
      dataType: "xml",
      success: function (xslDoc) {
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);
        let resultDoc = xsltProcessor.transformToFragment(xmlDoc, document);
        $(".essentials-products").append(resultDoc);
      },
    });
  },
});
