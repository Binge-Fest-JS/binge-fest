import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from 'react-router-dom';
import {useState} from 'react';
const SignUp= ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // Set state for email

    const handleEmailChange=(e)=>{
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePasswordChange=(e)=>{
        e.preventDefault();
        setPassword(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user is", userCredential.user);   // ...
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
             // ..
        });
        console.log('submit worked')
    }
  return (
      <>
      <h2>Sign Up</h2>
      <ul>
          <li>
              <Link to = '/'>Home</Link>
          </li>
      </ul>

      <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input onChange ={handleEmailChange} type="email" id="email" placeholder="eg. xxxx@gmail.com" value={email}/>
          <label for="email"></label>
          <input onChange = {handlePasswordChange} type="password" id="password" value={password}/>
          <Link to = '/signIn'><button>Sign Up</button></Link>
          
      </form>
      </>
  )
}
  export default SignUp;


