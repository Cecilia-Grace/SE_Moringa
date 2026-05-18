import { Link } from "react-router-dom";

export function Navbar() {
    return(
        <div className="navbar">
            <nav className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/shop'>Shop</Link>
                <Link to='/admin_portal'>Admin Portal</Link>
            </nav>
        </div>
        
    )
}