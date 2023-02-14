import { Outlet, Link } from "react-router-dom";
const Success = () => {
    return ( 
        <div className="success">
            <div className="container">
            <h1> your payment is successfull</h1><br/>
            <Link to='/'><button>Home</button></Link>
            <Outlet />
            </div>
        </div>
     );
}
 
export default Success;