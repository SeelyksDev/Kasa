import "./Dropdown.scss";

function Dropdown({ typeContent, title, content }) {
    return (
        <li className="dropdown-item">
            <details>
                <summary>{title}</summary>
                {typeContent === "equipement" ? (
                    <ul>
                        {content.map((el, index) => (
                            <li key={index}>{el.equipement}</li>
                        ))}
                        ;
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </details>
        </li>
    );
}

export default Dropdown;
