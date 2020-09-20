import React, { useState } from 'react';
import axios from 'axios';



function App() {
  const[userName,setUserName]=useState("");
  const [lastName,setlastName]=useState("");
  const[eMail,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const usernameChange=(e)=>{
    setUserName(e.target.value);
  }
  const lastNameChange=(e)=>{
    setlastName(e.target.value);
  }
  const emailChange=(e)=>{
    setEmail(e.target.value);
  }
  const PasswordChange=(e)=>{
    setPassword(e.target.value);
  }
  
  const click=()=>{
    var user={
      userName:userName,
      lastName:lastName,
      email:eMail,
      password:password
    }
    axios.post("http://localhost:8080/user/register",user).then(res=>{
      console.log(res)
    })
  }
  return (
    <div className="App">
      <div className="ui form">
        <div className="inline field">
          <input onChange={(e)=>usernameChange(e)} type="text" placeholder="İsim" /> <br></br> 
          <input onChange={(e)=>lastNameChange(e)} type="text" placeholder="Soyisim" /><br></br> 
          <input onChange={(e)=>emailChange(e)}    type="email" placeholder="Email" /><br></br> 
          <input onChange={(e)=>PasswordChange(e)} type="password" placeholder="Password" /><br></br> 
          <div className="ui submit button" onClick={()=>click()} >Kayıt ol</div>
        </div>
      </div>
    </div>
  );
}

export default App;
