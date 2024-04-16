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
                                                        