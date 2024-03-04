import { Link } from "react-router-dom";
import HeroBanner from "../../components/HomeHeroBanner/index";
import Card from "../../components/HomeCard/index.jsx";
import "./mainHome.scss";
import RentalList from "../../datas/rentalList.json";

const MainHome = () => {
    return (
        <main className="main">
            <HeroBanner />
            <section className="cardContainer">
                {RentalList.map((rental) => (
                    <Link to={`/rental/${rental.id}`} key={rental.id}>
                        <Card cover={rental.cover} title={rental.title} />
                    </Link>
                ))}
            </section>
        </main>
    );
};

export default MainHome;
