import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import TopNavbar from "./components/top-navbar/TopNavbar";
import FlareComponent from "flare-react";
import WsbAirlines from "./assets/WsbAirlines.flr";
import useWindowDimensions from "./util/useWindowDimension";
import { calcAnimationHeight } from "./util/constants";
import styles from "./App.module.css";
import Services from "./containers/Services";

function App() {
  const { width } = useWindowDimensions();
  const height = useMemo(() => calcAnimationHeight(width), [width]);
  return (
    <Router>
      <div
        style={{ top: `${height - 50}px` }}
        className={`${styles.headerText} pl-2`}
      >
        Lot w lepszą przyszłość!
      </div>
      <FlareComponent
        width={width}
        height={height}
        animationName="mainAnimation"
        file={WsbAirlines}
      ></FlareComponent>
      <TopNavbar></TopNavbar>
      <div className={styles.content}>
        <Switch>
          <Route path={"/services"}>
            <Services />
          </Route>
          <Route path={"/"}>
            <Main />
          </Route>
        </Switch>
      </div>
      <div className={styles.footer}>ogarnąc footer</div>
    </Router>
  );
}

export default App;
