import React from 'react';
import classes from './App.module.scss';
import commonClasses from './commons.module.scss';

import EducationList from './components/educationList';
import ExperienceList from './components/experienceList';

// import {FaGithub} from 'react-icons/fa';

// import $ from 'jquery';
// import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {




    return (
        <div className={`${classes.App} container-fluid`}>
            <div className={classes.bgImageContainer}>
                <img src='./images/bg.jpg' alt={'Background'}/>
            </div>

            <div className='jumbotron text-center position-relative'>
                <img src='./images/amit-kumar.jpg' className={`${classes.photo} rounded-circle img-fluid shadow-lg`}
                     alt={'Amit Kumar'}/>
                <h2 className='text-primary'>Amit Kumar</h2>
                <h4 className='text-secondary'>Full Stack Software Professional</h4>
                <h5 className='text-secondary'>React | Java | AWS</h5>

            </div>

            <br/>

            <div className={classes.detailsContainer}>
                <div className={`card text-secondary ${commonClasses.detailSection} shadow mb-4`}>
                    <div className="card-body text-left">
                        <h4 className="card-title text-primary">About</h4>
                        {/*<hr/>*/}
                        <div>
                            <p>Software professional with 5.5 years of experience in full-stack system design and software
                                development across Banking and Advertising domains at Amazon, Morgan Stanley and Adobe.</p>

                            <ul>
                                <li>Proficient in server-side technologies like Java-Spring Ecosystem, Object Oriented
                                    Design.</li>
                                <li>Proficient in Angular/React web development ecosystem.</li>
                                <li>Hands-on experience in AWS, Relational and NoSQL Databases.</li>
                                <li>Expert at data structure and algorithms, clean system design.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <ExperienceList />

                <EducationList />
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
