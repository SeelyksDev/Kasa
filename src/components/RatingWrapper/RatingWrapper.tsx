import Star from "../Star/Star";
import "./RatingWrapper.scss";

function RatingWrapper({ rating }) {
    const maxStar = 5;
    const starsColor = [];

    for (let i = 1; i <= maxStar; i++) {
        if (i <= rating) {
            starsColor.push("red");
        } else {
            starsColor.push("grey");
        }
    }

    return (
        <ul className="rating-wrapper">
            {starsColor.map((starColor, index) => (
                <Star key={`star - ${index}`} color={starColor} />
            ))}
        </ul>
    );
}

export default RatingWrapper;
