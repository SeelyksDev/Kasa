import { useState } from "react";
import "./Carousel.scss";

function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function prevIndex() {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex((currentIndex) => currentIndex - 1);
        }
    }

    function nextIndex() {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    }

    return (
        <section className="carousel">
            <button className="prev-btn" onClick={prevIndex}></button>
            <img
                src={pictures[currentIndex]}
                className="carousel-img"
                alt="photo du logement"
            />
            <button className="next-btn" onClick={nextIndex}></button>
        </section>
    );
}

export default Carousel;
