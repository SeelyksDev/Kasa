import { useState } from "react";
import type { CarouselProps } from "../../utils/types/carousel.types";
import "./Carousel.scss";

function Carousel({ pictures }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    function prevIndex(): void {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex((currentIndex) => currentIndex - 1);
        }
    }

    function nextIndex(): void {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <section className="carousel">
            {pictures.length !== 1 && (
                <button className="prev-btn" onClick={prevIndex}></button>
            )}
            <img
                src={pictures[currentIndex]}
                className="carousel-img"
                alt="photo du logement"
            />
            <span className="counter">
                {currentIndex + 1}/{pictures.length}
            </span>
            {pictures.length !== 1 && (
                <button
                    className={`next-btn${
                        pictures.length === 1 ? " disabled" : ""
                    }`}
                    onClick={nextIndex}
                ></button>
            )}
        </section>
    );
}

export default Carousel;
