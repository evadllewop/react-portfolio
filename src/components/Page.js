import React from 'react';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import "../styles/Custom.css";
import "../styles/Bootstrap.css";

function Page({ currentPage, setCurrentPage }) {
    const displayPage = () => {
        switch (currentPage) {
            case 'contact':
                return <Contact setCurrentPage={setCurrentPage} />;
            case 'portfolio':
                return <Portfolio setCurrentPage={setCurrentPage} />;
            default:
                return <Home setCurrentPage={setCurrentPage} />;
        }
    }
    return (
        <div>
            {displayPage()}
        </div>
    )
}

export default Page;
