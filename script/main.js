document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Retrieve username and password
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Perform your login validation here (e.g., check against database)

      // For demonstration purposes, let's just show an alert
      alert("Login Berhasil Sebagai " + username);
    });
});
