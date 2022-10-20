import React, { useState } from "react";
import UserLogin from "./pages/UserLogin";

function Apps() {

const adminUser1 = {
  username: "user1",
  password: "1234"
}

const adminUser2 = {
  username: "user2",
  password: "1234"
}

const adminUser3 = {
  username: "user3",
  password: "1234"
}

const adminUser4 = {
  username: "user4",
  password: "1234"
}

const adminUser5 = {
  username: "user5",
  password: "1234"
}



const [user,setUser] = useState({username:"",password:""});
const [error, seterror] = useState("");

const Login = details => {
console.log(details);

if (details.username == adminUser1.username && details.password == adminUser1.password) {
  console.log("logged in");
  setUser({
   username: details.username,
   password: details.password
  })  
} else if  (details.username == adminUser2.username && details.password == adminUser2.password) {
  console.log("logged in");
} else if  (details.username == adminUser3.username && details.password == adminUser3.password) {
  console.log("logged in");
} else if  (details.username == adminUser4.username && details.password == adminUser4.password) {
  console.log("logged in");
} else if  (details.username == adminUser5.username && details.password == adminUser5.password) {
  console.log("logged in");
}
else {
  console.log("details do not match!");
  seterror("details do not match!");
}
}
const logout = () => {

setUser ({username:"",password:""});

}



  return (
    <div className="App">
    {(user.username !="") ? (
      <div className="welcome">
        <h2>welcome, <span>{user.username}</span></h2>
        <button onClick={logout}>logout</button>
      </div>
     ): (
      <UserLogin Login={Login} error={error}/>
      )
     }
    </div>
  );
}

export default Apps;

