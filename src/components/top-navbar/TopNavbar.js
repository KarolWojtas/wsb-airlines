import React, { useCallback, useState, useMemo, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "../../store/actionCreators";
import styles from "./TopNavbar.module.css";
import personCircleIcon from "../../assets/personCircle.svg";
import xCircle from "../../assets/xCircle.svg";
import useWindowDimensions from "../../util/useWindowDimension";
import { calcAnimationHeight } from "../../util/constants";
import useScrollTop from "../../util/useScrollTop";
import menuImg from "../../assets/menu_open.svg";

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
  const userDiv = userName ? (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={"d-flex justify-content-between"}>
      <span className="navbar-text text-center mr-2 text-truncate">
        Witaj, {userName}
      </span>
      <button type="button" className="btn btn-outline-default">
        <img
          src={xCircle}
          className={styles.icon}
          alt="log out"
          onClick={() => onSetUserName(null)}
        />
      </button>
    </a>
  ) : (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      data-toggle="modal"
      data-target="#loginModal"
      className="d-flex justify-content-space"
    >
      <img
        className={`${styles.icon} mr-1`}
        src={personCircleIcon}
        alt="Ustaw identyfikator"
      />
      <span>Zaloguj</span>
    </a>
  );
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
    <Fragment>
      <nav className={navBarClasses.join(" ")}>
        <NavLink to={"/"} className={"navbar-brand"} activeClassName={"active"}>
          WSB Airlines
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mainMenu"
        >
          <img src={menuImg} alt="menu" />
        </button>
        <div
          className={`d-flex justify-content-end align-items-center w-100 ${styles.rightMenuItems}`}
        >
          <div>
            <div className="collapse navbar-collapse" id="mainMenu">
              <ul className="navbar-nav">
                <li className="nav-item mr-2">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    className="h-100 d-flex align-items-center"
                  >
                    Wyszukiwarka
                  </NavLink>
                </li>
                <li className="nav-item mr-2">
                  <NavLink
                    exact={true}
                    to={"/services"}
                    activeClassName="active"
                    className="h-100 d-flex align-items-center"
                  >
                    Usługi dodatkowe
                  </NavLink>
                </li>
                <li className="nav-item">{userDiv}</li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form
                className="form-inline"
                onSubmit={(e) => onSetUserName(unModel, e)}
              >
                <div className="form-group">
                  <div className="col-sm-5">
                    <label for="loginInput" className="mr-sm-2 my-1">
                      Login
                    </label>
                  </div>
                  <div className="col-sm-7">
                    <input
                      id="loginInput"
                      value={unModel}
                      className={"form-control"}
                      placeholder={"Wpisz identyfikator"}
                      onChange={(event) => setUNModel(event.target.value)}
                    />
                  </div>
                </div>
                <div className="form-group mt-sm-2">
                  <div className="col-sm-5">
                    <label for="passwordInput" className="mr-sm-2 my-1">
                      Hasło
                    </label>
                  </div>
                  <div className="col-sm-7">
                    <input
                      type="password"
                      id="passwordInput"
                      className="form-control"
                      placeholder="Wpisz hasło"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={(e) => onSetUserName(unModel, e)}
              >
                Zaloguj
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TopNavbar;
