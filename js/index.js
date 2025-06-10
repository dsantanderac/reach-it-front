document.addEventListener("DOMContentLoaded", function () {
  const formLogin = document.querySelector(".login-form form");
  formLogin.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      const username = document.querySelector("#username").value;
      const password = document.querySelector("#pwd").value;

      console.log("login form:", { username, password });

      const success = window.login(username, password);
      if (success) {
        console.log("login successfully:", { username });
        formLogin.reset();
        window.location.href = "./dashboard.html";
      } else {
        console.log("login error.");
      }
    },
    false
  );

  document
    .getElementById("togglePassword")
    .addEventListener("click", function () {
      const passwordInput = document.getElementById("pwd");
      const icon = this.querySelector("i");

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("bi-eye");
        icon.classList.add("bi-eye-slash");
      } else {
        passwordInput.type = "password";
        icon.classList.remove("bi-eye-slash");
        icon.classList.add("bi-eye");
      }
    });
});
