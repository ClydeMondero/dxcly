$(document).ready(function () {
  $("#logout-button").click(() => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        if (data.success) {
          window.location.href = "index.php";
        }
      }
    };
    xhr.open("DELETE", "api/auth/", true);
    xhr.send();
  });
});
