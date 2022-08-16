//YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyDRIyLReoJYsZ3sxqR1k5XgBcGF3Mmv3vw",
    authDomain: "lets-chat-6bf87.firebaseapp.com",
    databaseURL: "https://lets-chat-6bf87-default-rtdb.firebaseio.com",
    projectId: "lets-chat-6bf87",
    storageBucket: "lets-chat-6bf87.appspot.com",
    messagingSenderId: "63947223391",
    appId: "1:63947223391:web:18d20e8fb31e012a6086ea",
    measurementId: "G-3TKKL9VQDV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code

                //End code
            }
        });
    });
}
getData();
function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
