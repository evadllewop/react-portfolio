import React from "react";
import "../styles/Custom.css";
import "../styles/Bootstrap.css";
import Resume from '../DavePowell_Resume.pdf';

function Social() {
    return (
        <section>
            <a href="https://www.linkedin.com/in/dave-powell-842b455" target="_blank" alt="LinkedIn">
                <span style={{ fontSize: '1.5em', color: '#333' }}>
                    <i className="fab fa-linkedin"></i>
                </span></a>

            <a href="https://www.behance.net/DavePowell" target="_blank" alt="Behance">
                <span style={{ fontSize: '1.5em', color: '#333' }}>
                    <i className="fab fa-behance-square"></i>
                </span>
            </a>
            <a href="https://github.com/evadllewop" target="_blank" alt="GitHub">
                <span style={{ fontSize: '1.5em', color: '#333' }}>
                    <i className="fab fa-github-square"></i>
                </span>
            </a>
            <span style={{ color: '#ccc' }}>&nbsp; | &nbsp;</span>

            <a href={Resume} target="_blank" alt="Resume">
                <span style={{ fontSize: '1em', color: '#333' }}>
                    <i className="fas fa-file-pdf"></i> View Resume
                </span>
            </a>
            <span style={{ color: '#ccc' }}>&nbsp; | &nbsp;</span>
            <a href="mailto:evadllewop@gmail.com" alt="Email">
                <span style={{ fontSize: '1em', color: '#333' }}>
                    <i className="fas fa-envelope"></i> evadllewop@gmail.com
                </span>
            </a>
            <span style={{ color: '#ccc' }}>&nbsp; | &nbsp;</span>
            <span style={{ fontSize: '1em', color: '#333' }}>
                <i className="fas fa-phone-square"></i> (214) 289-7597
              </span>
        </section>
    );
}
export default Social;