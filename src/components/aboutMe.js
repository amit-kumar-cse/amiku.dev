import React from "react";
import classes from "./details.module.scss";

const aboutMe = (props) => {
  return (
    <div className={`card text-secondary ${classes.detailSection} shadow mb-4`}>
      <div className={`card-header ${classes.myCardHeader}`}>
        <h4 className={`card-title ${classes.textShadow} ${classes.gray}`}>
          About Me
        </h4>
      </div>
      <div
        className={`${classes.fontsSize} ${classes.cardBody} card-body text-left`}
      >
        {/*<hr/>*/}
        <div className="text-justify">
          <p>
            Software professional with 7 years of experience in Javascript
            frontends design and development at Amazon, GE Healthcare, Morgan
            Stanley and Adobe.
          </p>

          <ul className={classes.listStyle}>
            <li>Proficient in React/Angular web development ecosystem.</li>
            <li>Hands-on experience in AWS, Relational and NoSQL Databases.</li>
            <li>
              Expert at data structure and algorithms, clean and performant
              system design.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default aboutMe;
