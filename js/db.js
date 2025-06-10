var users;
var goals;
var families;

const Role = {
  FAMILY_HEAD: "familyHead",
  FAMILY_MEMBER: "familyMember",
};

document.addEventListener("DOMContentLoaded", function () {
  users =
    getUsers() && getUsers() !== "undefined" ? JSON.parse(getUsers()) : [];
  goals =
    getGoals() && getGoals() !== "undefined" ? JSON.parse(getGoals()) : [];
  families =
    getFamily() && getFamily() !== "undefined" ? JSON.parse(getFamily()) : [];

  console.log(users);
  console.log(goals);
  console.log(families);

  function register(email, name, password, username, birthdate, familyName) {
    console.log("trying to register user with:", {
      email,
      name,
      username,
      familyName,
      birthdate,
    });
    const found = users.find((user) => user.username === username);
    if (found) {
      alert("El usuario ya existe.");
      console.log("user already exists");
      return false;
    }

    const familyFound = families.find((family) => family.name === familyName);
    if (familyFound) {
      alert("La familia ya existe.");
      console.log("family already exists");
      return false;
    }

    const newUser = {
      email,
      name,
      password,
      username,
      birthdate,
      familyName,
      role: Role.FAMILY_HEAD,
    };
    users.push(newUser);
    saveUsers(users);
    families.push({ familyHead: newUser.name, name: familyName });
    saveFamily();
    alert("Usuario registrado exitosamente.");
    console.log("user successfully saved:", newUser);
    return true;
  }

  // try to login user and save user data on localStorage
  function login(username, password) {
    if (!username || !password) {
      alert("Por favor ingresa todos los campos");
      return false;
    }

    console.log("trying to log in user with:", { username, password });
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (!user) {
      alert("Usuario y/o contraseña incorrectos");
      return false;
    }
    console.log("successfully login:", user);
    loggedInUser(user);
    return true;
  }

  function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "./index.html";
  }
  // Exportar funciones
  window.register = register;
  window.login = login;
  window.logout = logout;
});
