import React from 'react';
import classes from "./details.module.scss";

const aboutMe = props => {
    return (
        <div className={`card text-secondary ${classes.detailSection} shadow mb-5`}>
            <div className={`card-header ${classes.myCardHeader}`}>
                <h2 className="card-title text-secondary">About Me</h2>
            </div>
            <div className={`${classes.fontsSize} card-body text-left`}>

                {/*<hr/>*/}
                <div className='text-justify'>
                    <p>Software professional with close to 6 years of experience in system design and
                        development across Banking and Advertising domains at Amazon, Morgan Stanley and Adobe.</p>

                    <ul className={classes.listStyle}>
                        <li>Proficient in React/Angular web development ecosystem.</li>
                        <li>Proficient in server-side technologies like Java, Spring, Object Oriented Design.</li>
                        <li>Hands-on experience in AWS, Relational and NoSQL Databases.</li>
                        <li>Expert at data structure and algorithms, clean and performant system design.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default aboutMe;
