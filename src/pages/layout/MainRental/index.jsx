import { useParams } from "react-router-dom";
import Carousel from "../../components/RentalCarousel";
import RentalList from "../../../datas/rentalList.json";
import TitleRental from "../../components/TitleRental/index";
import Tag from "../../components/RentalTag/index";
import Rating from "../../components/RentalRating/index";
import Host from "../../components/RentalHost/index";
import DropDown from "../../components/DropDown/index";
import "./mainRental.scss";

const MainRental = () => {
    const { id } = useParams();
    const currentRental = RentalList.find((rental) => rental.id === id);
    const tags = currentRental.tags;
    return (
        <main className="main-rental">
            <Carousel image={currentRental.pictures} />
            <section className="main-rental__hostRental">
                <div className="main-rental__titleTags">
                    <TitleRental
                        title={currentRental.title}
                        location={currentRental.location}
                    />
                    <div className="tagsContainer">
                        {tags.map((tag, index) => (
                            <Tag key={index} tagText={tag} />
                        ))}
                    </div>
                </div>
                <div className="main-rental__ratingHost">
                    <Rating rating={parseInt(currentRental.rating, 10)} />
                    <Host
                        name={currentRental.host.name}
                        picture={currentRental.host.picture}
                    />
                </div>
            </section>
            <section className="allDropDowns">
                <DropDown
                    title="Description"
                    paragraph={currentRental.description}
                />
                <DropDown
                    title="Équipements"
                    paragraph={currentRental.equipments}
                    isList={true}
                />
            </section>
        </main>
    );
};

export default MainRental;
