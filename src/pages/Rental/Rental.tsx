import { useState, useEffect } from "react";
import Carousel from "../../components/Carousel/Carousel";
import { getRentals } from "../../utils/api/rentalApi.ts";
import { getCachedRentals } from "../../utils/store/rentalsStore.ts";
import { useParams } from "react-router";
import TitleLocation from "../../components/TitleLocation/TitleLocation.tsx";

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
            <TitleLocation
                title={currentRental.title}
                location={currentRental.location}
            />
        </main>
    );
}

export default Rental;
