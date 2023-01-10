import React, { useState } from 'react';
function Login(){
    const [email,setEmail]= useState("");
    const [password, setPassword]= useState("");
    function loginHandler(){
        alert(email + " "+ password);
    }
    return(
        <>
              <h1>Login</h1>
              <input type="text" placeholder = "email" value={email} onChange={(e)=> {setEmail(e.target.value)}}></input>
              <br></br>
              <input type="password" placeholder = "password" value={password} onChange={(e)=> {setPassword(e.target.value)}}></input>
              <button onClick={loginHandler}>Login</button>

        </>
    )
}
export default Login;