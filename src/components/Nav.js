import React from "react";
import "../styles/Custom.css";
import "../styles/Bootstrap.css";

function Nav({ setCurrentPage }) {

    // const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="container-fluid">
                <span className="navbar-brand" id="logo" onClick={() => setCurrentPage('home')} >
                    Dave Powell
                    </span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <span onClick={() => setCurrentPage('home')} >
                                Home
                    </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-item-active" onClick={() => setCurrentPage('portfolio')} >
                                Portfolio
                    </span>
                        </li>
                        <li className="nav-item">
                            <span onClick={() => setCurrentPage('contact')} >
                                Contact
                    </span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;