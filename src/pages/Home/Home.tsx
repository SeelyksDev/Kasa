import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import "./Home.css";

function Home() {
    return (
        <main>
            <HeroBanner>
                <section className="heroBanner bannerMain">
                    <h1 className="title">Chez vous, partout et ailleurs</h1>
                </section>
            </HeroBanner>
            <CardsWrapper />
        </main>
    );
}

export default Home;
