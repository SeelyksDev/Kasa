import "./rentalTitle.scss";

const TitleRental = ({ title, location }) => {
    return (
        <section className="titleContainer">
            <h1 className="titleContainer__title">{title}</h1>
            <h2 className="titleContainer__location">{location}</h2>
        </section>
    );
};

export default TitleRental;
