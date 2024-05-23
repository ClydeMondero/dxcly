$(document).ready(function () {
  $(".dashboard-container").hide();

  fetchLogs();
});

let logs = [];

function fetchLogs() {
  let logsReq = new XMLHttpRequest();
  logsReq.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      logs = JSON.parse(this.responseText);

      displayLogs();
    }
  };

  logsReq.open("GET", "api/logs/fetch.php", true);
  logsReq.send();
}

function displayLogs() {
  $("#logs-body").empty();

  let searchVal = $("#search").val().toLowerCase();

  let filterTerm = $("#filter").val();

  let date = $("#date").val();
  const selectedDate = new Date(date);

  logs.forEach((log) => {
    const logDate = new Date(log.log_date);

    if (log.user_name.toLowerCase().includes(searchVal) || !searchVal) {
      if (filterTerm == log.action || !filterTerm) {
        if (
          (logDate.getMonth() === selectedDate.getMonth() &&
            logDate.getFullYear() === selectedDate.getFullYear()) ||
          !date
        ) {
          let logsTableRow = $("<tr></tr>");
          logsTableRow.append($("<td></td>").text(log.id));
          logsTableRow.append($("<td></td>").text(log.user_id));
          logsTableRow.append($("<td></td>").text(log.user_name));
          logsTableRow.append($("<td></td>").text(log.action));
          logsTableRow.append($("<td></td>").text(log.log_date));

          $("#logs-body").append(logsTableRow);
        }
      }
    }
  });
}
