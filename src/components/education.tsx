import React, { Component } from "react";

import classes from "./details.module.scss";
import EducationModel from "../model/educationModel";
import cx from "classnames";

interface EducationProps {
  education: EducationModel;
}

class Education extends Component<EducationProps> {
  render() {
    return (
      <div className={classes.edHolder}>
        <div className={`${classes.companyIcon}`}>
          <img
            src={"./images/" + this.props.education.icon}
            className="mt-2 mb-2"
            alt={this.props.education.college}
          />
        </div>
        <div className={cx([classes.fontsSize, classes.summary])}>
          <div className={`${classes.gray} mb-1 font-weight-bolder`}>
            {this.props.education.college}
          </div>
          <div className={`${classes.gray} font-weight-bold`}>
            {this.props.education.degree +
              ", " +
              this.props.education.specialization}
          </div>
          <div className="text-secondary">
            {this.props.education.startDate} - {this.props.education.endDate}
          </div>
          {/*<hr className={classes.lighterHr} />*/}
        </div>
        <div className={cx([classes.fontsSize, classes.details])}>
          {/*<hr className={classes.lighterHr} />*/}
          {this.props.children}

          {/*{this.props.experience.showLine? (<hr/>): null}*/}
        </div>
      </div>
    );
  }
}

export default Education;
