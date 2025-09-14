import Dropdown from "../Dropdown/Dropdown";
import "./DropdownsWrapper.scss";

function DropdownsWrapper() {

    return (
        <ul className="dropdowns-wrapper">
            {dropdowns.map((dropdown) => ( 
                <Dropdown
                    key={dropdown.id}
                    title={dropdown.title}
                    content={dropdown.description}
                />
            ))}
        </ul>
    );
}

export default DropdownsWrapper;
