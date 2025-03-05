const login = document.getElementById("login-form");

login.addEventListener("submit", (e)=>{
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const user = JSON.parse(localStorage.getItem("user"));
    if(user && user.email === email && user.password === password){
        window.location.href = "../HTML/books.html";
        fetchBooks();
    }
    else{
        alert("Invalid login credentials");
    }
});

console.log(JSON.parse(localStorage.getItem("user"))); // Debugging: See if user exists in localStorage