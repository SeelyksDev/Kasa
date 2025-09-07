import { Link } from "react-router";

function Header() {
    return (
        <>
            <img src="" alt="" />
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/about">A Propos</Link>
                </li>
            </ul>
        </>
    );
}

export default Header;
