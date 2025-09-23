import "./Host.scss";

function Host({ host }) {
    return (
        <figure className="host">
            <figcaption className="name">{host.name}</figcaption>
            <img src={host.picture} alt={`Photo de ${host.name}`} className="picture" />
        </figure>
    );
}

export default Host;
