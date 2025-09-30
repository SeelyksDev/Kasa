import type { TagProps } from "../../utils/types/tag.types";
import "./Tag.scss";

function Tag({ text }: TagProps) {
    return <li className="tag">{text}</li>;
}

export default Tag;
