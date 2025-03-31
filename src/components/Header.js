import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link, Links } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () =>{

    const [btnName , setbtnName] = useState("Login")
    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)
    //console.log(data)

    const cartItems = useSelector((store)=> store.cart.items);
    
    return(
        <div className="header flex justify-between shadow-2xl bg-green-200 mb-2 w-50 h-28">
            <div className="logo-container">
                <img className="logo w-28" src= {LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex m-5 p-3 gap-8">
                    <li>
                        Online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                     <Link to="/about"> About Us</Link> </li>
                    <li>
                       <Link to="/contact"> Contact Us</Link>
                       </li>
                    <li className="text-xl font-bold"><Link to="/cart">Cart</Link> ({cartItems.length} items)</li>
                    <button className="login w-20 border border-solid border-black bg-yellow-400" onClick={()=>{
                       btnName === "Login" ? setbtnName("Logout") : setbtnName("Login") 
                    }}>{btnName}</button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}
export default Header;