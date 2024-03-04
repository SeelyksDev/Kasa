import { useEffect } from "react";
import Header from "../layout/Header/index";
import Footer from "../layout/Footer/index";
import "./error.scss";
import MainError from "../layout/MainError";

const Error = () => {
    useEffect(() => {
        document.title = "Oups! Il y a un problème";

        return () => {};
    }, []);
    return (
        <section>
            <Header />
            <MainError />
            <Footer />
        </section>
    );
};

export default Error;
