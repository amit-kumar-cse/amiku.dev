import React from 'react';
import Experience from "./experience";

import classes from './details.module.scss';

import experienceData from '../data/experience';

const experienceList = props => {
    return (
        <div className={`card text-secondary ${classes.detailSection} shadow mb-5`}>
            <div className={`card-header ${classes.myCardHeader}`}>
                <h1 className="card-title text-secondary">Experience</h1>
            </div>
            <div className={`card-body text-left ${classes.cardBody}`}>
                <Experience experience={experienceData[0]}>
                    <div className='pt-3 text-justify'>
                        <ul className={`list-unstyled text-justify`}>
                            <li>- Working for Amazon advertisement design services platform. Our application is a full
                                stack application which provides raw assets and final creative spec exchange,
                                feedback and approval workflows between advertisers and amazon creative designers.</li>
                            <li>- It is a full stack application using Java, React, Redux, AWS.
                                I am contributing to all tiers of development.</li>
                        </ul>
                    </div>
                </Experience>



                <Experience experience={experienceData[1]}>
                    <div className='pt-3'>
                        <ul className={`list-unstyled text-justify`}>
                            <li>- Design architecture and development of Settlement instruction renovation program, which is a repository for creating, maintaining and settlement instructions. Settlement instructions are used for trade enrichment, settlement and confirmation.</li>
                            <li>- Defining the UI application architecture, selecting appropriate framework, dev environment setup, hiring and leading UI team during the implementation process.</li>
                            <li>- Contributed to Real estate investment tracking application of Morgan Stanley.
                            </li>
                            <li>- Designed and developed a very well appreciated Google Map integrated web application for Morgan Stanley Real Estate Investments (Similar to 99acres)</li>
                        </ul>
                    </div>
                </Experience>

                <Experience experience={experienceData[2]}>
                    <div className='pt-3'>
                        <ul className='list-unstyled text-justify'>
                            <li>- Automated the mechanism to add peer review comments on violation of Adobe code policy against new perforce check- ins through the implementation of wrapper over code collaborator API</li>
                            <li>- Developed and deployed a Bugbot using Perl for collecting unallocated bugs for a particular project and reporting to management</li>
                        </ul>
                    </div>
                </Experience>
            </div>
        </div>
    )
}

export default experienceList;
