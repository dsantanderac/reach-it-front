function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function getUsers() {
  return localStorage.getItem("users");
}

function saveGoals(goals) {
  localStorage.setItem("goals", JSON.stringify(goals));
}

function getGoals() {
  return localStorage.getItem("goals");
}

function saveFamily(family) {
  localStorage.setItem("family", JSON.stringify(family));
}

function getFamily() {
  return localStorage.getItem("family");
}

function addFamilyMembers(familyMembers) {
  localStorage.setItem("familyMembers", JSON.stringify(familyMembers));
}

function loggedInUser(user) {
  localStorage.setItem("loggedInUser", JSON.stringify(user));
}

function getFamilyMembers(family) {
  const all = JSON.parse(localStorage.getItem("familyMembers")) || [];
  if (!all) return [];
  const filteredFamily = all.filter((member) => {
    member.family == family;
  });

  return filteredFamily || [];
}
