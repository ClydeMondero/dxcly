$(document).ready(function () {
  $("#login-button").click(() => {
    if (!$(".login")[0].checkValidity()) {
      $(".login")[0].reportValidity();
      return;
    }

    let email = $("#email").val();
    let password = $("#password").val();

    let loginData = JSON.stringify({
      email: email,
      password: password,
    });

    var loginReq = new XMLHttpRequest();
    loginReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let loginRes = JSON.parse(this.responseText);
        if (loginRes.success == "true") {
          toastr.success(loginRes.message, "Success", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
            // Redirect
            onHidden: function () {
              window.location.href = "index.php";
            },
          });
        } else {
          toastr.error(loginRes.message, "Failed", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
          });
        }
      }
    };
    loginReq.open("POST", "api/auth/login.php", true);
    loginReq.send(loginData);
  });
});
