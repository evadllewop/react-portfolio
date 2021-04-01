import React from "react";
import Social from "../components/Social";
import "../styles/Custom.css";
import "../styles/Bootstrap.css";

function Home({ setCurrentPage }) {
    return (

        <div className="container">
            <div className="jumbotron align-middle">
                <p className="lead">
                    Hello... Designer, developer, musician and horror movie freak from Texas<br /> currently seeking a full time web development opportunity.
                </p>
                <div className="row d-flex justify-content-center align-middle">
                    <a className="btn btn-primary btn-md align-middle" onClick={() => { setCurrentPage('contact') }} role="button">Let's Do It
                    <span
                            style={{ fontSize: "1em", color: "#fff", marginLeft: "10px" }}>
                            <i className="fas fa-pencil-alt"></i></span>
                    </a>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h3>About Me</h3>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                    <div className="col-md-12">
                        <img
                            src="https://avatars3.githubusercontent.com/u/70380996?s=460&u=250d3e6bd7c83a76d4ee0a5b9abffc83006e9c16&v=4"
                            className="profile-pic" alt="Dave Powell" />
                        <div className="card-body">
                            <p>
                                Passionate web designer/developer leveraging 10 + years of extensive experience in creative design,
                                digital
                                marketing, development, conceptualizing and problem solving who currently seeks a full-time junior web
                                development position. Development education stems from Southern Methodist University along with years of
                                collaborating with various smart and talented colleagues and teams within the structure of large
                                successful corporations.
                                    </p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;