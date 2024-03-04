import { Link } from "react-router-dom";
import "./mainError.scss";

const MainError = () => {
    return (
        <main className="main-error">
            <h1 className="main-error__404">404</h1>
            <h2 className="main-error__text">
                <span className="main-error__span1">Oups! La page que</span>
                <span className="main-error__span2">
                    vous demandez n'existe pas.
                </span>
            </h2>
            <Link className="main-error__redirection" to="/">
                <span>Retourner sur la page d'accueil</span>
            </Link>
        </main>
    );
};

export default MainError;
