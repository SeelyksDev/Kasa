import { useEffect } from "react";
import Header from "../../layout/Header/index.jsx";
import MainHome from "../../layout/MainHome/index";
import Footer from "../../layout/Footer/index";

const Home = () => {
    useEffect(() => {
        document.title = "Kasa - Accueil";

        return () => {};
    }, []);

    return (
        <section className="home">
            <Header />
            <MainHome />
            <Footer />
        </section>
    );
};

export default Home;
