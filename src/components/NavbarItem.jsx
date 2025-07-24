import { Link, useLocation } from "react-router"
import Button from "../components/Button.jsx"

export default function NavbarItem({ custom }){
    const location = useLocation();

    return(
        <>
            <Link to="/" className={`py-2 px-2 hover:text-indigo-500 ${custom} ${location.pathname==="/" ? "text-indigo-900 font-bold " : ""}`}>Home</Link>
            <Link to="/movie" className={`py-2 px-2 hover:text-indigo-500 ${custom} ${location.pathname==="/movie" ? "text-indigo-900 font-bold " : ""}`}>Movie</Link>
            
            <Button text="Login" to="/login" />
        </>
    )
}