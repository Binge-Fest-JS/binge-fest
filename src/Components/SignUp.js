import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

const SignUp= ()=>{
    let navigate=useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    // Set state for email and password
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
        console.log('create user event', e);
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user is", userCredential.user);   // ...
            navigate('/signIn', { replace: true });
            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            switch (error.code) {
                case 'auth/email-already-in-use':
                  alert(`Email address ${email} already in use.`);
                  break;
            } 
        });
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
        <label htmlFor="email"></label>
        <input onChange = {handlePasswordChange} type="password" id="password" value={password}/>
        <button>Sign Up</button>
     </form>
      </>
  )
}
  export default SignUp;


