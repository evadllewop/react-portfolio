import React from "react";
import Project from "../components/Project";
import "../styles/Custom.css";
import "../styles/Bootstrap.css";
// import Beer from 'https://github.com/evadllewop/react-portfolio/blob/main/public/images/blw-screenshot.png?raw=true';

function Portfolio() {
    const projects = [
        {
            name: 'beer likes water',
            school: 'Southern Methodist University',
            type: 'Homework Project',
            technologies: ['HTML • ', 'CSS • ', 'Javascript • ', 'Bootstrap • ', 'AJAX • ', 'React • ', 'MongoDB • ', 'Mongoose • ', 'Axios • ', 'Passport • ', 'Express'],
            thumbnail: 'https://github.com/evadllewop/react-portfolio/blob/main/public/images/blw-screenshot.png?raw=true',
            urlGit: 'https://github.com/evadllewop/be-like-water',
            urlDeployed: 'https://polar-beach-07296.herokuapp.com/'
        },
        {
            name: 'Weather Dashboard',
            school: 'Southern Methodist University',
            type: 'Homework Project',
            technologies: ['HTML • ', 'CSS • ', 'Javascript • ', 'Bootstrap • ', 'AJAX • ', 'JQuery • ', 'Third Party API (OpenWeather)'],
            thumbnail: 'https://evadllewop.github.io/BootstrapPortfolio/Assets/Images/project_WeatherDashboard.png',
            urlGit: 'https://github.com/evadllewop/WeatherDashboard',
            urlDeployed: 'https://evadllewop.github.io/WeatherDashboard/'
        },
        {
            name: 'Workout Tracker',
            school: 'Southern Methodist University',
            type: 'Homework Project',
            technologies: ['HTML • ', 'CSS • ', 'Javascript • ', 'Bootstrap • ', 'Express • ', 'Node • ', 'MongoDB • ', 'Mongoose • ', 'Heroku'],
            thumbnail: 'https://evadllewop.github.io/BootstrapPortfolio/Assets/Images/project_WorkoutTracker.png',
            urlGit: 'https://github.com/evadllewop/WorkoutTracker',
            urlDeployed: 'https://morning-sea-49641.herokuapp.com'
        },
        {
            name: 'Eat Da\' Burger',
            school: 'Southern Methodist University',
            type: 'Homework Project',
            technologies: ['HTML • ', 'CSS • ', 'Javascript • ', 'Bootstrap • ', 'AJAX • ', 'Express • ', 'Handlebars • ', 'Node • ', 'MySQL • ', 'Heroku'],
            thumbnail: 'https://evadllewop.github.io/BootstrapPortfolio/Assets/Images/project_Burger.png',
            urlGit: 'https://github.com/evadllewop/BurgerLogger',
            urlDeployed: 'https://tranquil-everglades-64817.herokuapp.com'
        },
        {
            name: 'Note Taker',
            type: 'Homework Project',
            school: 'Southern Methodist University',
            technologies: ['HTML • ', 'CSS • ', 'Javascript • ', 'Bootstrap • ', 'Font Awesome • ', 'Express • ', 'JSON'],
            thumbnail: 'https://evadllewop.github.io/BootstrapPortfolio/Assets/Images/screenshot_noteTaker.png',
            urlGit: 'https://github.com/evadllewop/NoteTaker',
            urlDeployed: 'https://ancient-river-00430.herokuapp.com/'
        },
        {
            name: 'Workday Scheduler',
            school: 'Southern Methodist University',
            type: 'Homework Project',
            technologies: ['HTML • ', 'CSS • ', 'Javascript • ', 'Bootstrap • ', 'Font Awesome • ', 'Moment.js • ', 'Local Storage'],
            thumbnail: 'https://evadllewop.github.io/BootstrapPortfolio/Assets/Images/WDS-Screenshot.png',
            urlGit: 'https://github.com/evadllewop/WorkDayScheduler',
            urlDeployed: 'https://evadllewop.github.io/WorkDayScheduler/'
        },
        {
            name: 'Password Generator',
            school: 'Southern Methodist University',
            type: 'Homework Project',
            technologies: ['HTML • ', 'CSS • ', 'Javascript'],
            thumbnail: 'https://evadllewop.github.io/BootstrapPortfolio/Assets/Images/project_Password.png',
            urlGit: 'https://github.com/evadllewop/PasswordGenerator',
            urlDeployed: 'https://evadllewop.github.io/PasswordGenerator/'
        }

    ]
    return (
        <div className="container">
            <div class="row">
                <div class="col-md-12"> This page is mainly for some of my development projects while attending SMU. For additional portfolio work throughout my design career, visit my <a href="https://www.behance.net/DavePowell" className="portLink" target="_blank"
                >Behance</a> page. <br /> <br />
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h3>Development Projects</h3>
                </div>
            </div>
            <hr class="my-4"></hr>
            {projects.map((project) => (
                <Project
                    name={project.name}
                    school={project.school}
                    type={project.type}
                    thumbnail={project.thumbnail}
                    technologies={project.technologies}
                    urlGit={project.urlGit}
                    urlDeployed={project.urlDeployed}
                />
            ))}
        </div>

    )
}
export default Portfolio;