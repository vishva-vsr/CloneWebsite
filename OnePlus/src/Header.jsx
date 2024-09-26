import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <div className="Over-Head">  <nav className="Header-nav">
          <h1>OnePlus</h1>
            <div className="list-nav">
                <ul className="unlist">
                    <li><Link to="/Mobile">Mobile</Link></li>
                    <li>Audio</li>
                    <li>Community</li>
                    <li>Wearables</li>
                    <li>Account</li>
                </ul>
            </div>
        </nav></div>
        </>
      
    )
        
       
}
export default Header;