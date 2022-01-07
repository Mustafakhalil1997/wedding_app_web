import React, { useEffect } from "react";
import axios from "axios";
import Slideshow from "../Components/Slideshow/Slideshow";

const HomePage = () => {
  // only for testing connection to the backend

  // useEffect(() => {
  //   const getInvitees = async () => {
  //     try {
  //       const invitees = await axios.get("http://localhost:3000/invitees");
  //       console.log("invitees", invitees);
  //       const data = invitees.data;
  //       console.log("data ", data.invitees[0]);
  //     } catch (error) {
  //       console.log("error ", error);
  //     }
  //   };
  //   getInvitees();
  // }, []);

  return (
    <React.Fragment>
      <p style={{ fontSize: "1.5rem", color: "white" }}>
        This is the main Page
      </p>
      <Slideshow />
    </React.Fragment>
  );
};

export default HomePage;
