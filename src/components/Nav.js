import React from "react";
import "../styles/Custom.css";
import "../styles/Bootstrap.css";

function Nav({ setCurrentPage }) {

    // const location = useLocation();

    return (
        <div className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" id="logo" href="#">Dave Powell</a>
            <ul className="nav">
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
    );
}

export default Nav;