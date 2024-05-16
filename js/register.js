$(document).ready(function () {
  $("#register-button").click(() => {
    let name = $("#name").val();
    let username = $("#user-name").val();
    let contact = $("#contact").val();
    let address = $("#address").val();
    let email = $("#email").val();
    let password = $("#password").val();
    let confirmPassword = $("#confirm-password").val();

    let registerData = JSON.stringify({
      name: name,
      username: username,
      contact: contact,
      address: address,
      email: email,
      password: password,
    });

    let registerReq = new XMLHttpRequest();

    registerReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let registerRes = JSON.parse(this.responseText);

        if (registerRes.success == true) {
          toastr.success(registerRes.message, "Success", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
            // Redirect
            onHidden: function () {
              window.location.href = "login.php";
            },
          });
        } else {
          toastr.error(registerRes.message, "Failed", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
          });
        }
      }
    };

    registerReq.open("POST", "api/auth/register.php", true);
    registerReq.send(registerData);
  });
});
