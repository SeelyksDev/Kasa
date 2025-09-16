import { NavLink } from "react-router";
import { useEffect } from "react";
import "./Error.scss";

function Error404() {
    useEffect(() => {
        document.title = "Page non trouvée - Kasa";
    }, []);

    return (
        <main className="error-wrapper">
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">
                Oups! La page que vous demandez n'existe pas.
            </h2>
            <NavLink to="/" className="error-link">
                Retourner sur la page d’accueil
            </NavLink>
        </main>
    );
}

export default Error404;
