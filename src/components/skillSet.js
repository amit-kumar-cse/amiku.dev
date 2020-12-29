import React from "react";
import { SkillBars } from "react-skills";
import { skillData } from "../data/skillData";
import classes from "./details.module.scss";

const SkillSet = () => {
  // return
  return (
    <div className={`card text-secondary ${classes.detailSection} shadow mb-4`}>
      <div className={`card-header ${classes.myCardHeader}`}>
        <h4 className={`card-title ${classes.textShadow} ${classes.gray}`}>
          Key Skills
        </h4>
      </div>
      <div
        className={`${classes.fontsSize} ${classes.cardBody} card-body text-left`}
      >
        <SkillBars skills={skillData}></SkillBars>
      </div>
    </div>
  );
};

export { SkillSet };
