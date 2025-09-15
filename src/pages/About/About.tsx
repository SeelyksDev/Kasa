import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { aboutData } from "../../data/about-data";
import Dropdown from "../../components/Dropdown/Dropdown";

function About() {

    return (
        <main>
            <HeroBanner>
                <section className="heroBanner bannerAbout"></section>
            </HeroBanner>
            <ul className="dropowns-wrapper">
                <Dropdown title={aboutData[0].title} content={aboutData[0].texte} />
                <Dropdown title={aboutData[1].title} content={aboutData[1].texte} />
                <Dropdown title={aboutData[2].title} content={aboutData[2].texte} />
                <Dropdown title={aboutData[3].title} content={aboutData[3].texte} />
            </ul>
        </main>
    );
}

export default About;
