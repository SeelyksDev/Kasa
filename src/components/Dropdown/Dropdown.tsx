import "./Dropdown.scss";

function Dropdown({ typeContent, title, text, equipementArray }) {
    return (
        <li className="dropdown-item">
            <details>
                <summary>{title}</summary>
                {typeContent === "equipement" ? (
                    <ul>
                        {equipementArray.map((el, index) => (
                            <li key={index}>{el.equipement}</li>
                        ))}
                        ;
                    </ul>
                ) : (
                    <p>{text}</p>
                )}
            </details>
        </li>
    );
}

export default Dropdown;
