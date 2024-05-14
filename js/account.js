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

  $("#pfp-input").on("change", function () {
    const [file] = $(this).prop("files");

    if (file) {
      $("#pfp-preview").attr("src", URL.createObjectURL(file));
    }
  });

  //TODO: Fetch user data and display it
  //TODO: Save user data
});
