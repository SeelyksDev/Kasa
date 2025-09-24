import "./Host.scss";

function Host({ host }) {
    const nameParts = host.name.split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts[1];

    return (
        <figure className="host">
            <figcaption className="name-wrapper">
                <span>{firstName}</span>
                <span>{lastName}</span>
            </figcaption>
            <img
                src={host.picture}
                alt={`Photo de ${host.name}`}
                className="picture"
            />
        </figure>
    );
}

export default Host;
