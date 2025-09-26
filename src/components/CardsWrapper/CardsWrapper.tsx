import { useEffect, useState } from "react";
import { getRentals } from "../../utils/api/rentalApi.ts";
import "./CardsWrapper.scss";
import RentalCard from "../RentalCard/RentalCard.tsx";
import { getCachedRentals } from "../../utils/store/rentalsStore.ts";

function CardsWrapper() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getCachedRentals(getRentals);
            setCards(data);
        })();
    }, []);

    return (
        <section className="rental-overview">
            <ul className="cardsWrapper">
                {cards.map((card, index) => (
                    <RentalCard key={index} data={card} />
                ))}
            </ul>
        </section>
    );
}

export default CardsWrapper;
