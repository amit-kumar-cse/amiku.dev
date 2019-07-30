import React from 'react';
import classes from './App.module.scss';

import AboutMe from './components/aboutMe';
import EducationList from './components/educationList';
import ExperienceList from './components/experienceList';

// import {FaGithub} from 'react-icons/fa';

// import $ from 'jquery';
// import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className={`container-fluid ${classes.App}`}>
            <div className='rounded-lg shadow-lg'>
                <div className={classes.bgImageContainer}>
                    <img src='./images/code-coding-data-574073.jpg' alt={'Background'}/>
                    <img src='./images/amit-kumar.jpg' className={`${classes.photo} img-fluid shadow-lg`}
                         alt={'Amit Kumar'}/>
                </div>

                <div className={`jumbotron text-center position-relative mb-5 ${classes.headlineBox}`}>

                    <h2 className={`text-primary ${classes.title}`}>Amit Kumar</h2>
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


            <footer className='card-footer'>
                <div>
                    {/*<FaGithub/>*/}
                </div>
            </footer>
        </div>
    );
}

export default App;
