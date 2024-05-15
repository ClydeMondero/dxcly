$(document).ready(function (e) {
  logoutHandler();

  displayUserData();

  //TODO: display orders
  //TODO: randomize order status

  $("#pfp-input").on("change", function () {
    const [file] = $(this).prop("files");

    if (file) {
      $("#pfp-preview").attr("src", URL.createObjectURL(file));
    }
  });

  $("#update-btn").click(function () {
    const [file] = $("#pfp-input").prop("files");

    let updateData = JSON.stringify({
      name: $("#name").val(),
      username: $(".details #username").val(),
      email: $("#email").val(),
      contact: $("#contact").val(),
      address: $("#address").val(),
      method: $("#method").val(),
      location: file ? "assets/" + file.name : userData.profile_picture,
    });

    let updateReq = new XMLHttpRequest();

    updateReq.open("UPDATE", "api/users/update.php", true);
    updateReq.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let updateRes = JSON.parse(this.responseText);

        if (updateRes.success == "true") {
          toastr.success(updateRes.message, "Success", {
            timeOut: 2000,
            preventDuplicates: true,
            positionClass: "toast-bottom-left",
            onHidden: uploadPicture,
          });
        }
      }
    };
    updateReq.send(updateData);
  });
});

function uploadPicture() {
  let picture = $("#pfp-input").prop("files")[0];
  let pictureData = new FormData();
  pictureData.append("picture", picture);
  let uploadReq = new XMLHttpRequest();
  uploadReq.open("POST", "utils/upload_image.php", true);
  uploadReq.send(pictureData);
}

let userData;

function displayUserData() {
  let checkUserReq = new XMLHttpRequest();

  checkUserReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let userAuthData = JSON.parse(this.responseText);

      if (userAuthData.loggedIn == "true") {
        let fetchUserReq = new XMLHttpRequest();

        fetchUserReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            userData = JSON.parse(this.responseText);

            $("#name").attr("value", userData.full_name);
            $(".detail #username").attr("value", userData.username);
            $("#email").attr("value", userData.email);
            $("#contact").attr("value", userData.contact_number);
            $("#address").attr("value", userData.address);
            $("#method").val(userData.payment_method);

            $("#method").on("change", function () {
              updateMethodPreview($(this).val());
            });

            updateMethodPreview(userData.payment_method);

            $("#pfp-preview").attr("src", userData.profile_picture);
          }
        };

        fetchUserReq.open("POST", "api/users/fetch_id.php", true);
        fetchUserReq.send(JSON.stringify(userAuthData));
      }
    }
  };

  checkUserReq.open("GET", "utils/check_user.php", true);
  checkUserReq.send();
}

function updateMethodPreview(method) {
  $("#method-preview").show();

  if (method == "GCash") {
    $("#method-preview").attr("src", "assets/gcash.png");
  } else if (method == "Maya") {
    $("#method-preview").attr("src", "assets/maya.png");
  } else {
    $("#method-preview").hide();
  }
}

function logoutHandler() {
  $("#logout-button").click(() => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);

        if (data.success == "true") {
          window.location.href = "index.php";
        }
      }
    };
    xhr.open("DELETE", "api/auth/logout.php", true);
    xhr.send();
  });
}
