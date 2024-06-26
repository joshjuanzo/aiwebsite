const firebaseConfig = {
  apiKey: "AIzaSyB4bQHGKOnq-IjW4r3ooYlnqD7j4Sie3rY",
  authDomain: "aiwebsite-1cdfa.firebaseapp.com",
  projectId: "aiwebsite-1cdfa",
  storageBucket: "aiwebsite-1cdfa.appspot.com",
  messagingSenderId: "434561316894",
  appId: "1:434561316894:web:f33f53f73c21777fd8960f"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
console.log("Firebase setup complete!");


function submitForm() {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;
  const zip = document.getElementById('zip').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  db.collection("users").doc(name).set({
    name: name,
    address: address,
    city: city,
    state: state,
    zip: zip,
    email: email,
    phone: phone
  })
  .then(function() {
    console.log("Document successfully written with ID: ", name);
    alert("Form submitted successfully!");

    document.getElementById('name').value = '';
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('zip').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
  })
  .catch(function(error) {
    console.error("Error writing document: ", error);
    alert("Error submitting form. Please try again later.");
  });
}


function onPageLoad() {
}

function onParagraphMouseOver() {

}


function onParagraphMouseOut() {
 
}


function onImageMouseOver() {

}


function onImageMouseOut() {

}

function onLinkClick(linkName) {

  console.log("Link clicked:", linkName);
}
function search() {

  var searchTerm = document.getElementById("search-bar").value;


  var formattedSearchTerm = searchTerm.replace(/\s+/g, '-').toLowerCase();

 
  window.location.href = formattedSearchTerm + ".html"; 

}
function openAbout() {
    document.getElementById("aboutModal").style.display = "block";
}

function closeAbout() {
    document.getElementById("aboutModal").style.display = "none";
}

function openContact() {
    document.getElementById("contactModal").style.display = "block";
}

function closeContact() {
    document.getElementById("contactModal").style.display = "none";
}