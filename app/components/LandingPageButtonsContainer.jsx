import Link from "next/link";

import classes from "./LandingPageButtonsContainer.module.css";

const LandingPageButtonsContainer = () => {
  return (
    <div>
      <Link href="" className={classes["button-primary"]}>
        <div className={classes["button-container"]}>Sign up with Google</div>
      </Link>
    </div>
  );
};

export default LandingPageButtonsContainer;
