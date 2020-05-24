import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/actionCreators";
import styles from "./TopNavbar.module.css";
import personCircleIcon from "../../assets/personCircle.svg";
import xCircle from "../../assets/xCircle.svg";

const TopNavbar = () => {
  const userName = useSelector((store) => store.userName);
  const [unModel, setUNModel] = useState(userName);
  const dipatch = useDispatch();
  const onSetUserName = useCallback(
    (userName, event) => {
      if (event) {
        event.preventDefault();
        event.target.value = "";
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
    <div className={"d-flex justify-content-space"}>
      <span className={"navbar-text text-center mr-2"}>Witaj, {userName} </span>
      <button type={"button"} className={"btn btn-outline-default"}>
        <img
          src={xCircle}
          className={styles.icon}
          alt={"close"}
          onClick={() => onSetUserName(null)}
        />
      </button>
    </div>
  ) : null;
  return (
    <nav className={`navbar navbar-expand-sm navbar-light bg light`}>
      <NavLink to={"/"} className={"navbar-brand"} activeClassName={"active"}>
        WSB Airlines
      </NavLink>
      <div
        className={`d-flex justify-content-end align-items-center w-100 ${styles.rightMenuItems}`}
      >
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
              <img
                className={styles.icon}
                src={personCircleIcon}
                alt={"Ustaw identyfikator"}
              />
            </button>
          </form>
        </div>
        {userDiv}
      </div>
    </nav>
  );
};

export default TopNavbar;
