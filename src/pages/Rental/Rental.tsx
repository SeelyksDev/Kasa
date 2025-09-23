import { useState, useEffect } from "react";
import { getRentals } from "../../utils/api/rentalApi.ts";
import { getCachedRentals } from "../../utils/store/rentalsStore.ts";
import { useParams } from "react-router";
import TitleLocation from "../../components/TitleLocation/TitleLocation.tsx";
import Carousel from "../../components/Carousel/Carousel";
import Tag from "../../components/Tag/Tag.tsx";
import RatingWrapper from "../../components/RatingWrapper/RatingWrapper.tsx";
import Host from "../../components/Host/Host.tsx";
import "./Rental.scss";

function Rental() {
    const [rentals, setRentals] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const data = await getCachedRentals(getRentals);
            setRentals(data);
        })();
    }, []);

    let currentRental = rentals.find((element) => element.id === id);

    useEffect(() => {
        if (currentRental) {
            document.title = `${currentRental.title} - Kasa`;
        }
    }, [currentRental]);

    if (!currentRental) {
        return <p>Chargement en cours...</p>;
    }

    return (
        <main>
            <Carousel pictures={currentRental.pictures} />
            <section className="title-tag">
                <TitleLocation
                    title={currentRental.title}
                    location={currentRental.location}
                />
                <ul className="tags-wrapper">
                    {currentRental.tags.map((current, index) => (
                        <Tag key={`${index} - Tag`} text={current} />
                    ))}
                </ul>
            </section>
            <section className="host-rating">
                <RatingWrapper rating={currentRental.rating} />
                <Host host={currentRental.host} />
            </section>
        </main>
    );
}

export default Rental;
