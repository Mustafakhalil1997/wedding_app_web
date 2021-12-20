import classes from "./SidePanel.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import UploadList from "./UploadList/UploadList";
import Transition from "react-transition-group/Transition";
import { useSelector } from "react-redux";

// revisit and change uploadList to a route

const SidePanel = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.idToken.userIsLoggedIn);
  console.log(isLoggedIn);

  const [uploadListSelected, setUploadListSelected] = useState(false);

  const { sidebar, toggleSideBar } = props;

  const navClasses = sidebar
    ? `${classes.nav_menu} ${classes.active}`
    : classes.nav_menu;

  return (
    <React.Fragment>
      {/* <Transition
        mountOnEnter
        unmountOnExit
        in={uploadListSelected}
        timeout={300}
      >
        {(state) => <UploadList show={state} closed={closeUploadList} />}
      </Transition> */}
      <nav className={navClasses}>
        <ul className={classes.nav_menu_items}>
          <div>
            <li className={classes.navbar_toggle}>
              <span className={classes.menu_bars} onClick={toggleSideBar}>
                <AiIcons.AiOutlineClose />
              </span>
            </li>
          </div>
          {/* <li className={classes.nav_text}>
            <Link to="/profile" >
              <FaIcons.FaRegUser className="item1" />
              <span className="item2">Profile</span>
            </Link>
          </li> */}
          <li className={classes.nav_text}>
            <Link to="/">
              <FaIcons.FaRegUser className="item1" />
              <span className="item2">Home</span>
            </Link>
          </li>
          {isLoggedIn && (
            <React.Fragment>
              <li className={classes.nav_text}>
                <Link
                  to={{
                    pathname: "/profile",
                    state: {
                      show: true,
                    },
                  }}
                >
                  <FaIcons.FaRegUser className="item1" />
                  <span className="item2">Profile</span>
                </Link>
              </li>
              <li className={classes.nav_text}>
                <Link to="/profile/uploadlist">
                  <FaIcons.FaFileUpload className="item1" />
                  <span className="item2">Upload List</span>
                </Link>
              </li>
              <li className={classes.nav_text}>
                <Link to="/profile/showlist">
                  <FaIcons.FaThList className="item1" />
                  <span className="item2">List</span>
                </Link>
              </li>
              <li className={classes.nav_text}>
                <Link to="/profile/gifts">
                  <FaIcons.FaGifts />
                  <span>Gifts </span>
                </Link>
              </li>{" "}
            </React.Fragment>
          )}

          <li className={classes.nav_text}>
            <Link to="">
              <FaIcons.FaGifts />
              <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* <div id="main">
        <button className={`${classes.openbtn}`} onClick={toggleSideBar}>
          ☰ Open Sidebar
        </button>{" "}
      </div> */}
    </React.Fragment>
  );
};

export default SidePanel;
