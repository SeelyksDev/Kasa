import { useEffect } from "react";
import Header from "../../layout/Header/index.jsx";
import MainRental from "../../layout/MainRental/index.jsx";
import Footer from "../../layout/Footer/index.jsx";

const Rental = () => {
    useEffect(() => {
        document.title = "Kasa - Hebergement";

        return () => {};
    }, []);
    return (
        <section>
            <Header />
            <MainRental />
            <Footer />
        </section>
    );
};

export default Rental;
