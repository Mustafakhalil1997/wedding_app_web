import React from "react";
import { Route, useHistory } from "react-router-dom";
import UploadList from "../Layout/SideNavBar/UploadList/UploadList";
import ShowGifts from "./ShowGifts/ShowGifts";
import ShowList from "./ShowList/ShowList";
import classes from "./Profile.module.css";

const Profile = (props) => {
  // const isSidebarOpen = useSelector((state) => state.sidebar.sidebarOpen);

  // const { uploadListSelected } = props.location;
  // console.log("uploadListSelected ", uploadListSelected);

  const history = useHistory();

  window.onload = () => {
    console.log("historyyyyy ", history);
    if (history.location.pathname === "/profile/uploadlist")
      history.replace("/profile");
  };

  // const [show, setShow] = useState(false);

  // const toggleShow = () => {
  //   setShow(!show);
  // };

  // const cssClasses = [
  //   classes.testdiv,
  //   show ? classes.active : classes.inactive,
  // ];

  return (
    <React.Fragment>
      <p className={classes.profile}>this is the profile page</p>

      {/* <Route path="/profile/uploadlist"> */}
      {/* <UploadList /> */}
      {/* </Route> */}
      {/* {isSidebarOpen && <SidePanel />} */}

      <Route path="/profile/uploadlist">
        <UploadList />
      </Route>

      <Route path="/profile/showlist">
        <ShowList />
      </Route>

      <Route path="/profile/gifts">
        <ShowGifts />
      </Route>
    </React.Fragment>
  );
};

export default Profile;
