function fetchUsers() {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        let users = JSON.parse(xhr.responseText);
        console.log(users);
      } else {
        console.error("Error:", xhr.status);
      }
    }
  };
  xhr.open("GET", "http://localhost/techwear-website/api", true);
  xhr.send();
}
