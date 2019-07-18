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
            <div className={classes.bgImageContainer}>
                <img src='./images/bg.jpg' alt={'Background'}/>
            </div>

            <div className='jumbotron text-center position-relative mb-4'>
                <img src='./images/amit-kumar.jpg' className={`${classes.photo} rounded-circle img-fluid shadow-lg`}
                     alt={'Amit Kumar'}/>
                <h1 className={`text-primary ${classes.title}`}>Amit Kumar</h1>
                <h3 className='text-secondary'>Full Stack Software Professional</h3>
                <h3 className='text-secondary'>React | Java | AWS</h3>
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
