import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/actionCreators";
import styles from "./TopNavbar.module.css";

const TopNavbar = () => {
  const userName = useSelector((store) => store.userName);
  const [unModel, setUNModel] = useState(userName);
  const dipatch = useDispatch();
  const onSetUserName = useCallback(
    (userName, event) => {
      if (event) {
        event.preventDefault();
      }
      dipatch(setUserName(userName));
    },
    [dipatch]
  );
  const formClasses = [];
  if (userName) {
    formClasses.push(styles.hide);
  } else {
    formClasses.push(styles.show);
  }
  const userDiv = userName ? (
    <span className={"navbar-text"}>
      Witaj, {userName} <i onClick={() => onSetUserName(null)}>&times;</i>
    </span>
  ) : null;
  return (
    <nav className={"navbar navbar-expand-sm navbar-light bg light"}>
      <NavLink to={"/"} className={"navbar-brand"} activeClassName={"active"}>
        Strona główna
      </NavLink>
      <div className={"d-flex justify-content-end w-100"}>
        <div className={formClasses.join(" ")}>
          <form
            className={"form-inline"}
            action={null}
            onSubmit={(e) => onSetUserName(unModel, e)}
          >
            <input
              value={unModel}
              className={"form-control mr-2"}
              placeholder={"Wpisz identyfikator"}
              onChange={(event) => setUNModel(event.target.value)}
            />
            <button type={"submit"} className={"btn btn-outline-default"}>
              Ustaw usera
            </button>
          </form>
        </div>
        {userDiv}
      </div>
    </nav>
  );
};

export default TopNavbar;
