import "./TitleLocation.scss";

function TitleLocation({ title, location }) {
    return (
        <hgroup className="rental-header">
            <h1 className="rental-title">{title}</h1>
            <p className="rental-location">{location}</p>
        </hgroup>
    );
}

export default TitleLocation;
