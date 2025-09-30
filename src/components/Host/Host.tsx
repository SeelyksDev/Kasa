import type { HostProps } from "../../utils/types/host.types";
import "./Host.scss";

function Host({ host }: HostProps) {
    const nameParts: string[] = host.name.split(" ");
    const firstName:string = nameParts[0];
    const lastName: string = nameParts[1];

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
