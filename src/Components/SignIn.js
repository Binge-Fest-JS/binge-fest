import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, getAdditionalUserInfo  } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import Header from "./Header";
import { Link, Routes, Route, useNavigate} from "react-router-dom";
import HomePage from "./HomePage.js";
import ErrorComponent from "./ErrorComponent";



const  SignIn = (props)=>{
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [currentUser,setCurrentUser] = useState('');
  const [error,setError]=useState("")
  let navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = currentUser.uid;
        console.log(uid, 'uid log');
        
        // ...
      } else {
        // User is signed out
        // ...
      
      }
    });
  },[currentUser])


     const handleEmailChange=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        e.preventDefault();
        setPassword(e.target.value);
    }

const handleSubmit = (e) => {
 
  e.preventDefault();
  const auth = getAuth();

  signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      // Signed in
     
      const user = userCredential.user;
      setCurrentUser(user)

      props.userSignIn(user);
      console.log(user, 'user');
      // ...
      navigate('/homepage', { replace: true });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(error.message)
      
      // switch (error.code){
      // case 'auth/invalid-email':
      //     alert(`Email address ${email} is invalid.`);
      //     break;
      
      // }
    });
}

  return (
    <>
      <h2>Sign In</h2>
      <Link to = '/'>Home</Link>
      {error && <ErrorComponent></ErrorComponent>
       
      }
    
  
    {
      
      !error && (
    
      <form onSubmit={handleSubmit}>
        <label htmlFor="email"></label>
        <input onChange={handleEmailChange} type="email" id="currentEmail" placeholder="Email"/>
        <label for="email"></label>
        <input onChange = {handlePasswordChange} type="password" id="currentPassword" placeholder="Password" value={password}/>
       <button>SignIn</button>
      </form>
      )}
    </>
  );
}
  export default SignIn;
