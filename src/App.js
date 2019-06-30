import React from 'react';
import './App.scss';

import Experience
    from './components/experience'

// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/css/boostrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
    let experiences = [
        {
            'firm': 'Amazon',
            'position': 'SDE-2',
            'startDate': 'Oct/18',
            'endDate': 'Present',
            'period': '9 months',
            'location': 'Bangaluru',
            'icon': 'amazon.png',
            showLine: true
        },
        {
            'firm': 'Morgan Stanley',
            'position': 'Senior Software Engineer',
            'startDate': 'Aug/14',
            'endDate': 'Oct/18',
            'period': '4 yr 3 mos',
            'location': 'Mumbai',
            'icon': 'ms.png',
            showLine: true
        },
        {
            'firm': 'Adobe',
            'position': 'Member of Technical staff',
            'startDate': 'May/09',
            'endDate': 'Dec/09',
            'period': '8 mos',
            'location': 'Noida',
            'icon': 'adobe.jpeg',
            showLine: false
        }

    ];

    return (
        <div className="App container-fluid">
            <div className='bg-image-container'>
                <img src='./images/bg.jpg' alt={'Background'}/>
            </div>

            <div className='jumbotron text-center position-relative'>
                <img src='./images/amit-kumar.jpg' className={'rounded-circle photo img-fluid shadow-lg'}
                     alt={'Amit Kumar'}/>
                <h2 className='text-primary'>Amit Kumar</h2>
                <h4 className='text-secondary'>Full Stack Software Professional</h4>
                <h5 className='text-secondary'>React | Java | AWS</h5>

            </div>

            <div className={'content-body'}>

            </div>
            <div className="card text-secondary detail-section div-center">
                <div className="card-body text-left">
                    <h3 className="card-title text-primary">About</h3>
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

            <br/>

            <div className="card text-secondary detail-section div-center">
                <div className="card-body text-left">
                    <h4 className="card-title text-primary">Experience</h4>
                    <hr/>
                    <Experience experience={experiences[0]}>
                        <div className='pt-3'>Working for Amazon advertisement design services platform. Our application is a full
                            stack application which provides raw assets and final creative spec exchange,
                            feedback and approval workflows between advertisers and amazon creative designers.
                            It is a full stack application using Java, React, Redux, AWS.
                            I am contributing to all tiers of development.
                        </div>
                    </Experience>



                    <Experience experience={experiences[1]}>
                        <div className='pt-3'>
                            <ul className='list-unstyled'>
                                <li>Design architecture and development of Settlement instruction renovation program, which is a repository for creating, maintaining and settlement instructions. Settlement instructions are used for trade enrichment, settlement and confirmation.</li>
                                <li>Defining the UI application architecture, selecting appropriate framework, dev environment setup, hiring and leading UI team during the implementation process.</li>
                                <li>Contributed to Real estate investment tracking application of Morgan Stanley.
                                </li>
                                <li>Designed and developed a very well appreciated Google Map integrated web application for Morgan Stanley Real Estate Investments (Similar to 99acres)</li>
                            </ul>
                        </div>
                    </Experience>

                    <Experience experience={experiences[2]}>
                        <div className='pt-3'>
                            <ul className='list-unstyled'>
                                <li>Automated the mechanism to add peer review comments on violation of Adobe code policy against new perforce check- ins through the implementation of wrapper over code collaborator API</li>
                                <li>Developed and deployed a Bugbot using Perl for collecting unallocated bugs for a particular project and reporting to management</li>
                            </ul>
                        </div>
                    </Experience>
                </div>
            </div>

            <br/>
            <div className="card text-secondary detail-section div-center">
                <div className="card-body text-left">
                    <h3 className="card-title text-primary">Education</h3>
                    <div>
                        <p>Software professional with 5.5 years of experience in full-stack system design and software
                            development across Banking and Advertising domains at Amazon, Morgan Stanley and Adobe.</p>


                    </div>

                </div>
            </div>

            <footer>

            </footer>
        </div>
    );
}

export default App;
