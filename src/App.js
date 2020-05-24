import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import MainReducer from "./store/MainReducer";
import TopNavbar from "./components/top-navbar/TopNavbar";

const store = createStore(MainReducer);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <TopNavbar></TopNavbar>
        <Switch>
          <Route component={Main} path={"/"} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
