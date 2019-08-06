import React from 'react';
import classes from './App.module.scss';
import './App.scss';

import AboutMe from './components/aboutMe';
import EducationList from './components/educationList';
import ExperienceList from './components/experienceList';

import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa';
import {MdMail} from 'react-icons/md';

// import $ from 'jquery';
// import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    const random = Math.floor(Math.random()*6);


    let navigateToGithub = () => {
        window.open('https://github.com/amit1702');
    };

    let navigateToLinkedin = () => {
        window.open('https://www.linkedin.com/in/amitkumar-iitbhu/');
    };

    let navigateToTwitter = () => {
        if(window.innerWidth > 800) {
            window.open('https://twitter.com/amit1702');
        } else {
            window.open('https://mobile.twitter.com/amit1702');
        }
    };

    let sendEmail = () => {
        window.open('mailto:me@amitkumar.pro');
    };

    let style = {
        'backgroundImage': `url('images/bg-${random}.jpeg')`
    }

    return (
        <div className={`container-fluid ${classes.App}`} style={style}>
            <div className='rounded-lg shadow-lg'>
                <div className={classes.bgImageContainer}>
                    <img src='./images/code-coding-data-574073.jpg' alt={'Background'}/>
                    <img src='./images/amit-kumar.jpg' className={`${classes.photo} img-fluid shadow-lg`}
                         alt={'Amit Kumar'}/>
                </div>

                <div className={`jumbotron text-center position-relative mb-4 ${classes.headlineBox}`}>

                    <h3 className={`${classes.title}`}>Amit Kumar</h3>
                    <h5 className={`text-secondary ${classes.shadow}`}>Full Stack Software Professional</h5>
                    <h5 className={`text-secondary ${classes.shadow}`}>React | Java | AWS</h5>
                </div>
            </div>


            {/*body*/}
            <div className={classes.detailsContainer}>
                <AboutMe/>
                <ExperienceList/>
                <EducationList/>
            </div>


            <footer className={classes.footer}>
                <div>
                    <FaGithub onClick={navigateToGithub} size={30} className={`${classes.icon} mr-4`}/>
                    <FaLinkedin onClick={navigateToLinkedin} size={30} className={`${classes.icon} mr-4`}/>
                    <FaTwitter onClick={navigateToTwitter} size={30} className={`${classes.icon} mr-4`}/>
                    <MdMail onClick={sendEmail} size={30} className={`${classes.icon}`}/>
                </div>
            </footer>
        </div>
    );
}

export default App;
