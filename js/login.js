$(document).ready(function () {
  $("#login-button").click(() => {
    let email = $("#email").val();
    let password = $("#password").val();

    let data = JSON.stringify({
      email: email,
      password: password,
    });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        if (data.success) {
          window.location.href = "index.php";
        }
      }
    };
    xhr.open("POST", "api/auth/", true);
    xhr.send(data);
  });
});