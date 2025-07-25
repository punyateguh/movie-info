import { Link, useLocation } from "react-router"
import ButtonLink from "./ButtonLink.jsx"

export default function NavbarItem({ className }){
    const location = useLocation();

    return(
        <>
            <Link to="/" className={`py-2 px-2 hover:text-indigo-500 ${className} ${location.pathname==="/" ? "text-indigo-900 font-bold " : ""}`}>Home</Link>
            <Link to="/movie" className={`py-2 px-2 hover:text-indigo-500 ${className} ${location.pathname==="/movie" ? "text-indigo-900 font-bold " : ""}`}>Movie</Link>
            
            <ButtonLink text="Login" to="/login" />
        </>
    )
}