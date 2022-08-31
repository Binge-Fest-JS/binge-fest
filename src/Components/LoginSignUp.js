import {Link, Route, Routes} from 'react-router-dom';


const LoginSignUp = ()=>{
    return (
        <>
       
        <nav>
            <ul>
                <li>
                <Link to = '/signUp'>Sign up</Link>

                </li>

                <li>
                <Link to = '/signIn'>Sign In</Link>
                </li>

               
            </ul>
        </nav>
        </>
    )
}

export default LoginSignUp;
