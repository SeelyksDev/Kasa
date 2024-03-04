import redStar from "../../assets/redStar.svg";
import greyStar from "../../assets/greyStar.svg";
import "./rating.scss";

const Rating = ({ rating }) => {
    let redStarArray = [];
    let greyStarArray = [];
    const allStars = 5;

    for (let i = 0; i < rating; i++) {
        redStarArray.push(
            <img
                className="redstar"
                key={i}
                src={redStar}
                alt="etoile positive"
            />
        );
    }

    for (let i = 0; i < allStars - rating; i++) {
        greyStarArray.push(
            <img
                className="greystar"
                key={i}
                src={greyStar}
                alt="etoile negative"
            />
        );
    }

    return (
        <div>
            {redStarArray}
            {greyStarArray}
        </div>
    );
};

export default Rating;
