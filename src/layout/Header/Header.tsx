import logo from "../../assets/svg/logo.svg";
import { NavLink } from "react-router";
import "./Header.scss";

function Header() {
    return (
        <header className="header">
            <nav className="navigation">
                <NavLink
                    to="/"
                    className="logo-link"
                >
                    <img src={logo} alt="logo Kasa" className="logo" />
                </NavLink>
                <ul className="nav-links">
                    <li className="link">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            Accueil
                        </NavLink>
                    </li>
                    <li className="link">
                        <NavLink
                            to="/a-propos"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
