import MainNavigation from "./MainNavigation";
import React from "react";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <div className={classes.background_image}></div>
      <main className={classes.main}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
