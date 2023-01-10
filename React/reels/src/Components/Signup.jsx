import React, {useState} from 'react';
import { auth } from "../firebase";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    async function signupHandler(){
        // alert(email + " " + password + " " + name)
        try{
            const userCreds = await auth.createUserWithEmailAndPassword(email, password);
            // alert("uid: ", userCreds.user, uid );
            //  console.log(userCreds.user.uid);
            // alert("user created");

        } catch(err) {
            alert(err.massage);
        }
    }
    return(
        <>
             <div> Signup Page</div>
             <input
             type="email"
             placeholder = "Enter Email"
             value = {email}
             onChange = {(e) => {
                setEmail(e.target.value);
             }}
             ></input>
             <br></br>
             <input
             type="password"
             placeholder = "Enter Password"
             value = {password}
             onChange = {(e) => {
                setPassword(e.target.value);
             }}
             ></input>
             <br></br>
             <input
             type="text"
             placeholder = "Full Name"
             value = {name}
             onChange = {(e) => {
                setName(e.target.value);
             }}
             ></input>
             <br></br>
             {/* <input type = "File"></input> */}
             <br></br>
             <button onClick = {signupHandler}>Signup</button>
        </>
    );
}

export default Signup;