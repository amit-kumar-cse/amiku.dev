import React from "react";
import classes from "./header.module.scss";

const Header: React.FC = () => {
  return (
    <div className="rounded-lg shadow-lg">
      <div className={classes.bgImageContainer}>
        <img src="./images/header-image.jpg" alt={"Background"} />
        <img
          src="./images/amit-kumar.jpg"
          className={`${classes.photo} img-fluid shadow-lg`}
          alt={"Amit Kumar"}
        />
      </div>

      <div
        className={`jumbotron text-center position-relative mb-4 ${classes.headlineBox}`}
      >
        <h3 className={`${classes.title}`}>Amit Kumar</h3>
        <h5 className={`text-secondary ${classes.shadow}`}>
          Full Stack Software Professional
        </h5>
        <h5 className={`text-secondary ${classes.shadow}`}>
          React | Java | AWS
        </h5>
      </div>
    </div>
  );
};

export default Header;
