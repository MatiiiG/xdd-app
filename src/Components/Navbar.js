import { Link } from "react-router-dom"

export function Navbar(){
    return(
        <>
            <Link to="/">
                <button>Lobby</button>
            </Link>
            <Link to="/Strona2">
                <button>Gra</button>
            </Link>
            <Link to="/Strona3">
                <button>Druga gra</button>
            </Link>
        </>
    )
}