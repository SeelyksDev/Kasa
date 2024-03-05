import redStar from "../../assets/redStar.svg";
import greyStar from "../../assets/greyStar.svg";
import "./rating.scss";

const Rating = ({ rating }) => {
    let ratingStarArray = [];
    const allStars = 5;

    for (let i = 0; i < allStars; i++) {
        if (i <= rating - 1) {
            ratingStarArray.push(
                <img
                    className="redstar"
                    key={i}
                    src={redStar}
                    alt="etoile positive"
                />
            );
        } else {
            ratingStarArray.push(
                <img
                    className="greystar"
                    key={i}
                    src={greyStar}
                    alt="etoile negative"
                />
            );
        }
    }

    return <div>{ratingStarArray}</div>;
};

export default Rating;
