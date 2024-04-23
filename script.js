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
  var formJSON = JSON.stringify(formData);
  console.log(formJSON);
  return formJSON;
  }
}
);