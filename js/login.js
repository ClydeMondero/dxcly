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

        if (data.success == "true") {
          toastr.success(data.message, "Success", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
            // Redirect
            onHidden: function () {
              window.location.href = "index.php";
            },
          });
        } else {
          toastr.error(data.message, "Failed", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
          });
        }
      }
    };
    xhr.open("POST", "api/auth/login.php", true);
    xhr.send(data);
  });
});
