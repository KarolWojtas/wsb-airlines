import React, { useMemo } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainReducer from "./store/MainReducer";
import TopNavbar from "./components/top-navbar/TopNavbar";
import FlareComponent from "flare-react";
import WsbAirlines from "./assets/WsbAirlines.flr";
import useWindowDimensions from "./util/useWindowDimension";
import { calcAnimationHeight } from "./util/constants";

const store = createStore(MainReducer);
function App() {
  const { width } = useWindowDimensions();
  const height = useMemo(() => calcAnimationHeight(width), [width]);
  return (
    <Provider store={store}>
      <Router>
        <FlareComponent
          width={width}
          height={height}
          animationName="mainAnimation"
          file={WsbAirlines}
        ></FlareComponent>
        <TopNavbar></TopNavbar>
        <Switch>
          <Route component={Main} path={"/"} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
