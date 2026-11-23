document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("user-name");
  const userName = sessionStorage.getItem("userName");

  if (nameElement && userName) {
    nameElement.textContent = userName;
  }
});
