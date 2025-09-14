import Dropdown from "../Dropdown/Dropdown";
import { getDropdownsAbout } from "../../utils/aboutDropdownApi";
import { useEffect, useState } from "react";
import "./DropdownsWrapper.scss";

function DropdownsWrapper({ typeOfDropdown }) {
    const [dropdowns, setDropdowns] = useState([]);

    if ( typeOfDropdown === "a-propos" ) {
            (async () => {
            const data = await getDropdownsAbout();
            console.log(data);
            setDropdowns(data);
        })();
    }, []);
    } else {
        
    }

    useEffect(() => {
    

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
