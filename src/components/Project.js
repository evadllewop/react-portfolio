import React from "react";
// import "../styles/Project.css";
import "../styles/Bootstrap.css";
import "../styles/Custom.css";

function Project(props) {
    return (
        <article>
            <div className="col-md-6 projectCard">
                <div className="card mb-3">
                    <h3 className="card-header">{props.name}</h3>
                    <div className="card-body">
                        <h5 className="card-title">{props.school}</h5>
                        <h6 className="card-subtitle text-muted">{props.type}</h6>
                    </div>

                    <div className="cardImg"><img src={props.thumbnail} className="card-img screenShot" />
                    </div>

                    <div className="card-body">
                        <p className="card-text">
                            <span className="techHeader">Technologies:</span> {props.technologies}
                        </p>
                    </div>
                    <div className="card-body">
                        <a href={props.urlGit} target="_blank"><span
                            style={{ fontSize: "1.75em", color: "#333" }}><i className="fab fa-github-square"></i></span></a>
                        <a href={props.urlDeployed} target="_blank"><span
                            style={{ fontSize: "1.75em", color: "#333" }}><i className="fas fa-external-link-square-alt"></i></span></a>
                    </div>
                </div>
            </div >
        </article>
    );
}

export default Project;