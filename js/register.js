document.addEventListener("DOMContentLoaded", function () {
  const formRegister = document.querySelector(".needs-validation");
  formRegister.addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      event.stopPropagation();

      const email = document.querySelector("#email").value;
      const name = document.querySelector("#name").value;
      const password = document.querySelector("#pwd").value;
      const repeatPassword = document.querySelector("#repeat-pwd").value;
      const username = document.querySelector("#username").value;
      const familyName = document.querySelector("#familyName").value;
      const birthdate = document.querySelector("#birthdate").value;

      console.log("form sent:", {
        email,
        name,
        password,
        repeatPassword,
        username,
        familyName,
        birthdate,
      });

      const isValid = formRegister.checkValidity();
      formRegister.classList.add("was-validated");

      if (!isValid) {
        return;
      }

      if (password !== repeatPassword) {
        alert("Las contraseñas no coinciden.");
        console.log("passwords doesnt match");
        return;
      }

      const success = window.register(
        email,
        name,
        password,
        username,
        birthdate,
        familyName
      );
      if (success) {
        console.log("successfully register:", {
          email,
          name,
          password,
          username,
          birthdate,
        });
        formRegister.reset();
        formRegister.classList.remove("was-validated");
        window.location.href = "./index.html";
      } else {
        console.log("user or family already exists.");
      }
    },
    false
  );
});
