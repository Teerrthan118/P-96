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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
});
}
getData();

function add_room() {
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}

function redirectToRoomName(room_name) {
      console.log(room_name);
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}