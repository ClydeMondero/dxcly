$(document).ready(function () {
  $("#logout-button").click(() => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        console.log(data);

        if (data.success == "true") {
          window.location.href = "index.php";
        }
      }
    };
    xhr.open("DELETE", "api/auth/logout.php", true);
    xhr.send();
  });
});
