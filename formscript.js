document.getElementById("signup-form").addEventListener("submit", function(event) {
  var zipInput = document.getElementById("zip");
  var phoneInput = document.getElementById("phone");
  var zipPattern = /^\d{5}(-\d{4})?$/;
  var phonePattern = /^\d{3}-\d{3}-\d{4}$/;

  if (!zipPattern.test(zipInput.value) || !phonePattern.test(phoneInput.value)) {
    alert("Please enter valid ZIP code and phone number.");
    event.preventDefault();
  }
}