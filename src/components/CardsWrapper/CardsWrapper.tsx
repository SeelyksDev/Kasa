import { useEffect, useState } from "react";
import { getRentals } from "../../utils/rentalApi.ts";
import "./CardsWrapper.scss";
import RentalCard from "../RentalCard/RentalCard.tsx";

function CardsWrapper() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await getRentals();
            console.log(data);
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
