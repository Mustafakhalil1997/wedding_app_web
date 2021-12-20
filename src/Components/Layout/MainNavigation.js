import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { tokenActions } from "./../../store/tokenSlice";
import { sidebarActions } from "./../../store/sidebarSlice";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SidePanel from "./SideNavBar/SidePanel";
const MainNavigation = () => {
  const token = useSelector((state) => state.idToken.idToken);
  // const sidebarOpen = useSelector(state => state);
  const [sidebar, setSidebar] = useState(false);

  console.log("tokennn ", token);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(tokenActions.logoutHandler());
  };

  const toggleSideBar = () => {
    // dispatch(sidebarActions.toggleSidebar());
    setSidebar(!sidebar);
  };

  // const navClasses = sidebar
  //   ? `${classes.nav_menu} ${classes.active}`
  //   : classes.nav_menu;

  return (
    <React.Fragment>
      <header className={classes.header}>
        {/* {token && (
          <button onClick={toggleSideBar} className={classes.sidebar_icon}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <div className={classes.first_nav}>
          <Link to="/">
            <span className={classes.logo}> Welcome Home </span>
          </Link>
          {token && (
            <Link to="/profile">
              <span className={classes.logo}>Profile</span>
            </Link>
          )}
        </div> */}
        <div className={classes.navbar}>
          <span className={classes.menu_bars}>
            <FaIcons.FaBars onClick={toggleSideBar} />
          </span>
          <ul className={classes.nav_list}>
            {token.length !== 0 && (
              <li className={classes.nav_list_item}>
                <Link to="/login" onClick={logoutHandler}>
                  Logout
                </Link>
              </li>
            )}
            {token.length === 0 && (
              <li className={classes.nav_list_item}>
                <Link to="/register">Register</Link>
              </li>
            )}
            {token.length === 0 && (
              <li className={classes.nav_list_item}>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>

        <SidePanel sidebar={sidebar} toggleSideBar={toggleSideBar} />
      </header>
    </React.Fragment>
  );
};

export default MainNavigation;
