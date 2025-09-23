import RedStar from "../../assets/svg/red-star.svg";
import GreyStar from "../../assets/svg/grey-star.svg";
import "./Star.scss";

function Star({ color }) {
    return (
        <li className="star">
            <img src={color === "red" ? RedStar : GreyStar} alt="une étoile" />
        </li>
    )
}

export default Star; 