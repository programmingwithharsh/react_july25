import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate(); // useNavigate Hook we use for navigation 

    const goBack = () => { // Arrow function 
        navigate("/"); // redirect to home page
    }

    return (<div className="m-4">
        <div>This content isn't available at the moment</div>
        <button onClick={goBack} className="btn btn-primary">Go Back</button>
        <hr />
        <Link to="/" className="btn btn-primary">Go Back</Link>
    </div>);
}

export default PageNotFound;