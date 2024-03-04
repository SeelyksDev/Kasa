import { useEffect } from "react";
import Header from "../layout/Header/index";
import MainAbout from "../layout/MainAbout/index";
import Footer from "../layout/Footer/index";

const About = () => {
    useEffect(() => {
        document.title = "Kasa - A Propos";

        return () => {};
    }, []);
    return (
        <section className="about">
            <Header />
            <MainAbout />
            <Footer />
        </section>
    );
};

export default About;
