let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let xmlDoc = this.responseXML;

    let xslhttp = new XMLHttpRequest();
    xslhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let xslDoc = this.responseXML;

        //Apply XSLT transformation
        let xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(xslDoc);

        let resultDoc = xsltProcessor.transformToFragment(xmlDoc, document);

        document.querySelector(".essentials-products").appendChild(resultDoc);
      }
    };

    xslhttp.open("GET", "products.xsl", true);
    xslhttp.send();
  }
};

xmlhttp.open("GET", "products.xml", true);
xmlhttp.send();
