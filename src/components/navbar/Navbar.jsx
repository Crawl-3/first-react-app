import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
       <div className="navbar-wrapper">
            <nav className="navbar">
            <ul className="items">
                <li className="item">
                    <NavLink exact to="/" activeClassName="active" className="link">
                        Home
                    </NavLink>
                </li>
                <li className="item">
                    <NavLink exact to="/about" activeClassName="active" className="link">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
       </div>
    );
}

export default Navbar;
