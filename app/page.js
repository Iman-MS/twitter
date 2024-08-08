import Image from "next/image";

import LandingPageContentContainer from "./components/LandingPageContentContainer";

import classes from "./page.module.css";

export default function Home() {
  return (
    <div className={classes["landing-page-container"]}>
      <Image
        src="/twitter-white.svg"
        width={500}
        height={500}
        alt="Twitter logo"
        style={{ flex: 1 }}
      />
      <LandingPageContentContainer />
    </div>
  );
}
