$(document).ready(function () {
  $("#password").on("input", function () {
    if ($("#password").val() == "") {
      $("#password-match").text("").css();
      $("#register-button").prop("disabled", true).addClass("no-hover");
    }

    if ($("#password").val() == $("#confirm-password").val()) {
      $(".input-password").css("justify-content", "space-between");
      $("#password-match").text("Password match").css("color", "green");

      $("#register-button").prop("disabled", false).removeClass("no-hover");
    } else {
      $(".input-password").css("justify-content", "space-between");
      $("#password-match").text("Password does not match").css("color", "red");
      $("#register-button").prop("disabled", true).addClass("no-hover");
    }
  });

  $("#confirm-password").on("input", function () {
    if ($("#confirm-password").val() == "") {
      $("#password-match").text("").css();
      $("#register-button").prop("disabled", true).addClass("no-hover");
    }

    if ($("#password").val() == $("#confirm-password").val()) {
      $(".input-password").css("justify-content", "space-between");
      $("#password-match").text("Password match").css("color", "green");

      $("#register-button").prop("disabled", false).removeClass("no-hover");
    } else {
      $(".input-password").css("justify-content", "space-between");
      $("#password-match").text("Password does not match").css("color", "red");
      $("#register-button").prop("disabled", true).addClass("no-hover");
    }
  });

  $("#register-button").click(() => {
    if (!$(".register")[0].checkValidity()) {
      $(".register")[0].reportValidity();
      return;
    }

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
          toastr.warning(registerRes.message, "Warning", {
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
