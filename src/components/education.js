import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./details.module.scss";

class Education extends Component {
  componentDidMount() {
    //get request
    // fetch('https://reqres.in/api/users')
    //     .then(res => res.json())
    //     .then(output => {
    //         console.log(output)
    //     })
    //post request
    // fetch('https://reqres.in/api/users', {
    //     body: {
    //         "name": "morpheus",
    //         "job": "leader"
    //     },
    //     method: 'POST'
    // })
    //     .then(res => res.json())
    //     .then(output => {
    //         console.log(output)
    //     })
  }

  render() {
    return (
      <div className="row no-gutters">
        <div className={`col-12 col-sm-2 ${classes.companyIcon}`}>
          <img
            src={"./images/" + this.props.education.icon}
            className="mt-2 mb-2"
            alt={this.props.education.firm}
          />
        </div>
        <div className={`${classes.fontsSize} col-12 col-sm-10 pl-3`}>
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
          <hr className={classes.lighterHr} />
          {this.props.children}

          {/*{this.props.education.showLine? (<hr/>): null}*/}
        </div>
      </div>
    );
  }
}

Education.propTypes = {
  education: PropTypes.shape({
    college: PropTypes.string,
    degree: PropTypes.string,
    specialization: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
    icon: PropTypes.string,
    showLine: PropTypes.bool,
  }),
};

export default Education;
