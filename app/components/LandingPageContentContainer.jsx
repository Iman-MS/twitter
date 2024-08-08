import LandingPageButtonsContainer from "./LandingPageButtonsContainer";

import classes from "./LandingPageContentContainer.module.css";

const LandingPageContentContainer = () => {
  return (
    <div className={classes.container}>
      <h1>Happening now</h1>
      <h4>Join today.</h4>
      <LandingPageButtonsContainer />
    </div>
  );
};

export default LandingPageContentContainer;
