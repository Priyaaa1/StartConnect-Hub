import "./Notfound.css";
import { Link } from "react-router-dom";
export default function Notfound(){
    return(
        <div className="notfound-container">
           <img src="./404.png" alt="Not found pic" className="notfound" />
           <Link to={"/"} className="btnx" style={{textDecoration: "none"}}>Go to Home</Link>
        </div>
    )
}