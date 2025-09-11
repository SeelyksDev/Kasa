import { NavLink } from "react-router";
import "./RentalCard.scss";

interface RentalCardProps {
    data: {
        id: string;
        title: string;
        cover: string;
    };
}

function RentalCard({ data }: RentalCardProps) {
    return (
        <li className="card">
            <NavLink to={`/location/${data.id}`}className="card-content" title={data.title}>
                <img src={data.cover} alt={data.title} className="card-img" />
                <h2 className="card-title">{data.title}</h2>
            </NavLink>
        </li>
    );
}

export default RentalCard;
