const firebaseConfig = {
    apiKey: "AIzaSyBxewMOWLZyB27dpVQfMnSosAIJCV92eBw",
    authDomain: "letschat-ead12.firebaseapp.com",
    databaseURL: "https://letschat-ead12-default-rtdb.firebaseio.com",
    projectId: "letschat-ead12",
    storageBucket: "letschat-ead12.appspot.com",
    messagingSenderId: "97630869579",
    appId: "1:97630869579:web:e836465f19c9fa818715ce"
    };
    
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

function addRoom()
{
  room_name=document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);

  window.location="kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"; 
document.getElementById("output").innerHTML+=row;
     //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}