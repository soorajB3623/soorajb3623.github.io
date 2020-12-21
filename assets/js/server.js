 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC9Xo9w6YZJ5Ao8YW4AEb_-bUyU61gftT4",
    authDomain: "portfolio-1a1f9.firebaseapp.com",
    projectId: "portfolio-1a1f9",
    storageBucket: "portfolio-1a1f9.appspot.com",
    messagingSenderId: "750106801151",
    appId: "1:750106801151:web:69a8ab7a61088acc61edca",
    measurementId: "G-FHTYQ86TXL"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //create firebase database reference
var dbRef = firebase.database();
var contactsRef = dbRef.ref('contact');


//save contact
document.querySelector('.submit-button')
  .addEventListener("click", function( event ) {  
    event.preventDefault();
    if( document.querySelector('#name').value != '' 
          || document.querySelector('#email').value != '' ){
      contactsRef.push({
        name: document.querySelector('#name').value,
        email: document.querySelector('#email').value,
        message:document.querySelector('#message').value
      });
      alert('Will catch you')
      contactForm.reset();
    } else {
      alert('Please fill atleast name or email!');
    }
  }, false);

