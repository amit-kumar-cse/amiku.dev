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
                    <p>Software professional with close to 6 years of experience in system design and
                        development across Banking and Advertising domains at Amazon, Morgan Stanley and Adobe.</p>

                    <ul className={commonClasses.listStyle}>
                        <li>Proficient in React/Angular web development ecosystem.</li>
                        <li>Proficient in server-side technologies like Java-Spring Ecosystem, Object Oriented
                            Design.</li>
                        <li>Hands-on experience in AWS, Relational and NoSQL Databases.</li>
                        <li>Expert at data structure and algorithms, clean and performant system design.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default aboutMe;
