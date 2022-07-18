import React from 'react';
import { useState, useContext, } from 'react';
import {useHistory} from 'react-router-dom'

import Logo from '../../olx-logo.png';
import './Signup.css';

import { FirebaseContext } from '../../storage/firabaseContext';


export default function Signup() {


//states
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');

//destructures
const {firebase} = useContext(FirebaseContext)

//navigate
const history = useHistory();


//functions
const handleSignUpSubmit= (obj)=>{

  obj.preventDefault(); //prevents removing datas

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var client = userCredential.user;
    client.updateProfile({displayName : username}).then(()=>{

      firebase.firestore().collection('clients').add({
        id: client.uid,
        name: username,
        number: phone

      }).then(history.push('/login'))

    })
   
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });




}


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSignUpSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange={(e)=>setUsername( e.target.value )}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
           
            value={email}
            onChange={(e)=>setEmail( e.target.value )}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={phone}
            onChange={(e)=>setPhone( e.target.value )}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e)=>setPassword( e.target.value )}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
