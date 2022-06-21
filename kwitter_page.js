var firebaseConfig = {
          apiKey: "AIzaSyBEa9aaLy2-ARqVRSsMGWzUvjurnuma6lc",
          authDomain: "kwitter-6dd29.firebaseapp.com",
          databaseURL: "https://kwitter-6dd29-default-rtdb.firebaseio.com",
          projectId: "kwitter-6dd29",
          storageBucket: "kwitter-6dd29.appspot.com",
          messagingSenderId: "449113452603",
          appId: "1:449113452603:web:3716e994f44b1184beac1e"
        };
        firebase.initializeApp(firebaseConfig);
        function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location = "index.html";}
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
          function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                    name:user_name,
                    like:0,
message: msg
          });
          document.getElementById("msg").value="";
}
