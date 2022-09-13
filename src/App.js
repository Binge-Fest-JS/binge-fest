import LoginSignUp from './Components/LoginSignUp.js';
import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';
import HomePage from './Components/HomePage.js';
import firebase from "./firebase.js";
import {Routes, Route} from 'react-router-dom';
import './App.css';
import {useState} from 'react';

function App() {
  const [user,setUser]=useState({})

  const getUser=(user)=>{
    setUser(user);
  }
  return (
    <>
     
   
      <Routes>
      <Route path = '/' element = {<LoginSignUp/>}/>
       <Route path = '/signUp' element = {<SignUp/>}/>
       <Route path = '/signIn' element = {<SignIn userSignIn={getUser}/>}/>
       <Route path = '/homepage' element = {<HomePage currentUser={user}/>}/>
     </Routes>
    
    </>






  );
}

export default App;

