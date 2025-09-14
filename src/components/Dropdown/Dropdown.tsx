import "./Dropdown.scss";

interface DropdownData {
  id: string;
  title: string;
  content: string;
}

interface DropdownProps {
  dropdown: DropdownData;
}

function Dropdown ({ dropdown }: DropdownProps) {
    return (
        <li>
            <p className="title">{dropdown.title}</p>
            <p className="content">{dropdown.content}</p>
        </li>
    )
}

export default Dropdown;