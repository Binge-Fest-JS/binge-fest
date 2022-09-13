import {useNavigate} from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";


const HomePage = (props) =>{
    let navigate = useNavigate();

    const handleClick = () =>{
        const auth = getAuth();
            signOut(auth).then(() => {
            // Sign-out successful.
            alert('signed out');
            navigate('/signIn', { replace: true });
            }).catch((error) => {
            // An error happened.
        });
    }   

    return (
        <>
       <h2>Welcome {props.currentUser.email}</h2>
       <button onClick={handleClick}>Sign Out</button>
        </>
    )
}

export default HomePage;

