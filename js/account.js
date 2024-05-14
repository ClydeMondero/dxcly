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

  displayUserData();

  $("#pfp-input").on("change", function () {
    const [file] = $(this).prop("files");

    if (file) {
      $("#pfp-preview").attr("src", URL.createObjectURL(file));
    }
  });
});

function displayUserData() {
  let checkUserReq = new XMLHttpRequest();

  checkUserReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let userAuthData = JSON.parse(this.responseText);

      if (userAuthData.loggedIn == "true") {
        let fetchUserReq = new XMLHttpRequest();

        fetchUserReq.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            let userData = JSON.parse(this.responseText);

            $("#name").attr("value", userData.full_name);
            $(".detail #username").attr("value", userData.username);
            $("#email").attr("value", userData.email);
            $("#contact").attr("value", userData.contact_number);
            $("#address").attr("value", userData.address);
            $("#method").val(userData.payment_method);
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
