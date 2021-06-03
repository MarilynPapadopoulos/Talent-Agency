
import firebase from "firebase/app";
import "firebase/auth";
var firebase = require('firebase');
//var firebaseui = require('firebaseui');

(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyAFHLNtdAy4uUbqgBV83M0Q8ejPZCx59xE",
        authDomain: "talent-agency-65095.firebaseapp.com",
        projectId: "talent-agency-65095",
        storageBucket: "talent-agency-65095.appspot.com",
        messagingSenderId: "961070160730",
        appId: "1:961070160730:web:c982dd07f84adde2b43163",
        measurementId: "G-1P8H2SFYSC"
      };
      firebase.initializeApp(firebaseConfig);

      app_fireBase = fireBase;


    }());


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });

function signupFormHandler(event) {
    event.preventDefault();
    console.log('click');

    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();
    const role_id =document.querySelector('.check').value;

    console.log( email, password);

    if (email && password) {

        //sign up user
        firebase.auth().createUserWithEmailAndPassword(email, password)

        .then((userCredential) => {
        // Signed in 
        //var user = userCredential.user;
        const response = {
            method: 'POST',
            body: JSON.stringify ({
                firstname,
                lastname,
                email,
                password,
                role_id
            })
        }
            if (response.ok) {
                if (role_id === 1) {
                    document.location.replace('/talent-signup')
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
function logoutFormHandler(event) {
    event.preventDefault(event);
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        res.status(errorCode).json(errorMessage)
      });
}


  document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);
  document.querySelector('#signin-form').addEventListener('submit', signinFormHandler);
  document.querySelector('#logout').addEventListener('click', logoutFormHandler);