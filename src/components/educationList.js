import React from 'react';
import Education from "./education";
import educationData from "../data/education";
import commonClasses from '../commons.module.scss';

const educationList = props => {
    return (
        <div className={`card text-secondary ${commonClasses.detailSection} m-auto shadow mb-4`}>
            <div className="card-body text-left">
                <h4 className="card-title text-primary">Education</h4>
                <hr/>
                <Education education={educationData[0]}>
                    <div>Rewarded with Best innovation prize in Annual National technical festival (technex '07)
                        for presentation of Digital Economy concept with working model.
                    </div>
                </Education>
                <Education education={educationData[1]}>
                    <div>
                        Attended Courses on Artificial Intelligence, Cryptography, Distributed systems,
                        Software engineering best practices.
                        Also grabbed excellent grip on data structures, algorithms and Core Java.
                    </div>
                </Education>

            </div>
        </div>
    )
};

export default educationList;
