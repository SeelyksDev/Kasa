import Star from "../Star/Star";
import type { RatingWrapperProps } from "../../utils/types/ratingWrapper.types";
import type { RatingWrapperColor } from "../../utils/types/ratingWrapper.types";
import "./RatingWrapper.scss";

function RatingWrapper({ rating }: RatingWrapperProps) {
    const hostRating: number = Number(rating);
    const maxStar: number = 5;
    const starsColor: RatingWrapperColor[] = [];

    for (let i = 1; i <= maxStar; i++) {
        if (i <= hostRating) {
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
