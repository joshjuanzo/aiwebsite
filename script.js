function onPageLoad() {
    console.log('Page loaded');
}
function onParagraphMouseOver() {
    console.log('Mouse over paragraph');
}

function onParagraphMouseOut() {
    console.log('Mouse out of paragraph');
}

function onImageMouseOver() {
    console.log('Mouse over image');
}

function onImageMouseOut() {
    console.log('Mouse out of image');
}
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

document.getElementById("signup-form").addEventListener("submit", function(event) {
  var zipInput = document.getElementById("zip").value;
  var phoneInput = document.getElementById("phone").value;
  var zipPattern = /^\d{5}(-\d{4})?$/;
  var phonePattern = /^\d{3}-\d{3}-\d{4}$/;

  if (!zipPattern.test(zipInput) || !phonePattern.test(phoneInput)) {
    alert("Please enter valid ZIP code and phone number.");
    event.preventDefault();

  var formData = {zipInput: zipInput, 
                  phoneInput: phoneInput
                 };

    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

    const firebaseConfig = {
      apiKey: "AIzaSyB4bQHGKOnq-IjW4r3ooYlnqD7j4Sie3rY",
      authDomain: "aiwebsite-1cdfa.firebaseapp.com",
      projectId: "aiwebsite-1cdfa",
      storageBucket: "aiwebsite-1cdfa.appspot.com",
      messagingSenderId: "434561316894",
      appId: "1:434561316894:web:f33f53f73c21777fd8960f"
    };

  const app = initializeApp(firebaseConfig);
  var formJSON = JSON.stringify(formData);
  console.log(formJSON);
  return formJSON;
  }
}
);