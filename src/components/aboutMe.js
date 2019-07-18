import React from 'react';
import commonClasses from "./commons.module.scss";
import classes from "./details.module.scss";

const aboutMe = props => {
    return (
        <div className={`card text-secondary ${commonClasses.detailSection} shadow mb-4`}>
            <div className={`${classes.fontsSize} card-body text-left`}>
                <h1 className="card-title text-primary">About</h1>
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
    )
};

export default aboutMe;
