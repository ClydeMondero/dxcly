function fetchUsers() {
  $.ajax({
    url: "http://localhost/dxcly/api",
    method: "GET",
    dataType: "json",
    success: function (users) {
      console.log(users);
    },
    error: function (xhr, status, error) {
      console.error("Error:", xhr.status);
    },
  });
}

function addUser(username, password, account_type) {
  $.ajax({
    url: "http://localhost/dxcly/api",
    type: "POST",
    contentType: "application/json",
    data: JSON.stringify({
      username: username,
      password: password,
      account_type: account_type,
    }),
    success: function (response) {
      alert(response.message);
    },
  });
}

function updateUser(id, username, password, account_type) {
  $.ajax({
    url: "http://localhost/dxcly/api",
    type: "PATCH",
    contentType: "application/json",
    data: JSON.stringify({
      id: id,
      username: username,
      password: password,
      account_type: account_type,
    }),
    success: function (response) {
      alert(response.message);
    },
  });
}

function deleteUser(id) {
  $.ajax({
    url: "http://localhost/dxcly/api",
    type: "DELETE",
    contentType: "application/json",
    data: JSON.stringify({
      id: id,
    }),
    success: function (response) {
      alert(response.message);
    },
  });
}
