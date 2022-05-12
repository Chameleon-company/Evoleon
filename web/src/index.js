firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("message").innerHTML = "Welcome, " + user.email;
   } else {
      document.getElementById("message").innerHTML = "No user signed in.";
    }
  });

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    document.getElementById("message").innerHTML = error.message;
  });
function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    window.alert(userEmail +""+ userPass);
}