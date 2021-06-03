
// var firebase = require('firebase');
// var firebaseui = require('firebaseui');

(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyAFHLNtdAy4uUbqgBV83M0Q8ejPZCx59xE",
        authDomain: "talent-agency-65095.firebaseapp.com",
        projectId: "talent-agency-65095",
        storageBucket: "talent-agency-65095.appspot.com",
        messagingSenderId: "961070160730",
        appId: "1:961070160730:web:c982dd07f84adde2b43163",
        measurementId: "G-1P8H2SFYSC"
      };
      firebase.initializeApp(firebaseconfig);

      function signinFormHandler(event) {
        event.preventDefault();
    
        const email = document.querySelector('#signin-email').value.trim();
        const password = document.querySelector('#signin-password').value.trim();
        console.log( email, password);
        if (email && password) {
    
            //sign up user
            firebase.auth().signInWithEmailAndPassword(email, password)
    
            .then((userCredential) => {
            // Signed in 
            //var user = userCredential.user;
            const response = {
                method: 'POST',
                body: JSON.stringify ({
                    email,
                    password
                })
            }
            if (response.ok) {
                if (role_id === 1) {
                    document.location.replace('/talent')
                }
                if (role_id === 2) {
                    document.location.replace('/agent')
            }
            }
            })
            .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
            res.status(errorCode).json(errorMessage);
            });
        }
    }

    document.querySelector('#signin-form').addEventListener('submit', signinFormHandler);
})()

