import { useState } from "react";
import "./dropDown.scss";
import UpArrow from "../../assets/upArrow.svg";

const DropDown = ({ title, paragraph, isList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`dropDown ${isOpen ? "open" : ""}`}>
            <div className="dropDown__head" onClick={handleToggle}>
                <h3 className="dropDown__title">{title}</h3>
                <img
                    src={UpArrow}
                    alt="flèche"
                    className={`arrow ${isOpen ? "down" : ""}`}
                />
            </div>
            <div
                className={`dropDown__textContainer ${
                    isOpen ? "open" : "closed"
                }`}
            >
                {isList ? (
                    <ul className="dropDown__listContainer">
                        {paragraph.map((element, index) => (
                            <li className="dropDown__list" key={index}>
                                {element}
                            </li>
                        ))}
                    </ul>
                ) : (
                    paragraph
                )}
            </div>
        </div>
    );
};

export default DropDown;
