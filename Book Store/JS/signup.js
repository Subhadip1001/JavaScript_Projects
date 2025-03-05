const signup = document.getElementById("signup-form")
const user = JSON.parse(localStorage.getItem("user"));
const login = document.getElementById("login-form");

signup.addEventListener("submit",(e)=> {
  e.preventDefault();
  const username = document.getElementById("signup-username").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  localStorage.setItem("user", JSON.stringify({ username, email, password }));
  alert("Your account has been created");
  document.getElementById("signup-username").value = "";
  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";
  window.location.href = "../HTML/books.html";
  fetchBooks();
});
console.log(user); // Debugging: See if user exists in localStorage






