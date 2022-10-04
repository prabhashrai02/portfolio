import "./Experience.css";

function ExperienceCard (props) {
    const data = props.data;
    return (
        <div className="experience_card">
            <a href={data.website} target="_blank" rel="noreferrer">
                <img src={data.logo} className="experience_logo"/>
            </a>
            <h2>{data.designation}</h2>
            <h4>{data.duration}</h4>
            <h5>{data.tech_stack}</h5>
            <br />
            <li>{data.description_l1}</li>
            <li>{data.description_l2}</li>
            <li>{data.description_l3}</li>
        </div>
    );
}

export default ExperienceCard;