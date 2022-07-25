// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA8st-iDR_r-jpbUvZeul46VyHkZnwOIW0",
    authDomain: "lets-chat-683bc.firebaseapp.com",
    databaseURL: "https://lets-chat-683bc-default-rtdb.firebaseio.com",
    projectId: "lets-chat-683bc",
    storageBucket: "lets-chat-683bc.appspot.com",
    messagingSenderId: "997386186186",
    appId: "1:997386186186:web:63d10bffc748547548b333",
    measurementId: "G-B9JQGY15N6"
  };
  
  // Initialize Firebase
  

firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}
