import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <NavLink to="/">
                    <img className="header__logo" src={logo} alt="logo" />
                </NavLink>
                <nav className="header__containerLinks">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "nav-underline" : ""
                        }
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "nav-underline" : ""
                        }
                    >
                        A Propos
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default Header;
