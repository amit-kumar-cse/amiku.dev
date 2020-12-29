import React from "react";
import Education from "./education";
import educationData from "../data/education";
import classes from "./details.module.scss";

const educationList = (props) => {
  return (
    <div className={`card text-secondary ${classes.detailSection} mb-4 shadow`}>
      <div className={`card-header ${classes.myCardHeader}`}>
        <h4 className={`card-title ${classes.textShadow} ${classes.gray}`}>
          Education
        </h4>
      </div>
      <div className={`card-body text-left ${classes.cardBody}`}>
        <Education education={educationData[0]}>
          <div className="text-justify">
            Rewarded with Best innovation prize in Annual National technical
            festival (technex '07) for presentation of Digital Economy concept
            with working model.
          </div>
        </Education>
        <hr />
        <Education education={educationData[1]}>
          <ul className={`list-unstyled text-justify`}>
            <li>
              - Attended Courses on Artificial Intelligence, Cryptography,
              Distributed systems, Software engineering best practices.
            </li>
            <li>
              - Grabbed excellent grip on data structures, algorithms and Core
              Java.
            </li>
          </ul>
        </Education>
      </div>
    </div>
  );
};

export default educationList;
