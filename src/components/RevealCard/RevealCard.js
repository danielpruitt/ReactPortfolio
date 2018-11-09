import React from "react";

const RevealCard = (props) => (
    <div className="card hoverable flow-text ">
        <div className="card-image waves-effect waves-block waves-dark">
            <img className="activator responsive-img" src={`${props.image}`} alt="card" />
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{props.title}<i className="material-icons right">more_vert</i></span>
            <p><a target="_blank" rel="noreferrer noopener" href={`${props.url}`}> Go to {props.title}</a></p>
            <p><a target="_blank" rel="noreferrer noopener" href={`${props.github}`}>View on Github</a></p>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.title}<i className="material-icons right">close</i></span>
            <p>{props.description}</p>
        </div>
    </div>

);

export default RevealCard;