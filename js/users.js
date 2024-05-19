$(document).ready(function () {
  $(".dashboard-container").hide();

  fetchOrders();
});

function fetchOrders() {
  let usersReq = new XMLHttpRequest();
  usersReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let users = JSON.parse(this.responseText);

      displayOrders(users);

      $("#search").keyup(function () {
        let searchVal = $(this).val().toLowerCase();

        let filteredUsers = users.filter((user) => {
          return (
            user.username.toLowerCase().includes(searchVal) ||
            user.full_name.toLowerCase().includes(searchVal) ||
            user.contact_number.toLowerCase().includes(searchVal) ||
            user.email.toLowerCase().includes(searchVal)
          );
        });
        displayOrders(filteredUsers);
      });
    }
  };

  usersReq.open("GET", "api/users/fetch.php", true);
  usersReq.send();
}

function displayOrders(users) {
  $("#users-body").empty();

  users.forEach((user) => {
    let userTableRow = $("<tr></tr>");
    userTableRow.append($("<td></td>").text(user.id));
    userTableRow.append($("<td></td>").text(user.full_name));
    userTableRow.append($("<td></td>").text(user.username));
    userTableRow.append($("<td></td>").text(user.email));
    userTableRow.append($("<td></td>").text(user.address));
    userTableRow.append($("<td></td>").text(user.contact_number));
    userTableRow.append($("<td></td>").text(user.payment_method));
    $("#users-body").append(userTableRow);
  });
}
