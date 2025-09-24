import arrow from "../../assets/svg/dropdown-arow.svg";
import "./Dropdown.scss";

function Dropdown({ typeContent, title, content }) {
    return (
        <li className="dropdown-item">
            <details>
                <summary>
                    <span>{title}</span>
                    <img src={arrow} alt="flèche dropdown" className="arrow-dropdown" />
                </summary>
                {typeContent === "equipement" ? (
                    <ul>
                        {content.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </details>
        </li>
    );
}

export default Dropdown;
