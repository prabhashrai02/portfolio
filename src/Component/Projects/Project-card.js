import "./ProjectCard.css";
import { BsGithub } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";

function Card(props) {
    const project = props.data;
    return (
        <div className="card">
            <img className="card_image" src={project.image} alt=""/>
            <div className="card_description">
                <h6>{project.name}</h6>
            </div>
            <div className="card_link">
                <a rel="noreferrer" target="_blank" href={project.github_link}>
                    <BsGithub>github</BsGithub>
                </a>
                <a rel="noreferrer" target="_blank" href={project.live_link}>
                    <FaExternalLinkAlt>live</FaExternalLinkAlt>
                </a>
            </div>
        </div>
    );
}

export default Card;