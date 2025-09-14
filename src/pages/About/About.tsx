import HeroBanner from "../../components/HeroBanner/HeroBanner";
import { getDropdownsAbout } from "../../utils/aboutDropdownApi";
import { useState, useEffect } from "react";

function About() {

    const [dropdowns, setDropdowns] = useState([]);

        useEffect(() => {
        (async () => {
            const data = await getDropdownsAbout();
            console.log(data);
            setDropdowns(data);
        })();
    }, []);

    return (
        <main>
            <HeroBanner>
                <section className="heroBanner bannerAbout"></section>
            </HeroBanner>
        </main>
    );
}

export default About;
