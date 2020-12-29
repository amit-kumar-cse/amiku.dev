import React from "react";
import classes from "./App.module.scss";
import "./App.scss";

import AboutMe from "./components/aboutMe";
import EducationList from "./components/educationList";
import ExperienceList from "./components/experienceList";
import { SkillSet } from "./components/skillSet";
import { skillData } from "./data/skillData";
import MapComponent from "./components/googleMaps";
import Footer from "./components/footer/footer";

// import $ from 'jquery';
// import Popper from 'popper.js';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    const randomImageKey = 2;
    // const randomImageKey = Math.random()*5;
    let url = `images/bg-${randomImageKey}.jpeg`;
    console.log("url", url);
    let style = {
      backgroundImage: `url(${url})`,
    };

    return (
      <div className={`container-fluid ${classes.App}`} style={style}>
        <div className="rounded-lg shadow-lg">
          <div className={classes.bgImageContainer}>
            <img
              src="./images/code-coding-data-574073.jpg"
              alt={"Background"}
            />
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

        {/*body*/}
        <div className={classes.detailsContainer}>
          <AboutMe />
          <SkillSet skillData={skillData} />
          <ExperienceList />
          <EducationList />
          <MapComponent />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
