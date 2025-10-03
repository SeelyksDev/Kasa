import { useState } from "react";
import arrow from "/assets/svg/dropdown-arrow.svg";
import type { DropdownProps } from "../../utils/types/dropdown.types";
import "./Dropdown.scss";

function Dropdown({ title, content }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown () {
        setIsOpen(!isOpen);
    };

    return (
        <li className="dropdown-item">
            <div className="dropdown-header" onClick={toggleDropdown}>
                <span>{title}</span>
                <img
                    src={arrow}
                    alt="flèche dropdown"
                    className={`arrow-dropdown ${isOpen ? "open" : ""}`}
                />
            </div>
            <div className={`dropdown-content ${isOpen ? "open" : ""}`}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((el, index) => (
                            <li key={index}>{el}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </li>
    );
}

export default Dropdown;
