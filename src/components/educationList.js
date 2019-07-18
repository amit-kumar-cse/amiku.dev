import React from 'react';
import Education from "./education";
import educationData from "../data/education";
import classes from './details.module.scss';

const educationList = props => {
    return (
        <div className={`card text-secondary ${classes.detailSection} mb-5 shadow`}>
            <div className={`card-header ${classes.myCardHeader}`}>
                <h2 className="text-secondary">Education</h2>
            </div>
            <div className="card-body text-left">
                <Education education={educationData[0]}>
                    <div className='text-justify'>Rewarded with Best innovation prize in Annual National technical festival (technex '07)
                        for presentation of Digital Economy concept with working model.
                    </div>
                </Education>
                <Education education={educationData[1]}>
                    <div className={`text-justify`}>
                        Attended Courses on Artificial Intelligence, Cryptography, Distributed systems,
                        Software engineering best practices.
                        Grabbed excellent grip on data structures, algorithms and Core Java.
                    </div>
                </Education>

            </div>
        </div>
    )
};

export default educationList;
