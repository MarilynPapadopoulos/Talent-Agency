

function signupFormHandler(event) {
    event.preventDefault();
    console.log('click');

    const email = document.querySelector('#signup-email').value.trim();
    const password = document.querySelector('#signup-password').value.trim();

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
  document.querySelector('#signup-form').addEventListener('submit', signinFormHandler);
  document.querySelector('#logout').addEventListener('click', logoutFormHandler);