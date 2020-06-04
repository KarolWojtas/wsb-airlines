import React, { useCallback, useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/actionCreators";
import styles from "./TopNavbar.module.css";
import personCircleIcon from "../../assets/personCircle.svg";
import xCircle from "../../assets/xCircle.svg";
import useWindowDimensions from "../../util/useWindowDimension";
import { calcAnimationHeight } from "../../util/constants";
import useScrollTop from "../../util/useScrollTop";

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
  // the same as in App.js but whatever
  const { width } = useWindowDimensions();
  const height = useMemo(() => calcAnimationHeight(width), [width]);
  const navBarClasses = ["navbar navbar-expand-sm fixed-top navbar-light"];
  const scrollTop = useScrollTop();

  // if scrolled past animation, change navbar background to bg-light
  if (height < scrollTop) {
    navBarClasses.push("bg-light");
  }
  return (
    <nav className={navBarClasses.join(" ")}>
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
