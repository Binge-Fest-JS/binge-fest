import {Link} from 'react-router-dom';

const ErrorComponent = ()=>{
    return(
        <>
            <p>Something went wrong</p>
            <Link to="/">Try Again</Link>
        </>
    )
}

export default ErrorComponent;