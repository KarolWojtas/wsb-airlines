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
    <div className={styles.root}>
      <Router>
        <div className="container-fluid">
          <div
            style={{ top: `${height - 50}px` }}
            className={`${styles.headerText} pl-2`}
          >
            Lot w lepszą przyszłość!
          </div>
          <div className="row">
            <FlareComponent
              width={width}
              height={height}
              animationName="mainAnimation"
              file={WsbAirlines}
            ></FlareComponent>
          </div>
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
          <div className={`${styles.footer} row py-2`}>
            <div className="col-sm-6 text-sm-right pr-2">
              <h6>
                Wsb Airlines <br />
                sp z o.o.
              </h6>
            </div>
            <div className="col-sm-6 d-flex flex-column small">
              Kontakt:
              <br />
              Gdynia 81-650 Narcyzowa 23a/12
              <br />
              Tel:
              <br />
              +48 999 999 999
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
