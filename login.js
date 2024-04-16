document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        
        if (username === "user" && password === "password") {
            alert("Login successful!");
            
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
