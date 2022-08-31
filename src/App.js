import LoginSignUp from './Components/LoginSignUp.js';
import SignIn from './Components/SignIn.js';
import SignUp from './Components/SignUp.js';
import firebase from "./firebase.js";
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
     
   
      <Routes>
      <Route path = '/' element = {<LoginSignUp/>}/>
       <Route path = '/signUp' element = {<SignUp/>}/>
       <Route path = '/signIn' element = {<SignIn/>}/>
     </Routes>
    
    </>






  );
}

export default App;

