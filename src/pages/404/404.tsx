import { NavLink } from "react-router";
import "./404.scss";

function Error404() {
    return (
        <main className="404-wrapper">
            <h1 className="404-title">404</h1>
            <h2 className="404-subtitle">Oups! La page que vous demandez n'existe pas.</h2>
            <NavLink to="/" className="404-link">Retourner sur la page d’accueil</NavLink>
        </main>
    );
}

export default Error404;
