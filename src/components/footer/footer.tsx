import React from "react";
import classes from "./footer.module.scss";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const Footer: React.FC = () => {
  let navigateToGithub = () => {
    window.open("https://github.com/amikudev");
  };

  let navigateToLinkedin = () => {
    window.open("https://www.linkedin.com/in/amikudev/");
  };

  let navigateToTwitter = () => {
    if (window.innerWidth > 800) {
      window.open("https://twitter.com/amikudev");
    } else {
      window.open("https://mobile.twitter.com/amikudev");
    }
  };

  let sendEmail = () => {
    window.open("mailto:amitgarg.cse@gmail.com");
  };

  // let openAll = () => {
  //   navigateToGithub();
  //   navigateToLinkedin();
  //   navigateToTwitter();
  //   sendEmail();
  // };

  return (
    <footer className={classes.footer}>
      {/*<FaBookOpen onClick={openAll} size={30} className={`${classes.icon}`} />*/}
      <FaGithub
        onClick={navigateToGithub}
        size={30}
        className={`${classes.icon} mr-4`}
      />
      <FaLinkedin
        onClick={navigateToLinkedin}
        size={30}
        className={`${classes.icon} mr-4`}
      />
      <FaTwitter
        onClick={navigateToTwitter}
        size={30}
        className={`${classes.icon} mr-4`}
      />
      <MdMail onClick={sendEmail} size={30} className={`${classes.icon}`} />
    </footer>
  );
};

export default Footer;
