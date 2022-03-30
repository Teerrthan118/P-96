const firebaseConfig = {
    apiKey: "AIzaSyCOgRK4m3NfZ3p56_urKKOwMNapGlYKSe8",
    authDomain: "project-81-f7e4f.firebaseapp.com",
    databaseURL: "https://project-81-f7e4f-default-rtdb.firebaseio.com",
    projectId: "project-81-f7e4f",
    storageBucket: "project-81-f7e4f.appspot.com",
    messagingSenderId: "456406452182",
    appId: "1:456406452182:web:fbe2b33f63fe06e7e80677",
    measurementId: "G-2VXWLYQP9K"
  };
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("Username");
room_name = localStorage.getItem("room_name")

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
           document.getElementById("output").innerHTML = ""; 
           snapshot.forEach(function(childSnapshot) { 
                 childKey  = childSnapshot.key; childData = childSnapshot.val();
                  if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value = "";
}