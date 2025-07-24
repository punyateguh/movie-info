import { Link } from "react-router"
import Button from "../components/Button.jsx"

export default function NavbarItem({ custom }){

    return(
        <>
            <Link to="/" className={`py-2 px-2 text-indigo-900 hover:text-indigo-500 ${custom}`}>Home</Link>
            <Link to="/movie" className={`py-2 px-2 hover:text-indigo-500 ${custom}`}>Movie</Link>
            <Button text="Login" to="/login" />
        </>
    )
}