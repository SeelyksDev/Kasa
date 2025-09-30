import arrow from "../../assets/svg/dropdown-arow.svg";
import type { DropdownProps } from "../../utils/types/dropdown.types";
import "./Dropdown.scss";

function Dropdown({ title, content }: DropdownProps) {
    return (
        <li className="dropdown-item">
            <details>
                <summary>
                    <span>{title}</span>
                    <img
                        src={arrow}
                        alt="flèche dropdown"
                        className="arrow-dropdown"
                    />
                </summary>
                {Array.isArray(content) ? (
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
