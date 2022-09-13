import {Link} from 'react-router-dom';

const ErrorComponent = ()=>{
    return(
        <>
            <p>Something went wrong</p>
            <Link to="/signIn">Try Again</Link>
        </>
    )
}

export default ErrorComponent;