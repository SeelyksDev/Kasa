import { useEffect, useState } from "react";
import { getRentals } from "../../utils/api/rentalApi.ts";
import { getCachedRentals } from "../../utils/store/rentalsStore.ts";
import RentalCard from "../RentalCard/RentalCard.tsx";
import type { RentalCardProps } from "../../utils/types/rentalCard.types.ts";
import "./CardsWrapper.scss";

function CardsWrapper() {
    const [cards, setCards] = useState<RentalCardProps["data"][]>([]);

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
